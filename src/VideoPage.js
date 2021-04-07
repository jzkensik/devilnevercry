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

function VideoPage() {

    function generateVideos(video_links) {
        console.log(video_links)
        //<iframe class="videoEntries" style={{ margin: '0 auto', padding: 20, width: 300 }} src={"//www.youtube.com/embed/" + getId(item.video_link)}></iframe>
        return (
            video_links.map((item) => (
                <Fragment>
                    <VideoThumbnail></VideoThumbnail>
                </Fragment>
            )
            ));
    }
    //for tomorrow: rename iframeAdder to be more fitting, make videos left-aligned inside of container, add a POST API call OR sign-in functions

    function iframeAdder() {
        //this is where we'll attach the iframes
        //we'll do two other functions. This one makes the container
        //the other two do three videos at a time with rows and one at a time with
        //columns, respectively
        //var link = "<Row><Col><iframe src=" + url_link + " style='backgroundColor:green;'>" + "</iframe></Col><Col><iframe " + "style='backgroundColor:pink;'>" + "</iframe></Col><Col><iframe " + "style='backgroundColor:red;'" + ">Box One</iframe></Col></Row>"
        try { //css modules
            //const addLinks = newData.map((vidEntry) => vidEntry.video_link) //this works
            //maybe now it's a for loop of three?
            var rowHold = '';
            var rowHold2 = '';

            //for (var i = 0; i < addLinks.length; i = i + 3) {
            //rowHold = <iframe style={{ width: 300 }} src={"//www.youtube.com/embed/" + getId(addLinks[0])}></iframe>
            //rowHold2 = <iframe style={{ width: 300 }} src={"//www.youtube.com/embed/" + getId(addLinks[2])}></iframe>
            //}
            return <Container style={{ 'display': 'flex', 'justifyContent': 'center', 'padding': 30 }}><Row style={{ 'padding': 30 }}>{generateVideos(newData)}</Row></Container>
        }
        catch (exception) {
        }
    }

    function getId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        console.log(typeof regExp)
        const match = String(url).match(regExp);

        return (match && match[2].length === 11)
            ? match[2]
            : null;
    }

    var [newData, setData] = useState(false);
    useEffect(() => {
        async function getContent() {
            if (newData) {
                console.log('repeat')
                //the issue is that this doesn't trigger now
                return
            }
            await fetch('http://localhost:8080/videos/all',
                {
                    method: "GET",
                    headers: {}
                })
                .then(async (response) => response.json())
                .then(async (data) => {
                    let clone = JSON.parse(JSON.stringify(data))
                    clone.prop = 2
                    console.log(clone.data)
                    setData(clone.data)
                    //we need the data to be securely in here. Can't access it outside.
                    //we'll likely need to use a map in useEffect and somehow get that outside

                })

        }
        getContent();
    }, [newData])
    //const iframeMarkup = '<iframe width="560" height="315" src="//www.youtube.com/embed/' + 'null' + '" frameborder="0" allowfullscreen></iframe>';
    //<Container style={{ 'padding': '25px' }}>
    //<Row style={{ 'display': 'flex'}}
    //<Col>
    //<iframe width="300" height="200" src={url} frameborder='0'></iframe>
    //</Col>
    try {
        var url = "https://www.youtube.com/embed/" + newData[8].video_link;
    }
    catch (exception) {

    }
    //as we thought, this gets around the issue. Now we can access this thing
    //by using newData as an array
    //let parser = new DOMParser().parseFromString(iframeMarkup, "text/html");
    //console.log(iframeMarkup)
    //document.getElementById("testVid").innerHTML = iframeMarkup;
    //clicking on a video takes you to that video's page. (It's gonna be a newgrounds type of thing)

    //we have the ability to turn strings to HTML, so try using that to iteratively create this stuff
    //letting people make title screen images could be fun

    //next goal: make user creation/sign-in functionality, dynamic video additions
    return (
        <div>
            <DMCNavbar></DMCNavbar>
            <VideoFilter></VideoFilter>
            {iframeAdder()}
        </div >
    )
}

export default VideoPage;