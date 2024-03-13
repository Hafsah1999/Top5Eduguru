import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'



const MCA = () => {
  const [college, setcollege] = useState([])
  const { category } = useParams();

  const fetchShowpieceproduct = async () => {
    const res = await fetch("http://localhost:5000/college/getbycategory/MCA");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    if (category) {
      setcollege(data.filter((ser) => ser.category === category));
    } else {
      setcollege(data);
    }
  };

  useEffect(() => {
    fetchShowpieceproduct();
  }, []);

  const displaycollegeData = () => {
    if (college.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }

    return college.map((col) => (
      <>



        <div className="row h-50">
          <div className="col-md-3">
            <Link to={`/ViewCollege/${col._id}`}> <img src={'http://localhost:5000/' + col.image} alt="" className="card-img-top p-3 img-fluid" style={{ objectFit: "cover", height: 200 }} />
            </Link>
          </div>


          <div className="col-md-6 py-4">
            <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.cname}</h2>
            <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.courses}</h2>

            <p className='text-red-700 mb-2' >{col.caddress}</p>
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
        {displaycollegeData()}
      </div>


  

    </>
  )
}

export default MCA;