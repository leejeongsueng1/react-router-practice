import React from "react";
import {Form, Row} from "react-bootstrap";
import {Container} from "react-bootstrap";

export const Login = () => {
    return (
        <Container className="login-form">
            <div className="id-div"><label className="id-label">아이디 :</label><input className="input-id" aria-label="id-label" type="text" placeholder="ID"/></div>
            <div className="pwd-div"><label className="pwd-label">비밀번호 :</label><input className="input-pwd" type="password" placeholder="Password"/></div>
            <div className="submit-div"><input className="input-submit" value="로그인" type="submit"/></div>
        </Container>

    )
}