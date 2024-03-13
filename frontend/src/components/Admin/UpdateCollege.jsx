import { Formik } from 'formik'
import  { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'

const UpdateCollege = () => {

  const [selFile, setSelFile] = useState("");

    const { id } = useParams();

    const [CollegeData, setCollegeData] = useState(null);

    const navigate = useNavigate();

    // console.log(id);

    const getCollegeData = async () => {
        const res = await fetch('http://localhost:5000/college/getbyid/'+id);
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setCollegeData(data);
    }

    useEffect(() => {
      getCollegeData();
    }, [])
    

    const updateCollegeForm = async (values) => {
        console.log(values);
        values.image = selFile;

        const res = await fetch('http://localhost:5000/College/update/'+id, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        console.log(res.status);
        if(res.status === 200){
          toast('College Updated Successfully', { variant: 'success' });
          navigate('/Manage');
        }
    };

    const uploadFile = async (e) => {
      let file = e.target.files[0];
      setSelFile(file.name);
      const fd = new FormData();
      fd.append('myfile', file);

      const res = await fetch('http://localhost:5000/util/uploadfile', {
          method: 'POST',
          body: fd
      })
      console.log(res.status);
  }

  return (
    <div className='vh-100 bg-body-secondary'>
      <div className='col-md-4 mx-auto py-5'>
        <div className="card">
          <div className="card-body p-4">
            {
              CollegeData !== null ? (<Formik initialValues={CollegeData} onSubmit={updateCollegeForm} >
                { ( signupForm ) => {
                  return <form onSubmit={ signupForm.handleSubmit }>
                  <h2 className='text-center'>Update College Form</h2>
                  <hr />
    
                  <div className="form-group ">
                    <label htmlFor="imageUrl" className="mb-2 font-serif"></label>
                    <input
                        type="file"
                        name="image"
                        onChange={uploadFile}
                        className="form-control mb-3 input"
                        required=''
                    />
                </div>
                <div className="form-floating ">
                    <input type="text" className="form-control input mb-2" id="floatingInput"
                        name='cname'
                        onChange={updateCollegeForm.handleChange}
                        value={updateCollegeForm.values.cname}

                        required="" placeholder="College" />
                    <label htmlFor="floatingInput" className='font-serif'>College Name</label>
                </div>
                <div className="form-floating ">
                    <input type="text" className="form-control input mb-2" id="floatingInput"
                        name='title'
                        onChange={updateCollegeForm.handleChange}
                        value={updateCollegeForm.values.title}

                        required="" placeholder="College" />
                    <label htmlFor="floatingInput" className='font-serif'>College Name</label>
                </div>
                <div className="form-floating">
                    <input
                        name="email"
                        id="floatingInput"
                        onChange={updateCollegeForm.handleChange}
                        value={updateCollegeForm.values.email}
                        className="form-control mb-2 input"
                        required=''
                        placeholder="Email"
                    />
                    <label htmlFor="floatingInput" className="mb-2 font-serif">Email</label>

                </div>
                <div className="form-floating">
                    <input
                        name="phone"
                        id="floatingInput"
                        onChange={updateCollegeForm.handleChange}
                        value={updateCollegeForm.values.phone}
                        className="form-control mb-2 input"
                        required=''
                        placeholder="Phone"
                    />
                    <label htmlFor="floatingInput" className="mb-2 font-serif">Phone</label>

                </div>
                <div className="form-floating mb-2">
                    <input
                        type="text"
                        name='cdetail'
                        id="floatingInput"
                        onChange={updateCollegeForm.handleChange}
                        value={updateCollegeForm.values.cdetail}
                        className="form-control mb-2 input"
                        required=""
                        placeholder="Timings"
                    />
                    <label htmlFor="floatingInput" className=" mb-2 font-serif">Detail</label>

                </div>
                <div className="form-floating">
                    <input
                        type="text"
                        name='caddress'
                        id="floatingInput"
                        onChange={updateCollegeForm.handleChange}
                        value={updateCollegeForm.values.caddress}
                        className="form-control mb-2 input"
                        required=""
                        placeholder="Address"
                    />
                    <label htmlFor="floatingInput" className=" mb-2 font-serif">Address</label>

                </div>
                <div className="form-floating">
                    <input
                        type="text"
                        name='courses'
                        id="floatingInput"
                        onChange={updateCollegeForm.handleChange}
                        value={updateCollegeForm.values.courses}
                        className="form-control mb-2 input"
                        required=""
                        placeholder="Address"
                    />
                    <label htmlFor="floatingInput" className=" mb-2 font-serif">Courses</label>

                </div>



                <div className="form-floating">
                    <input
                        name="fees"
                        id="floatingInput"
                        onChange={updateCollegeForm.handleChange}
                        value={updateCollegeForm.values.fees}
                        className="form-control mb-4 input"
                        required=''
                        placeholder="Fees"
                    />
                    <label htmlFor="floatingInput" className="mb-2 font-serif">fees</label>

                </div>

                <button type="submit" className="bg-black font-semibold py-2  text-yellow-600 fs-5 mx-auto d-block rounded mb-5 w-50">Add</button>


                  
                  <button disabled={ signupForm.isSubmitting } type='submit' className='btn btn-dark w-100 mt-5'>Submit</button>
                </form>
                } }
            </Formik>) : <h2 className='text-center'>Loading ...</h2>
            }
            

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateCollege