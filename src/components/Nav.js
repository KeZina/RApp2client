import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login.js';
import { UserContext } from '../context';

const Nav = () => {
    const [loginTrigger, setLoginTrigger] = useState(false);
    const [linkSelector, setLinkSelector] = useState(null);
    const handleTrigger = () => setLoginTrigger(!loginTrigger);

    const user = useContext(UserContext);

    useEffect(() => {
        if(user.data && user.data.auth) {
            setLinkSelector(
                <>
                    <Link to = '/Profile'>
                        Profile
                    </Link>
                    <Link onClick = {user.logout}>
                        Logout
                    </Link>
                </>
            )
        } else {
            setLinkSelector(
                <Link onClick = {handleTrigger}>
                    Login
                </Link>
            )
        }
    }, [user])

    return(
        <>
            <nav id = "nav">
                <Link to = '/' >
                    Main
                </Link>
                <Link to = '/Search'>
                    Search
                </Link>
                {linkSelector}
            </nav>
            {loginTrigger && 
                <Login handleTrigger = {handleTrigger} />
            }
        </>
    )
} 

export default Nav;