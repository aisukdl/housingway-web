import { useState } from "react";
import "../styles/Form.css"
import validateRegister from "../validate/registerValidate";
import * as authApi from '../api/auth-api';
import { toast } from "react-toastify";
function SignUpForm({onClose}){
    const initialInput = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    };
    const [input,setInput] = useState(initialInput)
    const [error,setError] = useState({});
    const handleChangeInput = e => {
        setInput({...input,[e.target.name]:e.target.value})
    }

    const handleSubmitForm = async e => {
        try{
            e.preventDefault();
            const result = validateRegister(input);
            if (result) {
                setError(result)
            }else {
                setError({});
                await authApi.register(input);
                setInput(initialInput);
                onClose();
                toast.success('register completed')
            }
        }
        catch(err){
            console.log(err)
            toast.error(err.message)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmitForm} >
                <label htmlFor="username">username</label>
                <input type={"text"} name="username" id="username" value={input.username} onChange={handleChangeInput} className={`form-control ${error ? 'is-invalid' : ''}`}/>
                {error.username && <div className="invalid-feedback">{error.username}</div>}
                <label htmlFor="email">email</label>
                <input type={"email"} name="email" id="email" value={input.email} onChange={handleChangeInput} className={`form-control ${error ? 'is-invalid' : ''}`}/>
                {error.email && <div className="invalid-feedback">{error.email}</div>}
                <label htmlFor="password">password</label>
                <input type={"password"} name="password" id="password" value={input.password} onChange={handleChangeInput} className={`form-control ${error ? 'is-invalid' : ''}`}/>
                {error.password ? <div className="invalid-feedback">{error.password}</div> : null}
                <label htmlFor="confirmPassword">confirm password</label>
                <input type={"password"} name="confirmPassword" id="confirmPassword" value={input.confirmPassword} onChange={handleChangeInput} className={`form-control ${error ? 'is-invalid' : ''}`}/>
                {error.confirmPassword && <div className="invalid-feedback">{error.confirmPassword}</div>}
                <div>
                    already have an account? <span onClick={onClose} style={{color:"#A7EDD1",fontWeight:"bold",cursor:"pointer"}}>login</span> 
                </div>
                <button type="submit" className="login-button">Sign Up</button>
            </form>
        </div>
    )
}
export default SignUpForm;