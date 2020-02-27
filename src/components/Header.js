import React from 'react';
import '../scss/Header.scss'
import Form from './Form';

const Header = props => {
    return (
        <header>
            <h1>MEMO BOARD</h1>
            <Form getData={props.getData} />
        </header>
    );
}

export default Header;
