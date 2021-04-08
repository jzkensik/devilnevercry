import { useState, useEffect, Fragment } from 'react';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './Canvas.js';
import DMCNavbar from './DMCNavbar.js';
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

    return (
        <div>
            <DMCNavbar></DMCNavbar>
            <div style={{ display: 'flex', justifyContent: 'center' }} onClick={sendContent}><h1>here</h1></div>
        </div>
    )
}
//visible information they input:
//video_link, player_character, mission, difficulty, version, video_type, video_title
//information we need to generate/retrieve:
//video_id, user_id
//elements we need to have:
//submit button
export default UploadVideo;