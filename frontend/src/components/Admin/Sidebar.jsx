import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <>

      <div className="w-[250px] bg-yellow-600 vh-100 fixed ">
        .
        <Link to='/Admin/Dashboard'> <p className="text-white fs-3 text-center font-mono fw-semibold">Admin Panel</p>
        </Link> <hr className="text- mb-3" />
        <Link to='/Admin/ManagePlayway'>
          <p className="bg-black text-white py-2 hover:bg-white hover:text-black mb-2 text-center mx-3 rounded fs-5">Manage Playway </p>
        </Link>
        <Link to='/Admin/ManageSchool'>
          <p className="bg-black text-white py-2 hover:bg-white hover:text-black mb-2 text-center mx-3 rounded fs-5">Manage School </p>
        </Link>
        <Link to='/Admin/Manage'>
          <p className="bg-black text-white py-2 hover:bg-white hover:text-black mb-2 text-center mx-3 rounded fs-5">Manage College </p>
        </Link>
    
        <Link to='/Admin/AddPlayway'>
          <p className="bg-black text-white py-2  hover:bg-white hover:text-black mb-2 text-center mx-3 rounded fs-5">Playway </p>
        </Link>
        <Link to='/Admin/AddSchool'>
          <p className="bg-black text-white py-2  hover:bg-white hover:text-black mb-2 text-center mx-3 rounded fs-5">School </p>
        </Link>
        <Link to='/Admin/AddCollege'>
          <p className="bg-black text-white py-2  hover:bg-white hover:text-black mb-2 text-center mx-3 rounded fs-5">College </p>
        </Link>
        <Link to='/'>
          <p className="bg-black text-white py-2  hover:bg-white hover:text-black mb-2 text-center mx-3 rounded fs-5"><span className="flex items-center justify-center ">Logout <FaArrowRight className="mx-2" /> </span></p>
        </Link>
      </div>

    </>
  )
}

export default Sidebar