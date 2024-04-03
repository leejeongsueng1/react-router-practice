import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authenticateActions} from "../redux/reducer/AuthenticateSlice";

export const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (event)=>{
        event.preventDefault();
        dispatch(authenticateActions.setLogin(id,password));
        navigator('/');
    }

    return (
        <Container className="login-form">
            <Form className="login-form" onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(event)=>{setId(event.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}}/>
                </Form.Group>
                <div className="submit-div">
                    <Button variant="danger" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
        </Container>

    )
}