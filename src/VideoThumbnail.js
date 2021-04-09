import { useState, useEffect, Fragment } from 'react';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.min.css';



function VideoThumbnail(props) {

    function getId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        console.log(typeof regExp)
        const match = String(url).match(regExp);

        return (match && match[2].length === 11)
            ? match[2]
            : null;
    }
    //<iframe class="videoEntries" style={{ margin: '0 auto', padding: 20, width: 300 }} src={"//www.youtube.com/embed/" + getId(item.video_link)}></iframe>
    //this above part is what we'll be replacing
    return (
        <div style={{ width: '300px', 'padding': 20 }}>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundColor: 'red', padding: '5px' }}>
                <iframe style={{ width: '95%' }} src={"//www.youtube.com/embed/" + getId(props.url)}></iframe>
                <h3>{props.player}</h3>
            </div>
        </div>
    )
}

//by "test_player"
//first few digits of the date
//Card could replace what we've been doing

export default VideoThumbnail;