import { useState, useEffect, Fragment } from 'react';
import { Navbar, Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './Canvas.js';
import DMCNavbar from './DMCNavbar.js';
import VideoThumbnail from './VideoThumbnail.js'
import UploadFields from './UploadFields.js'
import parse, { domToReact } from 'html-react-parser';
import dmc1_title from './images/devilmaycry/dmc1.jpg'
import dmc2_title from './images/devilmaycry2/dmc2.jpg'
import dmc3_title from './images/devilmaycry3/devil_may_cry_3_title.jpg'
import dmc4_title from './images/devilmaycry4/devil_may_cry_4_title.jpg'
import dmc_title from './images/dmcdevilmaycry/dmc_dmc.jpg'
import dmc5_title from './images/devilmaycry5/devil_may_cry_5_title.jpg'
import './UploadVideo.css'

function UploadVideo() {

    //var [newData, setData] = useState(false);

    function moriCalliope() {
        console.log('guh')
        //jokes aside, as we thought, this'll work depending on which is pressed.
        //We can either clinch currently active or add a button
        //onSelect, activeIndex
    }



    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        console.log(selectedIndex)

        //Devil May Cry: "Baby, you're so classic"
        //Devil May Cry 2: "Damn, dude, you live like this?"
        //Devil May Cry 3: "MOOOOOOOM, DANTE SAYS HE'S GONNA ROYALGUARD ME"
        //Devil May Cry 4: "Are you winning, nephew?"
        //DMC: Devil May Cry: "Starring Dontè, el exterminador de demonios"
        //Devil May Cry 5: "It's like Neighbors, except they're related and a city is being ethered"
    };


    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <DMCNavbar></DMCNavbar>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                <Carousel.Item style={{ textAlign: 'center' }} onClick={moriCalliope}>
                    <img className='blur-box' style={{ display: 'inline-block' }}
                        src={dmc1_title}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Devil May Cry</h3>
                        <p>Baby, you're so classic</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ textAlign: 'center' }} onClick={moriCalliope}>
                    <img className='blur-box' style={{ display: 'inline-block' }}
                        src={dmc2_title}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Devil May Cry 2</h3>
                        <p>Damn, dude, you live like this?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ textAlign: 'center' }} onClick={moriCalliope}>
                    <img className='blur-box' style={{ display: 'inline-block' }}
                        src={dmc3_title}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Devil May Cry 3</h3>
                        <p>MOOOOOOOM, DANTE SAYS HE'S GONNA ROYALGUARD ME</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ textAlign: 'center' }}>
                    <img className='blur-box' style={{ display: 'inline-block' }}
                        src={dmc4_title}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Devil May Cry 4</h3>
                        <p>Are you winning, nephew?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ textAlign: 'center' }} onClick={moriCalliope}>
                    <img className='blur-box' style={{ display: 'inline-block' }}
                        src={dmc_title}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>DMC: Devil May Cry</h3>
                        <p>Starring Dontè, el exterminador de demonios</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ textAlign: 'center' }}>
                    <img className='blur-box' style={{ display: 'inline-block' }}
                        src={dmc5_title}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Devil May Cry 5</h3>
                        <p>It's like Neighbors, except they're related and a city is being ethered</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <UploadFields field={index}></UploadFields>
        </div>

    )
}
//visible information they input:
//video_link, player_character, game, mission, difficulty, version, video_type, video_title
//information we need to generate/retrieve:
//video_id, user_id
//elements we need to have:
//submit button, game dropdown(results in another four dropdowns: pc, difficulty, version), radio button for vid_type, input bar for vid_title and vid_link
//ButtonGroup, Carousel, List Group, Overlay
//Dropdowns(for mission, difficulty)
//Pagination
//pc, mission, difficulty, version(all game-specific), radio button, two input bars(not game-specific)
export default UploadVideo;