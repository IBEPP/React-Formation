import { useEffect, useState } from "react";
import axios from "axios";
import UserInfo from "../UserInfo/UserInfo";

function Users (props) {
    let [users, setUsers] = useState([])
    
    useEffect (() => {
        let URL = "https://jsonplaceholder.typicode.com/users";
        axios(URL).then((reponse) => {
            // console.log(reponse.data);
            let result = reponse.data;
            setUsers(result)
            console.log(users);
        })
    } ,[] )

    return (
        <div>
            <h1> Salut </h1>
            {users.map((x) => <UserInfo name={x.name} website={x.website} email={x.email} /> )}
        </div>
    )

}

export default Users;