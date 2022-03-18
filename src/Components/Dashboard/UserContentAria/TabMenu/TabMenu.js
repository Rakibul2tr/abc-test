import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import LectureContent from './LectureContent';
import './TabMenu.css'
import TestContent from './TestContent';

const TabMenu = () => {
    const [changeTab,setChangeTab]=useState('test')
    return (
        <Row className='tab_menu'>
            <div className='menu_div'>
                <i className="fa-solid fa-arrow-left-long"></i>
                <li className={changeTab==='test'?'activeborder':null}
                 onClick={()=>setChangeTab('test')}>test</li>

                <li  className={changeTab==='Lecture'?'activeborder':null}
                onClick={()=>setChangeTab('Lecture')}>Lecture</li>

                <li  className={changeTab==='Study'?'activeborder':null}
                onClick={()=>setChangeTab('Study')}>Study material</li>

                <li  className={changeTab==='student'?'activeborder':null}
                onClick={()=>setChangeTab('student')}>List of student and teacher</li>
            </div>
            <Row>
                <div className="select_and_button">
                    <div className="select_btn">
                        <span>Select <i className="fa-solid fa-minus"></i> </span>
                        <select>
                            <option>Past test</option>
                            <option>present test</option>
                            <option>feuter test</option>
                        </select>
                    </div>
                    <div className="Schedule_btn">
                        <button>Schedule new test</button>
                    </div>
                </div>
            </Row>

            <Row>
                {
                    changeTab==='test'&&<TestContent/>
                }
                {
                    changeTab==='Lecture'&&<LectureContent/>
                }
                
            </Row>
        </Row>
    );
};

export default TabMenu;