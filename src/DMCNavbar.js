import { useState, Fragment } from 'react';
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
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    console.log('hello here')

    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Link to="/">Home</Link>
                <Navbar.Brand href="#home">Devil Never Cry</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id='main-navbar' className="mr-auto">
                        <Link to="/devilmaycry3">Users</Link>
                        <NavDropdown title="I...Need...More...Power..." id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Devil May Cry</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Devil May Cry 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Devil May Cry 3</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Devil May Cry 4</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">DMC: Devil May Cry</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Devil May Cry 5</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">General</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Fan Art</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link to="/upload" component={UploadVideo}>Upload Video</Nav.Link>
                        <Nav.Link onClick={handleShow}>Sign Up</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Button style={{ width: '5%' }} onClick={handleClose}></Button>
                    <CreateUser></CreateUser>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default DMCNavbar;