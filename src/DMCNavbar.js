import { useState, useEffect, Fragment } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import HomePage from './HomePage.js';
import VideoPage from './VideoPage.js';
import UploadVideo from './UploadVideo.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { StickyContainer, Sticky } from 'react-sticky';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image';
import dante from './boomerDante.jpg';
import LoginUser from './LoginUser.js';
import CreateUser from './CreateUser.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './Canvas.js';
import './DMCNavbar.css';

function DMCNavbar() {
    //Check your notebook for the deets
    //This bar will include:
    //A Home Button(Devil Never Cry)
    //A Videos Button(may also have a Users button. Depends on needs)
    //The videos button could have a dropdown where you can select the game you want
    //Login, Signup Button
    //A "my account" button when logged in
    //Search functionality

    //Since it's more based around creators than characters, you can filter, e.g, Lady gameplay
    //in DMC4:SE to see a list of creators who have made videos involving her, and the number.
    //Try a Jumbotron
    const [currentUserName, setCurrentUserName] = useState();
    const axios = require('axios')
    const [show, setShow] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const handleShow = () => setShow(true)
    const handleShowLogin = async () => {
        setShowLogin(true)
        const options = {
            url: 'http://localhost:8080/users/test-add-graduation',
            method: 'POST',
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        };
        await axios(options)
            .then(async (response) => {
                console.log('response below')
                console.log(response)
                setCurrentUserName(response.data.name)
            })
    }
    const handleClose = async () => {
        setShow(false)
        const options = {
            url: 'http://localhost:8080/users/test-add-graduation',
            method: 'GET',
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        };
        await axios(options)
            .then(async (response) => {
                console.log('below is the response')
                console.log(response)
                setCurrentUserName(response.data.name)
            })
    }
    const handleCloseLogin = async () => {
        setShowLogin(false)
        // const options = {
        //     url: 'http://localhost:8080/users/current-user',
        //     method: 'GET',
        //     withCredentials: true,
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        // };
        // await axios(options)
        //     .then(async (response) => console.log(response))
        console.log(currentUserName)
    }
    var sign_in = (
        < div style={{ display: 'flex', justifyContent: 'column' }}>
            <Nav.Link onClick={handleShow}>Sign Up</Nav.Link>
            <Nav.Link onClick={handleShowLogin}>Login</Nav.Link>
            <Nav.Link>{currentUserName}</Nav.Link>
        </div >
        // console.log('variable declaration')
        // //console.log(req);
        // if (req.session.name) {
        //     <h1>signed in as tomSka</h1>
        //     console.log('variable selected')
        // }
        // else {
        //     < div >
        //         <Nav.Link onClick={handleShow}>Sign Up</Nav.Link>
        //         <Nav.Link onClick={handleShowLogin}>Login</Nav.Link>
        //     </div >
        //     console.log('navbar set up')
        // }
    );
    function createUserAndClose() {
        createUser()
        setTimeout(handleClose, 1000)
        //handleClose()
    }
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
        var data = { username: username, password: password, dob: dateOfBirth, email: email, cookie: document.cookie }
        //accesses signup view
        //POSTs stuff to endpoint on server
        //password hashed via bcrypt, stored in Users table. Use a salt. 
        //stretch goal: ( have them validate email)
        //NEXT: If signup, they're immediately logged in
        //NEXT: If login, we check the keys, hash the password and compare. If they're the same you continue, otherwise you throw a warning
        //NEXT: we have a couple options, I'm not really sure yet.
        const options = {
            url: 'http://localhost:8080/users/new-user',
            method: 'POST',
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                body: data
            }
        };
        await axios(options)
            .then(async (response) => console.log(response))

    }

    // window.onload = (event) => {
    //     sign_in = 
    // }

    //sounds like we should only use children to display; so keep this in navbar
    //swap the variables as you go through. use UseEffect
    useEffect(() => {

    }, [currentUserName])

    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <LinkContainer to="/">
                    <Navbar.Brand>Devil Never Cry</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id='main-navbar' className="mr-auto">
                        <LinkContainer to="/users">
                            <Nav.Link>Users</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="I...Need...More...Power..." id="basic-nav-dropdown">
                            <LinkContainer to="/devilmaycry" style={{ 'background-color': 'red' }}>
                                <NavDropdown.Item href="#action/3.1">Devil May Cry</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/devilmaycry2">
                                <NavDropdown.Item href="#action/3.2">Devil May Cry 2</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/devilmaycry3">
                                <NavDropdown.Item href="#action/3.1">Devil May Cry 3</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/devilmaycry3">
                                <NavDropdown.Item href="#action/3.2">Devil May Cry 4</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/devilmaycry3">
                                <NavDropdown.Item href="#action/3.1">DMC: Devil May Cry</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/devilmaycry5">
                                <NavDropdown.Item href="#action/3.2">Devil May Cry 5</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item href="#action/3.3">General</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Fan Art</NavDropdown.Item>
                        </NavDropdown>
                        <LinkContainer to="/upload">
                            <Nav.Link>Upload Video</Nav.Link>
                        </LinkContainer>
                        {sign_in}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={showLogin} onHide={handleCloseLogin}>
                <Modal.Body>
                    <Button style={{ width: '5%' }} onClick={handleCloseLogin}></Button>
                    <LoginUser></LoginUser>
                </Modal.Body>
            </Modal>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Button style={{ width: '5%' }} onClick={handleClose}></Button>
                    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#42d7f5' }}>
                        <div style={{ marginTop: 50, marginBottom: 50, padding: 50, width: '70%', backgroundColor: '#0047ab' }}>
                            <div><h1>sign-up here</h1></div>
                            <Form>
                                <Form.Group>
                                    <Form.Control id='username-form' type="text" placeholder="Username" />
                                    <Form.Text>
                                        Pick something descriptive yet succint
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
                            <Button onClick={createUserAndClose}><h1>Create User</h1></Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default DMCNavbar;