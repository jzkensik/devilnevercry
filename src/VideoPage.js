import { useState, useEffect, Fragment } from 'react';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './Canvas.js';
import DMCNavbar from './DMCNavbar.js';
import VideoFilter from './DMC3VideoFilter.js';
import CharacterFilter from './CharacterFilter.js';
import Dante1 from './images/devilmaycry/Dante_DMC1.png'
import Dante2 from './images/devilmaycry2/DMC2Dante.png';
import Lucia from './images/devilmaycry2/Lucia.png';
import Trish2 from './images/devilmaycry2/DMC_Trish.png';
import Dante3 from './images/devilmaycry3/dante_dmc3.png';
import DanteAndVergil from './images/devilmaycry3/dante_and_vergil.jpg';
import Other from './images/devilmaycry3/other.png';
import Vergil3 from './images/devilmaycry3/vergil_dmc3.png';
import Dante5 from './images/devilmaycry5/dante_dmc5.png';
import Nero5 from './images/devilmaycry5/nero_dmc5.png';
import V from './images/devilmaycry5/v_dmc5.png';
import Vergil5 from './images/devilmaycry5/vergil_dmc5.png';
import VideoThumbnail from './VideoThumbnail.js'
import parse, { domToReact } from 'html-react-parser';
import './VideoPage.css';

function VideoPage(props) {

    var currentFilters = false;
    //var initFilters = [...props.filters]
    var a = '\xa0\xa0\xa0' + "V";

    const filterList = {
        'Devil May Cry': {
            filters: [
                {
                    id: 'dante1',
                    name: 'Dante',
                    image: Dante1,
                    filterNum: 0
                },
                {
                    id: 'other1',
                    name: 'Other',
                    image: Other,
                    filterNum: 1
                }
            ],
        },
        'Devil May Cry 2': {
            filters: [
                {
                    id: 'dante2',
                    name: 'Dante',
                    image: Dante2,
                    filterNum: 0
                },
                {
                    id: 'lucia',
                    name: 'Lucia',
                    image: Lucia,
                    filterNum: 1
                },
                {
                    id: 'trish2',
                    name: 'Trish',
                    image: Trish2,
                    filterNum: 2
                },
                {
                    id: 'other2',
                    name: 'Other',
                    image: Other,
                    filterNum: 3
                }
            ],
        },
        'Devil May Cry 3': {
            filters: [
                {
                    id: 'dante3',
                    name: 'Dante',
                    image: Dante3,
                    filterNum: 0
                },
                {
                    id: 'vergil3',
                    name: 'Vergil',
                    image: Vergil3,
                    filterNum: 1
                },
                {
                    id: 'dv3',
                    name: 'Dante and Vergil',
                    image: DanteAndVergil,
                    filterNum: 2
                },
                {
                    id: 'other3',
                    name: 'Other',
                    image: Other,
                    filterNum: 3
                }
            ],
        },
        'Devil May Cry 5': {
            filters: [
                {
                    id: 'nero5',
                    name: 'Nero',
                    image: Nero5,
                    filterNum: 0
                },
                {
                    id: 'dante5',
                    name: 'Dante',
                    image: Dante5,
                    filterNum: 1
                },
                {
                    id: 'v5',
                    name: a,
                    image: V,
                    filterNum: 2
                },
                {
                    id: 'vergil5',
                    name: 'Vergil',
                    image: Vergil5,
                    filterNum: 3
                }
            ],
        }
    }
    const [filtersClicked, setFilters] = useState(props.filters)

    function generateFilters() {
        console.log('creating a filter')
        return (
            (filterList[props.game]['filters']).map((item) => (
                <Fragment>
                    <CharacterFilter id={item.id} image={item.image} name={item.name} onClick={() => { flipFilters(item.filterNum) }}></CharacterFilter>
                </Fragment>
            )
            ))
    }

    function flipFilters(filterNumber) {
        //console.log(initFilters)
        let initFilters = [...filtersClicked];
        initFilters[filterNumber] = !initFilters[filterNumber]
        console.log(filtersClicked)
        setFilters(initFilters)
        console.log(filtersClicked)
    }

    function generateVideos(video_links) {
        console.log(video_links)
        return (
            video_links.map((item) => (
                <Fragment>
                    <VideoThumbnail player={item.player} url={item.video_link}></VideoThumbnail>
                </Fragment>
            )
            ));
    }
    //for tomorrow: rename iframeAdder to be more fitting, make videos left-aligned inside of container, add a POST API call OR sign-in functions
    function filterAdder() {
        try {
            return <Container style={{ 'display': 'flex', 'justifyContent': 'center', 'padding': 30 }}>{generateFilters()}</Container>
        }
        catch (exception) {
            console.log(exception)
            console.log('issue with the filters')
        }
    }

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

    useEffect(() => {
        async function getContent() {
            // console.log('currentFilters')
            // console.log(currentFilters)
            // console.log('filtersClicked')
            // console.log(filtersClicked)
            // try {
            //     if (currentFilters == filtersClicked) {
            //         console.log("if we're here then this thing is now cut off")
            //         return;
            //     }
            // }
            // catch (exception) {
            //     console.log("currentFilters doesn't exist")
            // }

            //let's try to do a .map to create the URL search params. There's a .append for this
            let params = new URLSearchParams({ game: props.game })
            var providedURL = 'http://localhost:8080/videos/all?'
            filterList[props.game]['filters'].forEach((item) => {
                console.log(item)
                params.append(item.name, filtersClicked[item.filterNum])
                console.log(params.toString())
            })
            //this'll work if we can get UseEffect to work on filter selection
            //(for the sake of minimizing renders, maybe add an "apply" button)
            // if (newData.prop) {
            //     return
            // }
            // const options = {
            //     url: 'providedURL' + params,
            //     method: 'GET',
            //     withCredentials: true,
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     data: {
            //         //body: JSON.stringify(data)
            //     }
            // };
            await fetch(providedURL + params,
                // s = new URLSearchParams({ foo: 'bar' }); s.append('foo', 'baz'); s.toString()
                //the URL works, we just need to figure out how to push the info through
                {
                    method: "GET"
                })
                .then(async (response) => response.json())
                .then(async (data) => {
                    let clone = JSON.parse(JSON.stringify(data))
                    clone.prop = 2
                    console.log('http://localhost:8080/videos/all?' + new URLSearchParams({ game: props, Dante: filtersClicked[0], Vergil: filtersClicked[1], duo: filtersClicked[2], Other: filtersClicked[3] }))
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
            <VideoFilter dantes={filterAdder()} filters={filtersClicked} filterFunction={setFilters}></VideoFilter>
            {iframeAdder()}
        </div>
    )
}

export default VideoPage;