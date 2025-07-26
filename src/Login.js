import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export default function Login(){
    const [userPassword, setUserPassword] = useState({username:'',password:''})
    const naviget  = useNavigate();
    const [error,setError] = useState(null);

    function dangNhap(){
        axios.get('http://localhost:9999/users').then(res=>{
            const duLieu = res.data;
            const timDuLieu = duLieu.find((x)=> x.username === userPassword.username && x.password === userPassword.password);
            if(timDuLieu){
                alert(`Đăng nhập thành công: ${timDuLieu.username}`);
                naviget('/list')
            }
            else{setError('tài khoản không đúng')}
        }).catch((err) => {
            console.error("Lỗi khi đăng nhập:", err);
            setError("Không thể kết nối đến server.");
        });
    }


    return(
        <>
            <div className={'container'}><p><h4>Login Page</h4></p>
                <input className={'edit'} type="text" placeholder={'nhập username'} value={userPassword.username} onChange={((e)=>setUserPassword({...userPassword, username:e.target.value}) )}/>
                <input className={'edit'} type="text" placeholder={'nhập mật khẩu'} value={userPassword.password} onChange={((e)=>setUserPassword({...userPassword, password:e.target.value}) )}/>
                <button className={'edit1'} onClick={()=> dangNhap()}>đăng nhập</button>
                {error && <p>{error}</p>}
                <h5>chưa có tài khoản <Link to={"/Register"}> tạo tài khoản</Link></h5>
            </div>
        </>
    )
}