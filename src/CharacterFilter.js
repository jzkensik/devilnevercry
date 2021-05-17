import { useState, useEffect, createElement } from 'react';
import { Navbar, Image, Container, Row, Col, Button } from 'react-bootstrap';
import Dante from './images/devilmaycry5/dante_dmc5.png';
import Nero from './images/devilmaycry5/nero_dmc5.png';
import V from './images/devilmaycry5/v_dmc5.png';
import Vergil from './images/devilmaycry5/vergil_dmc5.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './Canvas.js';
import './HomePage.css';
import DMCNavbar from './DMCNavbar.js';
import './CharacterFilter.css';

function CharacterFilter(props) {
    var [backgroundColor, setColor] = useState('black')
    //you shouldn't add the event listener inside of useEffect
    try {
        document.getElementById(props.id).addEventListener("click", changeColor);
    }
    catch (exception) {

    }
    function changeColor() {
        if (backgroundColor == 'black') {
            setColor('blue')
            document.getElementById(props.id).removeEventListener("click", changeColor);
            //setOutline('5px dotted white')
        }
        else {
            setColor('black')
        }
    }
    // useEffect(() => {
    // }, [backgroundColor])
    return (

        <Container className='char-filter' style={{ 'display': 'flex', 'justifyContent': 'space-evenly', 'alignItems': 'baseline' }} onClick={props.onClick}>
            <Row>
                <Col id={props.id} className='char-filter-content' style={{ 'backgroundColor': backgroundColor }} >
                    <Image style={{ 'position': 'relative', 'width': '50%' }} src={props.image || Vergil} fluid />
                    <div style={{ 'width': '50%', 'textAlign': 'center' }}><h1 className='filter-text' style={{ 'position': 'absolute', 'color': 'white' }}>{props.name || "Vergil"}</h1></div>
                </Col>
            </Row>
        </Container>

    )
}

export default CharacterFilter;