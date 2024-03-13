import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const Playway = () => {
  const [Playway, setPlayway] = useState([])

  const fetchPlaywayData = async () => {
    const res = await fetch("http://localhost:5000/Playway/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setPlayway(data)
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
        <div className="row h-50">
          <div className="col-md-3">
            <Link to={`/ViewPlayway/${col._id}`}> <img src={'http://localhost:5000/' + col.image} alt="" className="card-img-top p-3 img-fluid" style={{ objectFit: "cover", height: 200 }} />
            </Link>
          </div>


          <div className="col-md-6 py-4">
            <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.pname}</h2>
            <p className='text-red-700 mb-2' style={{ fontFamily: "cursive" }}>{col.paddress}</p>
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
        {displayPlaywayData()}
      </div>

    </>
  )
}

export default Playway