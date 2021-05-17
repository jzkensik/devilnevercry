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


function VideoFilter() {

    //We'll have VideoFilter take in the number of props as playable characters in a game, 
    //as well as their images. Then we just iterate through until we get all of them. 
    //The series doesn't have enough player characters that we should worry about more than 5
    //try addEventListener instead of onclick
    var a = '\xa0\xa0\xa0' + "Duo";
    const [newData, setData] = useState(false);
    const [color, setColor] = useState('black')
    const [filtersClicked, setFilters] = useState([false, false, false, false])
    var copyClicked = [false, false, false, false]

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
    useEffect(() => {
        async function getContent() {
            //this'll work if we can get UseEffect to work on filter selection
            //(for the sake of minimizing renders, maybe add an "apply" button)
            // if (newData.prop) {
            //     return
            // }
            await fetch('http://localhost:8080/videos/all?' + new URLSearchParams({ game: 'dmc3', dante: filtersClicked[0], vergil: filtersClicked[1], duo: filtersClicked[2], other: filtersClicked[3] }),
                // s = new URLSearchParams({ foo: 'bar' }); s.append('foo', 'baz'); s.toString()
                //the URL works, we just need to figure out how to push the info through
                {
                    method: "GET"
                })
                .then(async (response) => response.json())
                .then(async (data) => {
                    let clone = JSON.parse(JSON.stringify(data))
                    clone.prop = 2
                    console.log('http://localhost:8080/videos/all?' + new URLSearchParams({ vergil: filtersClicked[1], dante: filtersClicked[0], duo: filtersClicked[2], other: filtersClicked[3] }))
                    setData(clone.data[0].player_character)
                })

        }
        getContent();
        console.log('run through')
    }, [newData, filtersClicked])

    return (
        <div style={{ 'backgroundColor': '#666699' }}>
            <Container>
                <Row style={{ 'flexWrap': 'nowrap', 'justifyContent': 'space-evenly' }}>
                    <CharacterFilter id='dante3' image={Dante} name="Dante" onClick={() => setFilters([!filtersClicked[0], filtersClicked[1], filtersClicked[2], filtersClicked[3]])}></CharacterFilter>
                    <CharacterFilter id='vergil3' image={Vergil} name="Vergil" onClick={() => console.log(filtersClicked)}></CharacterFilter>
                    <CharacterFilter id='dv3' image={DanteAndVergil} name={a} onClick={() => setFilters([filtersClicked[0], filtersClicked[1], !filtersClicked[2], filtersClicked[3]])}></CharacterFilter>
                    <CharacterFilter id='other3' image={Other} name="Other" ></CharacterFilter>
                </Row>
                <Row>
                    <h1>{newData}</h1>
                </Row>
            </Container>
        </div >
    )
}

export default VideoFilter;