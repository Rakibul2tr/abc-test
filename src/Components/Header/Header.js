import React from 'react';
import {  Row } from 'react-bootstrap';
import './Header.css'
import profaileImg from '../../images/Ellipse 25.png'

const Header = () => {
    return (
        <div className='Header-section'>
            <Row>
                <div className="Header_row">
                    <div className="dashboard-logo">
                        <h5>Dashboard</h5>
                    </div>
                    <div className="profail_icon">
                        <div className="icon">
                        <i className="fa-solid fa-bell"></i>
                        <i className="fa-solid fa-envelope"></i>
                        <i className="fa-solid fa-gear"></i>
                        </div>
                        <div className="profail_pic">
                            <img className='img-fluid' src={profaileImg} alt="" />
                        </div>
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default Header;