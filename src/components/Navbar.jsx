import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faSearch, faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
export const Navbar = ({auth, setAuth, isMobile}) => {

    const menuList = ['여성','Devided', '남성', '신생아/유아', '아동','H&M Home', 'Sale','지속가능성'];

    const navigate = useNavigate();

    const [menuToggle, setMenuToggle] = useState(false);

    const toggleMenu = () => {
        setMenuToggle(menuToggle => !menuToggle); // on,off 개념 boolean
    }

    return (
        <div>
            <div className="utility">
                {isMobile ? <div className="MenuOpen">
                    <FontAwesomeIcon icon={faBars} onClick={()=>toggleMenu()}  />
                </div>:""}
                <div className="login-button" onClick={()=>{
                    if (!auth ){navigate("/login");}else{setAuth(false); navigate("/");}
                }}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>{auth? "로그아웃" : "로그인"}</div>
                </div>
            </div>
            <div className={`main-logo ${isMobile?"mobile":""}`}>
                <img width={100} onClick={()=>{
                    navigate("/");
                }
                } src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" alt="no imgs"/>
            </div>
            <div className={`menu-area ${isMobile?"mobile":""} ${isMobile?menuToggle? "show-menu" : "hide-menu" :""}`}>
                <div className='noneClass'>
                </div>
                <ul className={`menu-list ${isMobile?"mobile":""}`}>
                        <>
                            <>{isMobile? <FontAwesomeIcon class="InMenuToggle" icon={faTimes} onClick={()=>toggleMenu()}  /> : null}</>
                            {menuList.map((menu, idx)=>(<li key={idx}>{menu}</li>))}
                        </>
                </ul>
                <div className="input-area">
                    <FontAwesomeIcon className="search-icon" icon={faSearch}/>
                    <input className="input-box" type="text" onKeyPress={(event)=>{
                        if(event.key === "Enter"){
                            let keyword = event.target.value;
                            console.log(keyword);
                            navigate(`/?q=${keyword}`);
                        }
                    }}  />
                </div>
            </div>
        </div>
    )
}