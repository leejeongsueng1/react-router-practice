import React from "react";
import {Form} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export const Login = ({setAuth}) => {


    const navigator = useNavigate();

    const onSubmit = (event)=>{
        event.preventDefault();
        setAuth(true);
        navigator('/');
    }

    return (
        <Container className="login-form">
            <Form onSubmit={onSubmit}>
                <div className="id-div"><label className="id-label">아이디 :</label><input className="input-id" aria-label="id-label" type="text" placeholder="ID"/></div>
                <div className="pwd-div"><label className="pwd-label">비밀번호 :</label><input className="input-pwd" type="password" placeholder="Password"/></div>
                <div className="submit-div"><input className="input-submit" value="로그인" type="submit"/></div>
            </Form>
        </Container>

    )
}