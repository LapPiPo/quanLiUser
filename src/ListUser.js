import {useEffect, useState} from "react";
import axios from "axios";
import './user.css'
import {Link} from "react-router-dom";

export default function ListUser(){
    const [users, setUsers] = useState([]);

    function loadData(){
        axios.get("http://localhost:9999/users").then((response) => {
            console.log(response.data);
            setUsers(response.data);
        })
    }

    function xoa(id){
        axios.delete("http://localhost:9999/users/" + id).then(() => {
            loadData()
        })
    }

    useEffect(()=>{loadData()},[])
    return (
        <>
            <div  className={'container'}><p><h4>List User Page</h4></p>
            <button><Link to={/edit/}>Thêm mới</Link></button></div>
            <div className={'container-list'}>
                {users.map((user)=>(
                    <div className={'item'}>
                        <div>tên: {user.name}</div>
                        <div>chức vụ: {user.department}</div>
                        <div>chuyên môn: {user.role}</div>
                        <div>điểm: {user.performanceScore}</div>
                        <button><Link to={`/edit/${user.id}`}>Sửa</Link></button>

                        <button onClick={()=>{ xoa(user.id)}}>xóa</button>
                        <button><Link to={`/reviews/${user.id}`}>thông tin chi tiết</Link></button>
                    </div>
                ))}
            </div>
        </>
    )
}