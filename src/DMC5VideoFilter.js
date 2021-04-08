import { useState, createElement, useEffect } from 'react';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
// import Dante from './images/dante_dmc5.png';
// import Nero from './images/nero_dmc5.png';
// import V from './images/v_dmc5.png';
// import Vergil from './images/vergil_dmc5.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './Canvas.js';
import './HomePage.css';
import Dante from './images/devilmaycry5/dante_dmc5.png';
import Nero from './images/devilmaycry5/nero_dmc5.png';
import V from './images/devilmaycry5/v_dmc5.png';
import Vergil from './images/devilmaycry5/vergil_dmc5.png';
import DMCNavbar from './DMCNavbar.js';
import CharacterFilter from './CharacterFilter.js';


function VideoFilter() {

    // function buttonClicked(id) {
    //     console.log(id)
    //     console.log(document.getElementById(id));
    //     //It's always doing the top one on the list, we need some sort of iterative thing

    //     //if (document.getElementById(id).addEventListener("click", function() {
    //     //    document.getElementById(id).style.backgroundColor = 'black';
    //     //}

    //     //if (document.getElementById(id).style.backgroundColor == 'grey') {
    //     //   document.getElementById(id).style.backgroundColor = 'black';
    //     //}
    //     //else {
    //     //  document.getElementById(id).style.backgroundColor = 'grey';
    //     //}

    // }
    //We'll have VideoFilter take in the number of props as playable characters in a game, 
    //as well as their images. Then we just iterate through until we get all of them. 
    //The series doesn't have enough player characters that we should worry about more than 5
    //try addEventListener instead of onclick
    var a = '\xa0\xa0\xa0' + "V";
    //console.log(document.getElementById('char-filter-nero5'))
    // document.getElementById('char-filter-nero5').addEventListener("click", function () {
    //     if (document.getElementById('char-filter-nero5').style.backgroundColor = 'black') {
    //         document.getElementById('char-filter-nero5').style.backgroundColor = 'grey';
    //     }
    //     else {
    //         document.getElementById('char-filter-nero5').style.backgroundColor = 'black';
    //     }
    // })
    const [newData, setData] = useState(false);
    useEffect(() => {
        async function getContent() {
            if (newData.prop) {
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
                    setData(clone.data[0].player_character)
                })

        }
        getContent();
    }, [newData])
    console.log(newData)
    return (
        <div style={{ 'backgroundColor': '#666699' }}>
            <Container>
                <Row style={{ 'flexWrap': 'nowrap', 'justifyContent': 'space-evenly' }}>
                    <CharacterFilter filterId='nero5' image={Nero} name="Nero"></CharacterFilter>
                    <CharacterFilter filterId='dante5' image={Dante} name="Dante"></CharacterFilter>
                    <CharacterFilter filterId='v5' image={V} name={a} ></CharacterFilter>
                    <CharacterFilter filterId='vergil5' image={Vergil} name="Vergil" ></CharacterFilter>
                </Row>
                <Row>
                    <h1>{newData}</h1>
                </Row>
            </Container>
        </div >
    )
}

export default VideoFilter;