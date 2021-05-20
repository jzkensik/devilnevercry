import { useState, createElement, useEffect } from 'react';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
// import Dante from './images/dante_dmc5.png';
// import Nero from './images/nero_dmc5.png';
// import V from './images/v_dmc5.png';
// import Vergil from './images/vergil_dmc5.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './Canvas.js';
import './HomePage.css';
import Dante from './images/devilmaycry3/dante_dmc3.png';
import DanteAndVergil from './images/devilmaycry3/dante_and_vergil.jpg';
import Other from './images/devilmaycry3/other.png';
import Vergil from './images/devilmaycry3/vergil_dmc3.png';
import DMCNavbar from './DMCNavbar.js';
import CharacterFilter from './CharacterFilter.js';
import { propTypes } from 'react-bootstrap/esm/Image';


function VideoFilter(props) {

    //We'll have VideoFilter take in the number of props as playable characters in a game, 
    //as well as their images. Then we just iterate through until we get all of them. 
    //The series doesn't have enough player characters that we should worry about more than 5
    //try addEventListener instead of onclick
    var a = '\xa0\xa0\xa0' + "Duo";
    const [newData, setData] = useState(false);
    const [color, setColor] = useState('black')
    //const [filtersClicked, setFilters] = useState([false, false, false, false])

    // try {
    //     window.addEventListener('load', function () {
    //         console.log('made it to filter')
    //         document.getElementById('dante3').addEventListener("click", danteClick);
    //         document.getElementById('vergil3').addEventListener("click", vergilClick);
    //     });
    // } catch (e) {
    //     console.log('sad trombone noise')
    // }

    //now we change background_color according to whichever has been clicked
    //var [outline, setOutline] = useState(false)
    // const divStyle = {
    //     color: 'blue',
    //     backgroundImage: 'url(' + imgUrl + ')',
    //   };
    // var dante3 = document.getElementById('dante3')
    // console.log(dante3)
    // useEffect(() => {

    // }, [])
    // useEffect(() => {
    //     async function getContent() {
    //         //this'll work if we can get UseEffect to work on filter selection
    //         //(for the sake of minimizing renders, maybe add an "apply" button)
    //         // if (newData.prop) {
    //         //     return
    //         // }
    //         await fetch('http://localhost:8080/videos/all?' + new URLSearchParams({ game: 'Devil May Cry 3', dante: filtersClicked[0], vergil: filtersClicked[1], duo: filtersClicked[2], other: filtersClicked[3] }),
    //             // s = new URLSearchParams({ foo: 'bar' }); s.append('foo', 'baz'); s.toString()
    //             //the URL works, we just need to figure out how to push the info through
    //             {
    //                 method: "GET"
    //             })
    //             .then(async (response) => response.json())
    //             .then(async (data) => {
    //                 let clone = JSON.parse(JSON.stringify(data))
    //                 clone.prop = 2
    //                 console.log('http://localhost:8080/videos/all?' + new URLSearchParams({ dante: filtersClicked[0], vergil: filtersClicked[1], duo: filtersClicked[2], other: filtersClicked[3] }))
    //                 setData(clone.data[0].player_character)
    //             })

    //     }
    //     getContent();
    //     console.log('run through')
    // }, [filtersClicked])
    // const filterList = {
    //     devilMayCry3: {
    //         'dante': {
    //             id: 'dante3',
    //             name: 'Dante',
    //             image: Dante
    //         },
    //         'vergil': {
    //             id: 'vergil3',
    //             name: 'Vergil',
    //             image: Vergil
    //         },
    //         'dante_and_vergil': {
    //             id: 'dv3',
    //             name: 'Duo',
    //             image: a
    //         },
    //         'other': {
    //             id: 'other3',
    //             name: 'Other',
    //             image: Other
    //         }
    //     },
    //     devilMayCry5: [
    //         'nero',
    //         'dante',
    //         'v',
    //         'vergil'
    //     ]
    // }
    // function generateFilters(game) {
    //     //<iframe class="videoEntries" style={{ margin: '0 auto', padding: 20, width: 300 }} src={"//www.youtube.com/embed/" + getId(item.video_link)}></iframe>
    //     return (
    //         filterList[game].map((item) => (
    //             <Fragment>
    //                 <VideoThumbnail player={item.player} url={item.video_link}></VideoThumbnail>
    //                 <CharacterFilter id=''></CharacterFilter>
    //             </Fragment>
    //         )
    //         ));
    // }
    //for tomorrow: rename iframeAdder to be more fitting, make videos left-aligned inside of container, add a POST API call OR sign-in functions

    // function iframeAdder() {
    //     try { //css modules
    //         //const addLinks = newData.map((vidEntry) => vidEntry.video_link) //this works
    //         //maybe now it's a for loop of three?
    //         var rowHold = '';
    //         var rowHold2 = '';

    //         //for (var i = 0; i < addLinks.length; i = i + 3) {
    //         //rowHold = <iframe style={{ width: 300 }} src={"//www.youtube.com/embed/" + getId(addLinks[0])}></iframe>
    //         //rowHold2 = <iframe style={{ width: 300 }} src={"//www.youtube.com/embed/" + getId(addLinks[2])}></iframe>
    //         //}
    //         return <Container style={{ 'display': 'flex', 'justifyContent': 'center', 'padding': 30 }}><Row style={{ display: 'flex', justifyContent: 'center', 'paddingTop': 50, 'paddingLeft': 80, 'paddingRight': 80 }}>{generateVideos(newData)}</Row></Container>
    //     }
    //     catch (exception) {
    //     }
    // }

    return (
        <div style={{ 'backgroundColor': '#666699' }}>
            <Container>
                <Row style={{ 'flexWrap': 'nowrap', 'justifyContent': 'space-evenly' }}>
                    <CharacterFilter id='dante3' image={Dante} name="Dante" onClick={() => props.filterFunction([!props.filters[0], props.filters[1], props.filters[2], props.filters[3]])}></CharacterFilter>
                    <CharacterFilter id='vergil3' image={Vergil} name="Vergil" onClick={() => props.filterFunction([props.filters[0], !props.filters[1], props.filters[2], props.filters[3]])}></CharacterFilter>
                    <CharacterFilter id='dv3' image={DanteAndVergil} name={a} onClick={() => props.filterFunction([props.filters[0], props.filters[1], !props.filters[2], props.filters[3]])}></CharacterFilter>
                    <CharacterFilter id='other3' image={Other} onClick={() => console.log(filterList['devilMayCry3'])} name="Other"></CharacterFilter>
                </Row>
                <Row>
                    <h1>{props.dataRecieved}</h1>
                </Row>
            </Container>
        </div >
    )
}

export default VideoFilter;