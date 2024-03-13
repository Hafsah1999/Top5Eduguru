import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Playway from './components/Playway'
import School from './components/School'
import University from './components/University'
import College from './components/College'
import Search from './components/Search'
import AddCollege from './components/Admin/AddCollege'
import ViewCollege from './components/viewCollege'
import ViewSchool from './components/ViewSchool'
import AddSchool from './components/Admin/AddSchool'
import ViewPlayway from './components/viewPlayway'
import AddPlayway from './components/Admin/AddPlayway'
import Review from './components/Review'
import Footer from './components/Footer'
import Manage from './components/Admin/ManageCollege'
import MCA from './components/Courses/MCA'
import Admin from './components/Admin/Index'
// import AdminAuth from './AdminAuth'
import Dashboard from './components/Admin/Dashboard'
import UserAuth from './UserAuth'
import { AppProvider } from './AppContext'
import Manageuser from './components/Admin/Manageuser'
import ManageSchool from './components/Admin/ManageSchool'
import ManagePlayway from './components/Admin/ManagePlayway'
import All from './components/All'
import ManageReviews from './components/Admin/ManageReviews'
import UpdateCollege from './components/Admin/UpdateCollege'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <AppProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/viewCollege/:id" element={<ViewCollege />} />
            <Route path="/viewSchool/:id" element={<ViewSchool />} />
            <Route path="/viewPlayway/:id" element={<ViewPlayway />} />
            <Route path="/MCA" element={<MCA />} />


            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Review/:id" element={<UserAuth><Review /></UserAuth>} />

            <Route path="/Playway" element={<Playway />} />
            <Route path="/All" element={<All />} />

            <Route path="/School" element={<School />} />
            <Route path="/College" element={<College />} />
            <Route path="/University" element={<University />} />



            {/* <Route path='/Admin' element={<AdminAuth><Admin /></AdminAuth>}> */}
            <Route path='/Admin' element={<Admin />}>

              <Route path='Dashboard' element={<Dashboard />} />
              <Route path="Manage" element={<Manage />} />
              <Route path="AddCollege" element={<AddCollege />} />
              <Route path="AddSchool" element={<AddSchool />} />
              <Route path="AddPlayway" element={<AddPlayway />} />
              <Route path="Manageuser" element={<Manageuser />} />
              <Route path="ManageSchool" element={<ManageSchool />} />
              <Route path="ManagePlayway" element={<ManagePlayway />} />
              <Route path="ManageReviews" element={<ManageReviews />} />
              <Route path="UpdateCollege/:id" element={<UpdateCollege />} />




            </Route>

          </Routes>
          <Footer />
        </AppProvider>
      </BrowserRouter>

    </>
  )
}

export default App