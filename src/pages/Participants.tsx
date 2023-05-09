import React from 'react';
import { Link } from 'react-router-dom';

function Participants() {
    return (
        <>
            <h1>Participants</h1>
            <Link to={"/userprofile"}>User profile</Link>
        </>
    );
}

export default Participants;
