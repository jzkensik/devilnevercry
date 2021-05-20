import { useState, useEffect, Fragment } from 'react';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './Canvas.js';
import DMCNavbar from './DMCNavbar.js';
import DMC3VideoFilter from './DMC3VideoFilter.js';
import DMC5VideoFilter from './DMC5VideoFilter.js';
import VideoThumbnail from './VideoThumbnail.js'
import parse, { domToReact } from 'html-react-parser';
import './VideoPage.css';

function VideoPage() {

    const filterList = {
        devilMayCry3: {
            'dante': {
                id: 'dante3',
                name: 'Dante',
                image: Dante
            },
            'vergil': {
                id: 'vergil3',
                name: 'Vergil',
                image: Vergil
            },
            'dante_and_vergil': {
                id: 'dv3',
                name: 'Duo',
                image: a
            },
            'other': {
                id: 'other3',
                name: 'Other',
                image: Other
            }
        },
        devilMayCry5: [
            'nero',
            'dante',
            'v',
            'vergil'
        ]
    }

    function generateVideos(video_links) {
        //<iframe class="videoEntries" style={{ margin: '0 auto', padding: 20, width: 300 }} src={"//www.youtube.com/embed/" + getId(item.video_link)}></iframe>
        return (
            video_links.map((item) => (
                <Fragment>
                    <VideoThumbnail player={item.player} url={item.video_link}></VideoThumbnail>
                </Fragment>
            )
            ));
    }
    //for tomorrow: rename iframeAdder to be more fitting, make videos left-aligned inside of container, add a POST API call OR sign-in functions

    function iframeAdder() {
        try { //css modules
            //const addLinks = newData.map((vidEntry) => vidEntry.video_link) //this works
            //maybe now it's a for loop of three?
            //for (var i = 0; i < addLinks.length; i = i + 3) {
            //rowHold = <iframe style={{ width: 300 }} src={"//www.youtube.com/embed/" + getId(addLinks[0])}></iframe>
            //rowHold2 = <iframe style={{ width: 300 }} src={"//www.youtube.com/embed/" + getId(addLinks[2])}></iframe>
            //}
            return <Container style={{ 'display': 'flex', 'justifyContent': 'center', 'padding': 30 }}><Row style={{ display: 'flex', justifyContent: 'center', 'paddingTop': 50, 'paddingLeft': 80, 'paddingRight': 80 }}>{generateVideos(newData)}</Row></Container>
        }
        catch (exception) {
            console.log('videos not grabbed')
        }
    }

    var [newData, setData] = useState(false);
    const [filtersClicked, setFilters] = useState([false, false, false, false])
    // useEffect(() => {
    //     async function getContent() {
    //         if (newData) {
    //             console.log('repeat')
    //             //the issue is that this doesn't trigger now
    //             return
    //         }
    //         await fetch('http://localhost:8080/videos/all',
    //             {
    //                 method: "GET",
    //                 headers: {}
    //             })
    //             .then(async (response) => response.json())
    //             .then(async (data) => {
    //                 let clone = JSON.parse(JSON.stringify(data))
    //                 clone.prop = 2
    //                 setData(clone.data)
    //                 //we need the data to be securely in here. Can't access it outside.
    //                 //we'll likely need to use a map in useEffect and somehow get that outside

    //             })

    //     }
    //     getContent();
    // }, [newData])

    useEffect(() => {
        async function getContent() {
            //this'll work if we can get UseEffect to work on filter selection
            //(for the sake of minimizing renders, maybe add an "apply" button)
            // if (newData.prop) {
            //     return
            // }
            await fetch('http://localhost:8080/videos/all?' + new URLSearchParams({ game: 'Devil May Cry 3', Dante: filtersClicked[0], Vergil: filtersClicked[1], duo: filtersClicked[2], Other: filtersClicked[3] }),
                // s = new URLSearchParams({ foo: 'bar' }); s.append('foo', 'baz'); s.toString()
                //the URL works, we just need to figure out how to push the info through
                {
                    method: "GET"
                })
                .then(async (response) => response.json())
                .then(async (data) => {
                    let clone = JSON.parse(JSON.stringify(data))
                    clone.prop = 2
                    console.log('http://localhost:8080/videos/all?' + new URLSearchParams({ game: 'Devil May Cry 3', Dante: filtersClicked[0], Vergil: filtersClicked[1], duo: filtersClicked[2], Other: filtersClicked[3] }))
                    setData(clone.data)
                })

        }
        getContent();
        console.log('run through')
    }, [filtersClicked])

    //as we thought, this gets around the issue. Now we can access this thing
    //by using newData as an array
    //let parser = new DOMParser().parseFromString(iframeMarkup, "text/html");
    //console.log(iframeMarkup)
    //document.getElementById("testVid").innerHTML = iframeMarkup;
    //clicking on a video takes you to that video's page. (It's gonna be a newgrounds type of thing)

    //we have the ability to turn strings to HTML, so try using that to iteratively create this stuff
    //letting people make title screen images could be fun

    //next goal for videos: see if you can queue the first 30 results and auto-display when clicked back to the game page
    //Pagination could be good here
    return (
        <div>
            <DMC3VideoFilter filters={filtersClicked} filterFunction={setFilters}></DMC3VideoFilter>
            {iframeAdder()}
        </div>
    )
}

export default VideoPage;