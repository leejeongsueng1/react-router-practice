import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
export const Navbar = ({isLogined}) => {

    const menuList = ['여성','Devided', '남성', '신생아/유아', '아동','H&M Home', 'Sale','지속가능성'];

    const navigate = useNavigate();

    return (
        <div>
            <div className="login-button" onClick={()=>{
                if (!isLogined ){navigate("/login");}
            }}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
            <div className="main-logo">
                <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"/>
            </div>
            <div className="menu-area">
                <div className='noneClass'>
                </div>
                <ul className="menu-list">
                    {
                        menuList.map((menu, idx)=>(<li key={idx}>{menu}</li>))
                    }
                </ul>
                <div className="input-area">
                    <FontAwesomeIcon icon={faSearch}/>
                    <input className="input-box" type="text"/>
                </div>
           </div>
        </div>
    )
}