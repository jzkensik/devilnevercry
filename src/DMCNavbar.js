import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { StickyContainer, Sticky } from 'react-sticky';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image';
import dante from './boomerDante.jpg';
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

    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">Devil Never Cry</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav id='main-navbar' className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Users</Nav.Link>
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
                    <Nav.Link href="#upload">Upload Video</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default DMCNavbar;