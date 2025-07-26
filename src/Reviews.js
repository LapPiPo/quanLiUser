import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

export default function Reviews() {
    const {id} = useParams();
    const [users, setUser] = useState(null);


    useEffect(()=> {
        axios.get('http://localhost:9999/users/' + id).then(response => {
            setUser(response.data);
        })
    },[id])

    return (
        <>
            <div className={'container'}><p><h4>Reviews Page</h4></p></div>
            <div className={'container-list'}>
                {users && (
                    <div className={'item'}>
                        <div>tên: {users.name}</div>
                        <div>chức vụ: {users.department}</div>
                        <div>chuyên môn: {users.role}</div>
                        <div>điểm: {users.performanceScore}</div>
                    </div>
                )}
            </div>
            <div className={'container-list'}>
                {users?.reviews && users.reviews.map((review)=>(
                    <div>
                    <div className={'item'}>tiêu chí đánh giá: {review.criteria}</div>
                    <div className={'item'}>điểm đánh giá: {review.score}</div>
                    <div className={'item'}>nhận xét đánh giá: {review.comment}</div>
                    <div className={'item'}>ngày đánh giá: {review.date}</div>
                    <div className={'item'}>người đánh giá: {review.reviewer}</div>

                    </div>
                ))}

            </div>
            <div><button><Link to={"/list"}> quay về List Page </Link></button></div>
        </>
    )
}