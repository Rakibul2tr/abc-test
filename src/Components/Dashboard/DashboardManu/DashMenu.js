import React from 'react';
import './DashMenu.css'
import logo_img from '../../../images/Group 30.png'

const DashMenu = (props) => {
    const {ChangeMenu,setChangeMenu}=props
    return (
        <div className='dashboard_menu'>
            <div className='dashboard_logo'>
                <img className='img-fluid' src={logo_img} alt="" />
            </div>
            <li className={ChangeMenu==='box'&&'menuActive'}onClick={()=>setChangeMenu('box')}
            ><i className="fa-solid fa-border-all"></i></li>

            <li className={ChangeMenu==='graduate'&&'menuActive'} onClick={()=>setChangeMenu('graduate')}
            ><i className="fa-solid fa-user-graduate"></i></li>

            <li className={ChangeMenu==='message'&&'menuActive'} onClick={()=>setChangeMenu('message')}
            ><i className="fa-solid fa-message"></i></li>

            <li className={ChangeMenu==='user'&&'menuActive'} onClick={()=>setChangeMenu('user')}
            ><i className="fa-solid fa-user-group"></i></li>

            <li className={ChangeMenu===''&&'menuActive'}><i className="fa-solid fa-border-all"></i></li>

            <li className={ChangeMenu===''&&'menuActive'}><i className="fa-solid fa-calendar-check"></i></li>

            <li className={ChangeMenu===''&&'menuActive'}><i className="fa-solid fa-gear"></i></li>
        </div>
    );
};

export default DashMenu;