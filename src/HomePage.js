import { useState } from 'react';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import { StickyContainer, Sticky } from 'react-sticky';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image';
import dante from './boomerDante.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './Canvas.js';
import './HomePage.css';
import DMCNavbar from './DMCNavbar.js';

function HomePage() {
    //we'll get a prop for the featured video
    //required elements: background image, taskbar, featured video, react-bootstrap
    //later we'll need the about and copyright stuff
    //padding inside the container to allow the centering on the homepage
    //the border of the image will be a ratio of its nearest pixel colors and the stuff around
    //var element = document.getElementById('body')
    //style = window.getComputedStyle(element);
    //color = style.getPropertyValue('background-color')
    const [background, changeBackground] = useState('#161321')
    const [featuredVideo, changeFeaturedVideo] = useState('https://www.youtube.com/embed/NJ5DZcRrrbI');
    //var background = '#161321'
    //var featuredVideo = 'https://www.youtube.com/embed/NJ5DZcRrrbI';

    //each video will have an ID associated to it that we use to create the page

    function videoResolution() {
        console.log(document.getElementById('video_window').clientWidth);
        document.getElementById('video_window').width =
            console.log(document.getElementById('video_window').clientHeight);
        //this isn't gonna work
        //yes it will
    }

    return (
        <div id='reaching' style={{ 'background-color': background }}>
            <Container style={{ 'marginLeft': 'auto', 'marginRight': 'auto' }}>
                <div style={{ 'width': '100%', 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'center' }}>
                    <Image id='dante' style={{ 'width': '50%' }} src={dante} fluid />
                </div>
            </Container>
            <div class="sticky">
                <DMCNavbar></DMCNavbar>
            </div>
            <Container className='video-header' style={{ 'backgroundColor': 'black', 'marginTop': 50 }}>
                <div style={{
                    'background-color': 'black', 'display': 'flex',
                    'marginTop': 50, 'justifyContent': 'center', 'flexDirection': 'column', 'alignItems': 'center'
                }}>
                    <h1>Featured Videos</h1>
                    <div id='video_window' style={{ 'display': 'flex', 'flexDirection': 'row', 'paddingTop': 50, 'justifyContent': 'space-between' }}>
                        <iframe width="854" height="480"
                            src={featuredVideo}>
                        </iframe>
                        <ButtonGroup className='button-list' vertical style={{ 'paddingLeft': 50 }}>
                            <Button onClick={() => changeFeaturedVideo('https://www.youtube.com/embed/NJ5DZcRrrbI')}>Video 1</Button>
                            <Button onClick={() => changeFeaturedVideo('https://www.youtube.com/embed/3T_RdUPNg6k')}>Video 2</Button>
                            <Button onClick={() => changeFeaturedVideo('https://www.youtube.com/embed/Jrg9KxGNeJY')}>Video 3</Button>
                            <Button onClick={() => changeFeaturedVideo('https://www.youtube.com/embed/9sm8sBWNHks')}>Video 4</Button>
                            <Button onClick={() => videoResolution()}>Video 5</Button>
                            <Button>Video 6</Button>
                            <Button>Video 7</Button>
                            <Button>Video 8</Button>
                            <Button>Video 9</Button>
                            <Button>Video 10</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </Container >
            <Container className='divAbout' style={{ 'backgroundColor': 'black' }}>
                {/* <Navbar bg='dark'>
            <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Navbar> */}
                <Row className='about' style={{ "paddingLeft": 0, "paddingRight": 0 }}>
                    <Col className="checkHere" style={{ margin: 100 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget sodales lacus. Cras pellentesque orci vel consectetur tincidunt. Aliquam viverra tortor id mauris tincidunt porta. Pellentesque pretium tincidunt faucibus. Sed sagittis sit amet ligula ac elementum. Sed eget nisl vel metus rhoncus vehicula ac non orci. Aliquam eu commodo justo. Donec elit felis, aliquam id gravida dignissim, molestie nec quam. In ultrices, tellus eu aliquet rutrum, lacus enim eleifend augue, ac imperdiet ante lorem vitae felis. In sollicitudin iaculis urna eget consectetur. Praesent imperdiet elit ac lorem tempus, non sollicitudin purus finibus. In mollis vehicula orci. Maecenas feugiat vulputate felis sed posuere. Integer hendrerit consequat lorem, non scelerisque dui consequat scelerisque. </Col>
                </Row>
            </Container>
            <Container className='footer' style={{ 'backgroundColor': '#363636', 'marginTop': 40, padding: 100, 'max-width': '100%' }}>
                <Row>
                    <Col>And this is gonna be that heckin footer bro</Col>
                </Row>
            </Container>
        </div >
    )
}

export default HomePage;