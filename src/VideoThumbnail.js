import { useState, useEffect, Fragment } from 'react';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.min.css';



function VideoThumbnail() {
    //<iframe class="videoEntries" style={{ margin: '0 auto', padding: 20, width: 300 }} src={"//www.youtube.com/embed/" + getId(item.video_link)}></iframe>
    //this above part is what we'll be replacing
    return <div style={{ display: 'flex', justifyContent: 'center', 'flexDirection': 'column', 'alignItems': 'center', 'width': '300px', 'padding': 20 }}>
        <div style={{ 'backgroundColor': 'red' }}>
            <iframe style={{ width: '95%', padding: '30px' }}></iframe>
            <h1>here</h1>
        </div>
    </div>
}

//by "test_player"
//first few digits of the date

export default VideoThumbnail;