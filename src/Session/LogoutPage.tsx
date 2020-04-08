import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {sessionClear} from "./sessionActions";

const LogoutPage: React.FC = () => {

    const dispatch = useDispatch();
    dispatch(sessionClear());

    return <>
        <div>You have been logged out!</div>
        <Link to="/" >Log in again</Link>
    </>
}

export default LogoutPage;
