import React, { useState, useEffect } from "react";
import axios from "axios";
import './ListUser.scss'
import { useNavigate } from "react-router-dom";

const ListUser = () => {
    const navigate = useNavigate();
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('https://reqres.in/api/users?page=1');
                setListUser(res && res.data && res.data.data ? res.data.data : []);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }
        fetchData();
    }, []);

    const ChoiceUser = (user) => {
        navigate(`/user/${user.id}`);
    };

    return (
        <div className="ListUser-container">
            Danh sách User
            <div className="title"></div>
            <div className="child-listUser-content">
                {listUser && listUser.length > 0 &&
                    listUser.map((item, index) => (
                        <div className="child-listUser" key={item.id} onClick={() => ChoiceUser(item)}>
                            {index + 1} - {item.first_name} - {item.last_name}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ListUser;
