import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import './user.css'
export default function Edit (){
    const {id} = useParams();
    const naviget = useNavigate(); // ❌ sai

    const [user, setUser] = useState(null)


    useEffect(()=> {
    axios.get('http://localhost:9999/users/' + id).then((response) => {
        setUser(response.data);
    }).catch((err) => {
        console.error("Lỗi khi tải dữ liệu:", err);
    });
}, []);



    function luuChinhSua(){
        axios.put("http://localhost:9999/users/" + id, user).then((response) => {
            naviget('/list')
        })
    }

    return(
        <>
            <div  className={'container'}><p><h4>Edit Page</h4></p>
                {user && (<div>
                    <div className={'edit'}><p>Tên:</p> <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}/></div>
                    <div className={'edit'}><p>Chức Vụ:</p> <input type="text" value={user.department} onChange={(e) => setUser({...user, department: e.target.value})}/></div>
                    <div className={'edit'}><p>Chuyên Môn:</p> <input type="text" value={user.role} onChange={(e) => setUser({...user, role: e.target.value})}/></div>
                    <div className={'edit'}><p>Điểm:</p> <input type="text" value={user.performanceScore} onChange={(e) => setUser({...user, performanceScore: e.target.value})}/></div>
                    <div className={'edit1'}><button onClick={()=> luuChinhSua()}>Lưu</button></div>
                    </div>)}
            </div>
            </>
            )
}