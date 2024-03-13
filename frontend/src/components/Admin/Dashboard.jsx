import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-4 ">
          <Link to="/Admin/Manageuser">  <div className="card h-40 flex items-center justify-center  hover:bg-yellow-700 hover:text-black  bg-yellow-600 border-none">
            <p className="fs-3 fw-semibold font-serif text-white" >User Details</p>
          </div>
          </Link>
        </div>
        <div className="col-md-4 ">
          <Link to="/Admin/ManageReviews">  <div className="card h-40 flex items-center justify-center  hover:bg-yellow-700 hover:text-black  bg-yellow-600 border-none">
            <p className="fs-3 fw-semibold font-serif text-white" >Reviews and Rating</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard