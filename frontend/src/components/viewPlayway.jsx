import { useEffect, useState } from 'react'
import { FaRegStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom'

const ViewPlayway = () => {
    const { id } = useParams();

    const [PlaywayList, setPlaywayList] = useState([]);
    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/playway/getbyid/' + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setPlaywayList(data);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const [reviews, setreviews] = useState([])

    const fetchreviewsDAta = async () => {
        const res = await fetch("http://localhost:5000/playwayReview/getall");
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setreviews(data)
        }
    }

    useEffect(() => {
        fetchreviewsDAta()
    }, [])

    const ReviewsData = () => {
        if (reviews.length === 0) {
            return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
        }

        return reviews.map((rev) => (
            <>
                <div className="row h-50">
                    <div className="rev-md-6 py-4">
                        <p className='text-yellow-600 me-3' style={{ fontFamily: "cursive" }}>{rev.rating}Star</p>

                        <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{rev.name}</h2>
                        <h2 className='  mt-3 mb-3 '>{rev.comment}</h2>

                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
                <hr />
            </>
        ))
    }

    return (
        <>
            {
                PlaywayList !== null ? (

                    <div className="container pt-1 px-16">
                        <div className="row text-center flex items-center  flex-col">
                            <div className="col-md-5">
                                <img src={'http://localhost:5000/' + PlaywayList.image} onClick={window.scrollTo(0, 0)} alt="" className="img-fluid mb-3" />

                            </div>
                            <h1 className=' fw-semibold text-red-500 fs-2 mt-3 mb-1' style={{ fontFamily: "serif" }}>{PlaywayList.pname}</h1>
                            <p className='text-secondary  mb-3 fs-5' style={{ fontFamily: "serif" }}>{PlaywayList.paddress}</p>
                            <p className=' fs-5 fw-semibold mb-5'>{PlaywayList.timings}</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        Loading
                    </div>
                )
            }
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <p className="fs-4 mb-2">Reviews and Ratings</p>
                        <div className="row">
                            <div className="col-md-1 ">
                                <p className="bg-green-600 h-14 mb-2 w-16 rounded flex items-center content-center flex-col fs-2 text-white">4.3 </p>
                            </div>
                        </div>
                        <p className="fs-4 mb-2">Finish your review </p>
                        <span><button className='btn hover:bg-orange-500 me-2 hover:text-white border py-2 '>
                            <FaRegStar className='fs-3' />
                        </button></span>
                        <span><button className='btn btn-light me-2  hover:bg-orange-500 hover:text-white border py-2 '>
                            <FaRegStar className='fs-3' />
                        </button></span>
                        <span><button className='btn btn-light  hover:bg-orange-500 hover:text-white me-2 border py-2 '>
                            <FaRegStar className='fs-3' />
                        </button></span>
                        <span><button className='btn btn-light  hover:bg-orange-500 me-2 hover:text-white border py-2 '>
                            <FaRegStar className='fs-3' />
                        </button></span>
                        <span><button className='btn btn-light  hover:bg-orange-500 me-4 hover:text-white border py-2 '>
                            <FaRegStar className='fs-3' />
                        </button></span>

                        <Link to={`/playwayReview/${PlaywayList._id}`}><button type="button" className="text-blue-700 fs-5 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Add Review</button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {ReviewsData()}
                </div>
            </div>
        </>


    )
}


export default ViewPlayway