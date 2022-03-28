import { useState } from "react";

function UserInfo (props) {

    return (
        <div>
            <h2> {props.name} </h2>
            <p> {props.website} </p>
            {/* <p> {props.email} </p> */}
            <a href={props.email}> Email </a>
        </div>
    )
}

export default UserInfo;