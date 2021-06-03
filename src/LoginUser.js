import { useState, useEffect, Fragment } from 'react';
import { Navbar, Container, Row, Col, Button, Form } from 'react-bootstrap';
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './Canvas.js';
import DMCNavbar from './DMCNavbar.js';
import parse, { domToReact } from 'html-react-parser';
import './VideoPage.css';

function LoginUser() {

    async function loginUser() {
        // if (password != confirmPassword) {
        //     console.log('passwords do not match')
        //     //try to make a message that says "passwords do not match" that occurs on this
        //     //also when passwords are invalid(e.g less than 8 characters)
        //     //also the characters are just the dots
        //     return
        // }
        // var username = document.getElementById('username-form').value;
        // var password = document.getElementById('password-form').value;
        // var confirmPassword = document.getElementById('confirm-password-form').value;
        // var dateOfBirth = document.getElementById('dob-form').value;
        // var email = document.getElementById('email-form').value;
        // var data = { username: username, password: password, dob: dateOfBirth, email: email }
        // await fetch('http://localhost:8080/users/new-user',
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(data)
        //     })
        //     .then(async (response) => console.log(response.json()))
        console.log('logged in')

    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#42d7f5' }}>
            <div style={{ marginTop: 50, marginBottom: 50, padding: 50, width: '70%', backgroundColor: '#0047ab' }}>
                <div><h1>login here</h1></div>
                <Form>
                    <Form.Group>
                        <Form.Control id='username-form' type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control id='password-form' type="text" placeholder="Password" />
                    </Form.Group>
                </Form>
                <Button onClick={loginUser}><h1>Login User</h1></Button>
            </div>
        </div>
        //add in hashing before query, date_of_birth has to go through in a reasonable way
    )
};

export default LoginUser;