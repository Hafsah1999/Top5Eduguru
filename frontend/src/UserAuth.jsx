import  {  useState } from 'react'
import { useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

const UserAuth = ({children}) => {

  const Navigate = useNavigate();
  const [currentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );

  if(currentUser!==null){
    return children;
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text : 'You are not logged in!'
    })
    return <Navigate to="/login" />
  }
  
  

}

export default UserAuth;