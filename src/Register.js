import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import './user.css'

export default function Register(){
    let naviget = useNavigate();
    let [userPasword, setUserPasword] = useState({username:'',password:''});

    function createAccount(){
        axios.post('http://localhost:9999/users', userPasword ).then((response)=>{
            naviget('/');
            console.log(response.data)
        }).catch((error) => {
            console.error("Lỗi khi tạo tài khoản:", error);
        });
    }


    return(
        <>
            <div  className={'container'}><p><h4>Register Page</h4></p>
            <input className={'edit'} type="text" placeholder="Tạo tên đăng nhập" value={userPasword.username} onChange={(e)=>setUserPasword({...userPasword, username: e.target.value})}/>
            <input className={'edit'} type="text" placeholder="Tạo mật khẩu" value={userPasword.password} onChange={(e)=>setUserPasword({...userPasword, password: e.target.value})}/>
            <button onClick={()=>createAccount() }>tạo tài khoản</button>
            </div>
        </>
    )
}