import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Admin = () => {
  return (
    <div>
   <div className="row">
    <div className="col-md-2">
      <Sidebar />
    </div>
    <div className="col-md-10 px-16">
      <Outlet />
    </div>
   </div>
    </div>
  )
}

export default Admin