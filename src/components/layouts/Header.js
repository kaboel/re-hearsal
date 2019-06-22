import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../logo.svg';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>
                <img src={logo} width="65" style={{marginBottom: '-10px'}} alt="Logo"/>
                TodoList
            </h1>

            <div style={{ paddingLeft: '4.61rem' }}>
                <Link to="/">
                    <span style={{ color: '#fff' }}>Home</span>
                </Link>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <Link to="/about">
                    <span style={{ color: '#fff' }}>About</span>
                </Link>
            </div>
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '.5rem 0',
}

export default Header;
