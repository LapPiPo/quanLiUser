import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import './user.css'

export default function Register(){
    let navigate = useNavigate();
    let [userPassword, setUserPasword] = useState({username:'',password:''});

    function creatAccount(){
        if(!userPassword.username || !userPassword.password){
            alert("vui lòng không bỏ trống");
            return
        }
        axios.get("http://localhost:9999/users",).then((response)=>{
            const data = response.data.some((x)=>x.username === userPassword.username);
            if(data){
                alert('tài khoản đã tồn tại')
                return
            }
            else{
                axios.post("http://localhost:9999/users", userPassword).then((response) => {
                    alert("Account created successfully");
                    navigate('/login');
                })
            }
        })

    }


    return(
        <>
            <div  className={'container'}><p><h4>Register Page</h4></p>
            <input className={'edit'} type="text" placeholder="Tạo tên đăng nhập" value={userPassword.username} onChange={(e)=>setUserPasword({...userPassword, username: e.target.value})}/>
            <input className={'edit'} type="text" placeholder="Tạo mật khẩu" value={userPassword.password} onChange={(e)=>setUserPasword({...userPassword, password: e.target.value})}/>
            <button onClick={()=>creatAccount() }>tạo tài khoản</button>
            </div>
        </>
    )
}