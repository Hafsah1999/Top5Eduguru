import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewPlayway = () => {
    const { id } = useParams();





    const [PlaywayList, setPlaywayList] = useState([]);
    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/Playway/getbyid/' + id);
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
        </>


    )
}


export default ViewPlayway