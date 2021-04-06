import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import dante from './boomerDante.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
    //we'll get a prop for the featured video
    //required elements: background image, taskbar, featured video, react-bootstrap
    //later we'll need the about and copyright stuff
    //padding inside the container to allow the centering on the homepage
    //the border of the image will be a ratio of its nearest pixel colors and the stuff around it
    var background = '#161321'
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function blurEdges() {
        var img = document.getElementById('dante');
        var canvas = document.createElement('canvas');
        console.log(img)
        console.log(canvas);
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
        console.log(canvas)
        var ctx = canvas.getContext("2d");
        var imgData = ctx.getImageData(10, 10, img.width, img.height);
        for (var i = 0; i < img.width; i++) {
            //tomorrow, see if we can swap the img for a canvas
        }
        // for (var i = 0; i < img.width * 4; i++) {
        //     for (var j = 0; j < img.height * 4; j++) {
        //         imgData.data[((img.width * i) + j) * 4] = 100;
        //     }
        // }

        console.log(imgData.data[2887]);
        console.log(imgData.data[2888]);
        console.log(imgData.data[2889]);
    }
    return (
        <div style={{ 'background-color': background }}>
            <Container style={{ 'marginLeft': 'auto', 'marginRight': 'auto' }}>
                <div style={{ 'width': '100%', 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'center' }}>
                    <Image id='dante' style={{ 'width': '100%' }} src={dante} onClick={blurEdges} fluid />
                </div>
            </Container>
            <Container style={{ 'paddingTop': 300, 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'center' }}>
                {/* <Navbar bg='dark'>
            <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Navbar> */}
                <Row style={{ "paddingLeft": 0, "paddingRight": 0 }}>
                    <Col className="checkHere" style={{ paddingLeft: 0, paddingRight: 0 }}>check</Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage