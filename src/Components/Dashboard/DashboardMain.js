import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './DashboardMain.css';
import UserContentMain from './UserContentAria/UserContentMain'
import DashMenu from './DashboardManu/DashMenu';
import GraduetContentMain from './GraduateContentAria/GraduetContentMain';
import MessageContentMain from './MessageContentAria/MessageContentMain';
import BoxBoard from './BoxBoard/BoxBoard';

const DashboardMain = () => {
    const [ChangeMenu,setChangeMenu]=useState('user')
    return (
        <div className='dashboard_section'>
            <Row>
                <Col md={2} className='menu_aria_bg pe-0'>
                    <DashMenu setChangeMenu={setChangeMenu} ChangeMenu={ChangeMenu}/>
                </Col>
                <Col md={10} className="ps-0">
                    <div className='minHeight'>
                        {
                            ChangeMenu==='box'&&<BoxBoard/>
                        }
                        {
                            ChangeMenu==='graduate'&&<GraduetContentMain/>
                        }
                        {
                            ChangeMenu==='message'&&<MessageContentMain/>
                        }
                        {
                            ChangeMenu==='user'&&<UserContentMain/>
                        }
                     
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default DashboardMain;