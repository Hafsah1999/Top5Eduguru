import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

// step4: validation schema
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(3, 'Too short')
    .max(20, 'Too long'),
  email: Yup.string()
    .email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too short')
    .max(20, 'Too long')
    .required('Password is required').matches(/[A-Z]/, 'password must contain uppercase letters')
    .matches(/\W/, 'Password must contain special characters'),
    cpassword: Yup.string().required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
})


const Signup = () => {
  const navigate = useNavigate();
  //step1 : formik initialization
  const SignupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cpassword: ''
    },
    onSubmit: async (values, action) => {

      console.log(values);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }

      });
      console.log(res.status)
      action.resetForm();

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Signup Success',
          text: 'You have been successfully signed up!',
        })
        navigate('/login');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })

      }
    },
    validationSchema: SignupSchema
  })
  return (
    <div>
      <div className="container-fluid bg-red-200  flex items-center justify-content-center vh-100">
        <div className="row ">
          <div className="col shadow-lg px-5" style={{ height: "550px", width: "1220px" }}>
            <div className="row p-5">

              <div className="col-md-6 pt-8 ">
                <p className='text-center fs-1 fw-bold font-serif'>Register</p>
                <p className="text-sm text-center fs-5 mt-2 mb-4" style={{ fontFamily: "monospace" }}>Already a customer? <Link to="/Login" className='text-primary underline' >Login</Link></p>

                <div className="card-body">
                  {/* step3 : handling when submit */}
                  <form onSubmit={SignupForm.handleSubmit} className='w-75' style={{ marginLeft: "100px" }}>
                    {/* step2 : main form handling */}
                    <div className="form-group">

                      <input type="text" className="form-control  mb-2"
                        placeholder="Username" id="name"
                        onChange={SignupForm.handleChange}
                        value={SignupForm.values.name} />
                      <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{SignupForm.touched.name && SignupForm.errors.name}</span>

                    </div>
                    <div className="form-group">

                      <input type="email" className="form-control mb-2"
                        id="email" placeholder='email'
                        onChange={SignupForm.handleChange}
                        value={SignupForm.values.email} />
                      <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{SignupForm.touched.email && SignupForm.errors.email}</span>

                    </div>
                    <div className="form-group">

                      <input type="password" className="form-control mb-2"
                        id="password" placeholder='password'
                        onChange={SignupForm.handleChange}
                        value={SignupForm.values.password} />
                      <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{SignupForm.touched.password && SignupForm.errors.password}</span>

                    </div>
                    <div className="form-group">

                      <input type="password" className="form-control mb-2"
                        id="cpassword" placeholder='confirm password'
                        onChange={SignupForm.handleChange}
                        value={SignupForm.values.cpassword} />
                      <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{SignupForm.touched.cpassword && SignupForm.errors.cpassword}</span>

                    </div>
                    <button type='submit' className="btn  bg-blue-400 mt-3 font-serif fs-5 hover:bg-blue-500 text-white w-75 mx-auto d-block  " style={{ borderRadius: "20px" }}>Signup</button>
                  </form>
                </div>
              </div>

              <div className="col-md-6 flex justify-content-center mt-3" >
                <img className='img-fluid ' src="https://www.chqbank.com/assets/user/img/login.png" alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup