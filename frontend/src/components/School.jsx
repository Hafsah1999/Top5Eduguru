import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const School = () => {
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
        <div className="row h-50">
          <div className="col-md-3">
            <Link to={`/ViewSchool/${col._id}`}> <img src={'http://localhost:5000/' + col.image} alt="" className="card-img-top p-3 img-fluid" style={{ objectFit: "cover", height: 200 }} />
            </Link>
          </div>


          <div className="col-md-6 py-4">
            <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.sname}</h2>
            <p className='text-red-700 mb-2' style={{ fontFamily: "cursive" }}>{col.saddress}</p>
            <p className='text-muted me-3' style={{ fontFamily: "cursive" }}>{col.phone}</p>
            <p className='text-muted ' style={{ fontFamily: "cursive" }}>{col.email}</p>
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

      <div className="">
        {displaySchoolData()}
      </div>

    </>
  )
}

export default School