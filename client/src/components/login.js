import {useNavigate} from "react-router";
import { useState } from 'react';
export default function Login(){

    const [loginid,setloginid] = useState('')
    const [password,setpassword] = useState('')
    const navigate = useNavigate();

    const handlesubmit = (e) =>{
        e.preventDefault();
    
        if( (loginid === "123") && (password === "123")){
            navigate('/user');
        }
    
      }

    return (
        <div> Home page
      <form onSubmit={handlesubmit}>
        <div>
          <label>
            Login:
            <input
            type= "text"
            value = {loginid}
            onChange ={(e) => setloginid(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
            type = "text"
            value = {password}
            onChange ={(e) => setpassword(e.target.value)}
            />
          </label>
        </div>

        <div>
          <button className="button is-primary">Login</button>
        </div>

        
      </form>
     
    </div>
    );
}