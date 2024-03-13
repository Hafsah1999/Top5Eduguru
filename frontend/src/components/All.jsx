// import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const All = () => {
    const [Playway, setPlayway] = useState([])
   
    const fetchPlaywayData = async () => {
        const res = await fetch("http://localhost:5000/Playway/getall");
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setPlayway(data);
          
        }
    }

    useEffect(() => {
        fetchPlaywayData()
    }, [])


    const displayPlaywayData = () => {
        if (Playway.length === 0) {
            return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
        }

        return Playway.map((col) => (
            <>
                <div className="col-md-3 ">
                    <div className="card border-none shadow">
                        <Link to={`/ViewPlayway/${col._id}`}> <img src={'http://localhost:5000/' + col.image} alt="" className="card-img-top p-3 img-fluid" style={{ objectFit: "cover", height: 200 }} />
                        </Link>
                        <div className="card-body">
                            <div className="">
                                <h2 className=' fw-semibold fs-5 mt-2 mb-2 ' style={{ fontFamily: "serif" }}>{col.pname}</h2>
                                <p className='text-muted mb-2' style={{}}>{col.title}</p>

                                <p className='text-red-700 mb-2 me-3' style={{ fontFamily: "cursive" }}>{col.phone}</p>
                                <p className='text-red-700 ' style={{ fontFamily: "cursive" }}>{col.email}</p>
                                <p className='text-muted mb-2' style={{}}>{col.paddress}</p>

                            </div>
                        </div>
                    </div>
                </div>

            </>
        ))
    }

    const [School, setSchool] = useState([])

    const fetchSchoolData = async () => {
        const res = await fetch("http://localhost:5000/school/getall");
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setSchool(data)
        }
    }

    useEffect(() => {
        fetchSchoolData()
    }, [])

    const displaySchoolData = () => {
        if (School.length === 0) {
            return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
        }

        return School.map((col) => (
            <>

                <div className="col-md-3 mb-3">
                    <div className="card border-none shadow">
                        <Link to={`/ViewSchool/${col._id}`}> <img src={'http://localhost:5000/' + col.image} alt="" className="card-img-top p-3 img-fluid" style={{ objectFit: "cover", height: 200 }} />
                        </Link>
                        <div className="card-body">
                            <div className="">
                                <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.sname}</h2>
                               
                                <p className='text-red-700 mb-2' style={{ fontFamily: "cursive" }}>{col.saddress}</p>
                                <p className='text-muted me-3' style={{ fontFamily: "cursive" }}>{col.phone}</p>
                                <p className='text-muted ' style={{ fontFamily: "cursive" }}>{col.email}</p>

                            </div>
                        </div>
                    </div>

                </div>
            </>
        ))
    }
    const [college, setcollege] = useState([])

    const fetchCollegeData = async () => {
        const res = await fetch("http://localhost:5000/college/getall");
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setcollege(data)
        }
    }

    useEffect(() => {
        fetchCollegeData()
    }, [])

    const displaycollegeData = () => {
        if (college.length === 0) {
            return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
        }

        return college.map((col) => (
            <>

                <div className="col-md-3 mb-3">
                    <div className="card border-none shadow">
                        <Link to={`/ViewCollege/${col._id}`}> <img src={'http://localhost:5000/' + col.image} alt="" className="card-img-top p-3 img-fluid" style={{ objectFit: "cover", height: 200 }} />
                        </Link>
                        <div className="card-body">
                            <div className="">
                                <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.cname}</h2>
                                <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.courses}</h2>

                                <p className='text-red-700 mb-2' >{col.caddress}</p>
                                <p className='text-muted me-3' style={{ fontFamily: "cursive" }}>{col.phone}</p>
                                <p className='text-muted ' style={{ fontFamily: "cursive" }}>{col.email}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </>
        ))
    }



    return (
        <>

          

            <div className="container">
                <p className="mt-5 mb-2 fs-4 font-mono uppercase  fw-semibold">Playway</p>
                <hr className='mb-2' />
                <div className="row">
                    <div>
                        {displayPlaywayData()}
                    </div>
                </div>
            </div>

            <div className="container">
                <p className="mt-5 mb-2 fs-4 font-mono uppercase  fw-semibold">school</p>
                <hr className='mb-2' />
                <div className="row ">


                    <div>
                        {displaySchoolData()}
                    </div>

                </div>
            </div>

            <div className="container">
                <p className="mt-5 mb-2 fs-4 font-mono uppercase  fw-semibold">college</p>
                <hr className='mb-2' />
                <div className="row">
                    <div>
                        {displaycollegeData()}
                    </div>


                </div>
            </div>


        </>
    )
}

export default All