import { useState, useEffect, Fragment } from 'react';
import { Navbar, Container, Row, Col, Button, Form } from 'react-bootstrap';
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './Canvas.js';
import DMCNavbar from './DMCNavbar.js';
import parse, { domToReact } from 'html-react-parser';
import './VideoPage.css';

function CreateUser() {

    try {
        var username = document.getElementById('username-form').value;
        var password = document.getElementById('password-form').value;
        var confirmPassword = document.getElementById('confirm-password-form').value;
        var dateOfBirth = document.getElementById('dob-form').value;
        //see how you can pass this into POST
        //probably better-served to use this component as a Modal
    } catch (exception) {

    }

    async function createUser() {
        console.log(password)
        console.log(confirmPassword)
        if (password != confirmPassword) {
            console.log('passwords do not match')
            //try to make a message that says "passwords do not match" that occurs on this
            //also when passwords are invalid(e.g less than 8 characters)
            //also the characters are just the dots
            return
        }
        var data = { username: username, password: password, dob: dateOfBirth }
        await fetch('http://localhost:8080/videos/new-user',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(async (response) => console.log(response.json()))

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
                </Form>
                <Button onClick={createUser}><h1>Create User</h1></Button>
            </div>
        </div>
        //add in hashing before query, date_of_birth has to go through in a reasonable way
    )
};

export default CreateUser;