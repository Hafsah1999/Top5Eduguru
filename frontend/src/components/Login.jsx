
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { toast } from 'react-hot-toast';
import useAppContext from '../AppContext';
// import useAppContext from '../AppContext';


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too short')
    .max(20, 'Too long')
    .required('Required'),
})

const Login = () => {
  // const { setLoggedin } = useAppContext();

  const navigate = useNavigate();
  const { setLoggedIn } = useAppContext();


  //step1 : formik initialization
  const LoginForm = useFormik({
    initialValues: {

      email: '',
      password: '',
    },
    onSubmit: async (values, action) => {

      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }

      });
      console.log(res.status)
      action.resetForm();

      if (res.status === 200) {
        toast('Login Success')
        // setLoggedin(true);
        const data = await res.json();
        sessionStorage.setItem('isloggedin', true);
        if (data.role === 'admin') {
          sessionStorage.setItem('admin', JSON.stringify(data));
          navigate('/Admin/Dashboard');
        } else {
          sessionStorage.setItem('user', JSON.stringify(data));
          setLoggedIn(true);
          navigate('/');
        }

      }
      else if (res.status === 400
      ) {
        toast("Error")
      }

    },
    validationSchema: LoginSchema

  })



  return (
    <>


      <div className="vh-100 flex items-center justify-content-center" style={{ backgroundImage: "url(https://cdn3.vectorstock.com/i/1000x1000/41/07/abstract-pastel-gradient-background-vector-30134107.jpg)", backgroundSize: "cover" }}>
        <div className="card  border-none w-50 shadow-lg" style={{ height: "400px" }}>
         
          <p className="text-center fs-3 mt-4 font-semibold font-serif ">Welcome Back</p>
                <p className="text-sm text-center fs-5 mt-2" style={{fontFamily:"monospace"}}>Don&apos;t have an account ? <Link to="/Signup" className='text-blue-500 underline'>Signup</Link> </p>
          
              <div className="w-full max-w-sm bg-white m-auto flex flex-col ">
                {/* <h1 className="">Signup</h1> */}
              
                <form className="w-full py-2 flex flex-col " onSubmit={LoginForm.handleSubmit} >

                  <label htmlFor="email" className='font-serif'>Email</label>
                  <input type="email" name="email" id="email" value={LoginForm.values.email} onChange={LoginForm.handleChange} className='mt-1 w-full mb-2 bg-red-300 px-2 py-2 rounded  focus-within:outline-blue-300' />


                  <label htmlFor="password" className='font-serif'>Password</label>
                  <div className="flex  px-2 py-1 mb-2 mt-1 bg-red-300 rounded outline-none  focus-within:outline-blue-200">
                    <input type="password" name="password" value={LoginForm.values.password} onChange={LoginForm.handleChange} id="password" className='bg-red-300 border-none outline-none w-full py-1' />
                   
                  </div>


                  <button type="submit" className=" w-full max-w-[250px] block m-auto bg-red-300 hover:bg-red-400 font-serif cursor-pointer text-dark text-xl font-medium  text-center py-1 rounded-full px-4 mt-4 ">Login</button>
                </form>

              </div>
            </div>
          </div>

   

    
    </>
  )
}

export default Login