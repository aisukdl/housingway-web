import { useState } from "react";
import useAuth from "../hooks/useAuth";
import RegisterModal from "../pages/RegisterModal";
import "../styles/Form.css"
import {toast} from 'react-toastify'
function LogInForm({onClose}){
    const [openRegister,setOpenRegister] = useState(false)
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {login} = useAuth();
    const handleSubmitForm = async e => {
        try {
          e.preventDefault();
          await login(username, password);
          toast.success('login completed!')
          onClose();
        } catch (err) {
          console.log(err);
          toast.error('wrong username or password');
        }
      };
    return (
        <div>
            <form onSubmit={handleSubmitForm}> 
                <label htmlFor="username">username</label>
                <input type={"text"} name="username" id="username" onChange={e=>setUsername(e.target.value)}/>
                <label htmlFor="password">password</label>
                <input type={"password"} name="password" id="password" onChange={e=>setPassword(e.target.value)}/>
                <div style={{margin:"10px"}}>
                    <center>forgot password | <span onClick={setOpenRegister} style={{color:"#A7EDD1",fontWeight:"bold",cursor:"pointer"}}>sign up</span> </center>
                </div>
                <button type="submit" className="login-button">Log In</button>
            </form>
            <RegisterModal open={openRegister} onClose={() => setOpenRegister(false)} />
        </div>
    )
}
export default LogInForm;