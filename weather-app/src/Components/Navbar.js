import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';





const NavBar = () => {
    const history = useHistory();
    const homeRoute = () => { history.push('/home'); };

    return (

        <Navbar bg="light"  expand="lg">
            <Navbar.Brand onClick={homeRoute} href="#home">Weather App</Navbar.Brand>
        </Navbar>
    );
}

export default NavBar;