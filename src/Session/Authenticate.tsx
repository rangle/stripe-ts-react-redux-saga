import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { sessionSet } from "./sessionActions";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Authenticate: React.FC = () => {

    const dispatch = useDispatch();
    const code = useQuery().get("code");

    code && dispatch(sessionSet(code));
    return <>
        <Redirect to="/"></Redirect>
    </>
};

export default Authenticate;
