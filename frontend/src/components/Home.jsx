import { FaSearchDollar } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdContactPage } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <>

<div className="conatiner" style={{ height: "90vh" }}>
        <div className="row px-5 shadow-lg py-5">
          <div className="col-md-7 shadow py-3 mt-5 px-16 pt-16">
            <p className="fs-2 fw-semibold font-serif text-yellow-600">Discover and Compare Schools,Universities, Colleges, and Playway Centers Near You</p>
            <p className="mt-3 fs-5">  Whether you&apos;re searching for top-notch colleges, reputable schools, or nurturing playway centers, we&apos;ve got you covered. From academic excellence to engaging playway programs, EducationHub is your trusted guide in navigating the educational landscape. Start your journey towards quality education today!</p>
          </div>
          <div className="col-md-5">
            <img className=' w-75 pt-12' src="https://img.freepik.com/premium-vector/young-man-searching-internet_456660-290.jpg?w=740" alt="" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row bg-blue-900 h-48 mb-5" style={{borderRadius:"30px"}}>
          <div className="col-md-3 flex items-center justify-center flex-col">
          <p className="fs-1  text-yellow-600 mb-3"><FaSearchDollar /></p>
          <p className="fs-5 fw-semibold font-mono text-white text-center">Save 100s of hour <br /> on Searching</p>
          </div>
          <div className="col-md-3 flex items-center justify-center flex-col">
          <p className="fs-1  text-yellow-600 mb-3"><MdContactPage  /></p>
          <p className="fs-5 fw-semibold font-mono text-white text-center">Playway,School,College and University in one place</p>
          </div>
          <div className="col-md-3 flex items-center justify-center flex-col">
          <p className="fs-1  text-yellow-600 mb-3"><FaBalanceScale /></p>
          <p className="fs-5 fw-semibold font-mono text-white text-center">Merit and Scholarship</p>
          </div>
          <div className="col-md-3 flex items-center justify-center flex-col">
          <p className="fs-1  text-yellow-600 mb-3"><FaSearchDollar /></p>
          <p className="fs-5 fw-semibold font-mono text-white text-center">Save 100s of hour <br /> on Searching</p>
          </div>
       
        </div>
      </div>

      <div className="container-fluid bg-dark bg-opacity-25 " style={{ background: "linear-gradient(to bottom,#e0c374,white,white" }}>
        <div className="row  ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-img">
                <div className="card bg-light bg-opacity-25" style={{ height: "80vh" }}>
                  {/* <InputGroup className="mb-3 w-75 mx-auto pt-5">
              
                    <InputGroup.Text id="basic-addon2" className="px-4 fs-5 bg-dark bg-opacity-75 text-white">
                      <FaSearch />
                    </InputGroup.Text>
                  </InputGroup> */}
                  <h1 className="px-5  text-center  text-white bg-dark bg-opacity-75 py-3" style={{ fontSize: "35px", fontFamily: "serif", marginTop: "120px" }}>Exploring Top-Tier Educational Institutions: <br /> Unveiling the Best 5 Colleges for Academic Excellence</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-img-1">
                <div className="card bg-light bg-opacity-25" style={{ height: "80vh" }}>
                  {/* <InputGroup className="mb-3 w-75 mx-auto pt-5">
                    <Form.Control
                      className="bg-dark bg-opacity-75 search py-2 text-white"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2" className="px-4 fs-5 bg-dark bg-opacity-75 text-white">
                      <FaSearch />
                    </InputGroup.Text>
                  </InputGroup> */}
                  <h1 className="px-5 text-center  text-white bg-dark bg-opacity-75 py-3" style={{ fontSize: "35px", marginTop: "120px", fontFamily: "serif" }} >Exploring Top-Tier Educational Institutions: <br /> Unveiling the Best 5 Colleges for Academic Excellence</h1>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      






       <div className="py-5 mb-5" style={{ height: "90vh", background: "linear-gradient(to bottom,white,white,#e0c374" }}>
        <div className="container  ">
          <div className="row py-4 px-4 shadow-lg  mt-5">
            <div className="col-md-6 px-3  mt-5">

              <h1 className="mt-3 " style={{ fontFamily: "fantasy", letterSpacing: "1px", fontSize: "35px" }}>Discover, Compare, Choose</h1>
              <p className="fs-5 mt-4">Top5 Eduguru simplify your decision-making process by curating a list of the best five institutions in each category. Our mission is to provide comprehensive insights, helping you make informed choices that align with your educational goals. With Top 5 Eduguru, embark on your academic journey with confidence and find excellence in education.
                <br /> <button className="w-50 mt-4 fs-4 navbar-2 rounded-lg" >Learn More..</button>  </p>
            </div>
            <div className="col-md-3 mt-5">
              <img src="https://i.pinimg.com/236x/88/c7/a2/88c7a23546a9ea851b888a6a51dcecf6.jpg" alt="" />
            </div>

            <div className="col-md-3 mt-5">

              <img src="https://i.pinimg.com/236x/7b/d1/dd/7bd1dd8219e3a12afa53f61c1ac84f97.jpg" alt="" />
            </div>
            {/* <div className="col-md-3">
            <img src="https://i.pinimg.com/236x/9a/09/3e/9a093ee803c8ad6dd488f74ba71778ba.jpg" alt="" />

          </div> */}
          </div>
        </div>
      </div>  

    </>

  )
}

export default Home