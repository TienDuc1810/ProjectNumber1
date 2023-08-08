import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InfoUser = () => {
    const params = useParams();
    const [user, setUser] = useState({}); // Sử dụng useState thay vì setState
    const id = params.id;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://reqres.in/api/users/${id}`);
                setUser(response.data.data); // Lưu ý cấu trúc dữ liệu response.data.data
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, [id]);
    
    const BackList = () => {
        navigate('/user')
    }
    const checkObject = Object.keys(user).length === 0;

    return (
        <>
            <div>Hello with id: {id}</div>
            {!checkObject && (
                <>
                    <div>User name: {user.first_name} - {user.last_name}</div>
                    <div>User email: {user.email}</div>
                    <div>
                        <img src={user.avatar} alt="User Avatar" />
                    </div>
                    <div><button onClick={()=>BackList()}> Back</button></div>
                </>
            )}
        </>
    );
};

export default InfoUser;
