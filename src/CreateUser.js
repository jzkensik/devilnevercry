import { useState, useEffect, Fragment } from 'react';
import { Navbar, Container, Row, Col, Button, Form } from 'react-bootstrap';
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './Canvas.js';
import DMCNavbar from './DMCNavbar.js';
import parse, { domToReact } from 'html-react-parser';
import './VideoPage.css';

function CreateUser() {

    const axios = require('axios')
    async function createUser() {
        if (password != confirmPassword) {
            console.log('passwords do not match')
            //try to make a message that says "passwords do not match" that occurs on this
            //also when passwords are invalid(e.g less than 8 characters)
            //also the characters are just the dots
            return
        }
        var username = document.getElementById('username-form').value;
        var password = document.getElementById('password-form').value;
        var confirmPassword = document.getElementById('confirm-password-form').value;
        var dateOfBirth = document.getElementById('dob-form').value;
        var email = document.getElementById('email-form').value;
        var data = { username: username, password: password, dob: dateOfBirth, email: email }
        //accesses signup view
        //POSTs stuff to endpoint on server
        //password hashed via bcrypt, stored in Users table. Use a salt. 
        //stretch goal: ( have them validate email)
        //NEXT: If signup, they're immediately logged in
        //NEXT: If login, we check the keys, hash the password and compare. If they're the same you continue, otherwise you throw a warning
        //NEXT: we have a couple options, I'm not really sure yet.
        const options = {
            url: 'http://localhost:8080/users/new-user',
            method: 'GET',
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                //body: JSON.stringify(data)
            }
        };
        await axios(options)
            .then(async (response) => console.log(response))

    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#42d7f5' }}>
            <div style={{ marginTop: 50, marginBottom: 50, padding: 50, width: '70%', backgroundColor: '#0047ab' }}>
                <div><h1>sign-up here</h1></div>
                <Form>
                    <Form.Group>
                        <Form.Control id='username-form' type="text" placeholder="Username" />
                        <Form.Text>
                            Pick something descriptive yet succint. Ask yourself, would Dante get bored reading it?
                    </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control id='password-form' type="text" placeholder="Password" />
                        <Form.Text>
                            Between 8 and 32 characters
                    </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control id='confirm-password-form' type="text" placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control id='dob-form' type="text" placeholder="mm/dd/yyyy" />
                        <Form.Text>
                            Date of Birth
                    </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control id='email-form' type="text" placeholder="Email Address" />
                        <Form.Text>
                            Email
                    </Form.Text>
                    </Form.Group>
                </Form>
                <Button onClick={createUser}><h1>Create User</h1></Button>
            </div>
        </div>
        //add in hashing before query, date_of_birth has to go through in a reasonable way
    )
};

export default CreateUser;