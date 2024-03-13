import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewSchool = () => {
    const { id } = useParams();





    const [SchoolList, setSchoolList] = useState([]);
    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/school/getbyid/' + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setSchoolList(data);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);




    return (
        <>
            {
                SchoolList !== null ? (

                    <div className="container pt-1 px-16">
                        <div className="row text-center flex items-center  flex-col">
                            <div className="col-md-5">
                                <img src={'http://localhost:5000/' + SchoolList.image} onClick={window.scrollTo(0, 0)} alt="" className="img-fluid mb-3" />

                            </div>


                            <h1 className=' fw-semibold text-red-500 fs-2 mt-3 mb-1' style={{ fontFamily: "serif" }}>{SchoolList.sname}</h1>
                            <p className='text-secondary  mb-3 fs-5' style={{ fontFamily: "serif" }}>{SchoolList.saddress}</p>
                          
                            <p className=' fs-5 fw-semibold mb-5'>{SchoolList.sdetail}</p>

                          

                            {/* <p className=' mb-2  ' ><span className="fw-bold me-1">Phone no:</span>{SchoolList.phone}</p>
                            <p className="mb-5"><span className="fw-bold me-1">Email:</span>{SchoolList.email}</p> */}

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


export default ViewSchool