import { useState, useEffect, Fragment } from 'react';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './Canvas.js';
import DMCNavbar from './DMCNavbar.js';
import VideoFilter from './VideoFilter.js';
import VideoThumbnail from './VideoThumbnail.js'
import parse, { domToReact } from 'html-react-parser';
import './VideoPage.css';

function UploadVideo() {

    async function sendContent() {
        await fetch('http://localhost:8080/videos/new-video',
            {
                method: "POST",
                headers: {}
            })
            .then(async (response) => response.json())

    }
    //var [newData, setData] = useState(false);

    return <div onClick={sendContent}><h1>here</h1></div>
}
//make a button to post the video
export default UploadVideo;