import { FaSearch } from "react-icons/fa"
// import Button from "react-bootstrap/esm/Button"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import  { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const University = () => {
  
  
    const [product, setProduct] = useState([]);
  
  
    const { category } = useParams();
  
    const fetchShowpieceproduct = async () => {
      const res = await fetch("http://localhost:5000/product/getbycategory/University");
  
      console.log(res.status);
  
      const data = await res.json();
      console.log(data);
      if (category) {
        setProduct(data.filter((ser) => ser.category === category));
      } else {
        setProduct(data);
      }
    };
  
    useEffect(() => {
      fetchShowpieceproduct();
    }, []);

    const displayproductData = () => {
        if (product.length === 0) {
          return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
        }
    
        return product.map((product) => (
          <>
            <div className='col-md-3 mt-4 '>
              <div className=" bg-transparent " style={{ border: "none" }}>
               <Link to={`/ViewProduct/${product._id}`}> <img src={'http://localhost:5000/' + product.image} alt="" className="card-img-top img-fluid" style={{ objectFit: "cover", height: 250 }} />
               </Link>
                <div className="card-footer" style={{ border: "none", height: "200px" }}>
                  <h2 className=' fw-semibold fs-5 mt-3 mb-3' style={{ fontFamily: "serif" }}>{product.pname}</h2>
                  <p className='text-red-700' style={{ fontFamily: "cursive" }}>{product.pprice}</p>
    
                  <p className='text-black  mb-3' style={{ fontFamily: "cursive" }}>{product.pcategory}</p>
    
                  <button className='mt-2 mb-2 btn btn-danger'  >Add TO Cart</button>
                 
                  <Link to={`/ViewProduct/${product._id}`}><button className="btn " style={{fontFamily:"serif"}} >View More</button></Link>
                </div>
              </div>
            </div>
          </>
        ))
    
      };
    
    
      const filterProducts = (e) => {
          const value = e.target.value;
          setProduct(product.filter((product) => {
              return product.name.toLowerCase().includes(value.toLowerCase())
          })
          );
      };
  
    return (
        <div className="vh-100" style={{ background: "linear-gradient(to bottom,#e0c374,white,white" }}>
            <InputGroup className="mb-3 w-75 mx-auto pt-5">
                <Form.Control
                    className="bg-dark bg-opacity-75 search py-2 text-white"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    onChange={filterProducts}
                />
                <InputGroup.Text id="basic-addon2" className="px-4 fs-5 bg-dark bg-opacity-75 text-white">
                    <FaSearch />
                </InputGroup.Text>
            </InputGroup>

       
    <div className="pt-2">


    <div className="container-fluid ">
      <div className="container">
        <div className="row  ">
          {displayproductData()}
        </div>
      </div>
    </div>





  </div>




        </div>
    )
}

export default University