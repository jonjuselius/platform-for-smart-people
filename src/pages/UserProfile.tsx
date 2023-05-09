import React from 'react';
import {Link} from "react-router-dom";

function UserProfile() {
    return (
        <>
            <h1>UserProfile</h1>
            <Link to={"/calendar"}>Calendar</Link>
        </>
    );
}

export default UserProfile;
