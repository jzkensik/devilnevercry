import { useState, useEffect, Fragment } from 'react';
import { Navbar, Container, Row, Col, Button, Carousel, Dropdown, DropdownButton, InputGroup, Form } from 'react-bootstrap';
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.min.css';

function UploadFields(props) {

    const [character, setCharacter] = useState(0)
    const [version, setVersion] = useState(0)
    const [currentSlide, setSlide] = useState(0)
    const gameMap = { 0: 'Devil May Cry', 1: 'Devil May Cry 2', 2: 'Devil May Cry 3', 3: 'Devil May Cry 4', 4: 'DMC: Devil May Cry', 5: 'Devil May Cry 5' }
    try {
        var video_title = document.getElementById('title-form').value;
        var video_link = document.getElementById('link-form').value;
        //see how you can pass this into POST
    } catch (exception) {

    }

    async function sendContent() {
        var data = { game: gameMap[props.field], title: video_title, link: video_link, character: character, version: version }
        await fetch('http://localhost:8080/videos/new-video',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(async (response) => console.log(response.json()))

    }

    if (currentSlide != props.field) {
        console.log(character)
        setCharacter('char-dropdown')
        setVersion('version-dropdown')
        setSlide(props.field)
    }

    function selectedButton(selection, dummy) {
        if (dummy == 'char') {
            setCharacter(selection)
        }
        else if (dummy == 'version') {
            setVersion(selection)
        }
    }

    function selectCharForm() {
        switch (props.field) {
            case 0:
                return generateDropdown(['Dante', 'Other'], '1', 'char')
            case 1:
                return generateDropdown(['Dante', 'Lucia', 'Trish', 'Other'], '2', 'char')
            case 2:
                return generateDropdown(['Dante', 'Vergil', 'Duo', 'Other'], '3', 'char')
            case 3:
                return generateDropdown(['Nero', 'Dante', 'Lady', 'Trish', 'Vergil', 'Other'], '4', 'char')
            case 4:
                return generateDropdown(['Dante', 'Vergil', 'Other'], 'dmc', 'char')
            case 5:
                return generateDropdown(['Nero', 'Dante', 'V', 'Vergil', 'Other'], '5', 'char')
        }
    }
    function selectVersion() {
        switch (props.field) {
            case 0:
                return generateDropdown(['Original', 'HD Collection', 'Switch', 'PC', 'n/a'], '1', 'version')
            case 1:
                return generateDropdown(['Original', 'HD Collection', 'Switch', 'PC', 'n/a'], '2', 'version')
            case 2:
                return generateDropdown(['Original', 'Special Edition', 'HD Collection', 'Switch', 'PC', 'n/a'], '3', 'version')
            case 3:
                return generateDropdown(['Original', 'Special Edition', 'PC', 'n/a'], '4', 'version')
            case 4:
                return generateDropdown(['Original', 'Definitive Edition', 'PC', 'n/a'], 'dmc', 'version')
            case 5:
                return generateDropdown(['Original', 'Special Edition', 'PC', 'n/a'], '5', 'version')
        }
        //when you select an option, the dropdown takes the name of the selected option
    }

    function generateDropdown(dropdown_contents, game, dummy) {

        return (
            dropdown_contents.map((item) => (
                <Fragment>
                    <Dropdown.Item as="button" eventKey={item + '-' + game} onSelect={() => selectedButton(item, dummy)}>{item}</Dropdown.Item>
                </Fragment>
            )
            ));
    }
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control id='title-form' type="text" placeholder="Title" />
                    <Form.Text>
                        Pick something descriptive yet succint. Ask yourself, would Dante get bored reading it?
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Video Link</Form.Label>
                    <Form.Control id='link-form' type="text" placeholder="Video Link" />
                </Form.Group>
            </Form>
            <div style={{ 'display': 'flex', 'justifyContent': 'space-evenly', 'flexWrap': 'column' }}>
                <DropdownButton id='character-dropdown' title={character || 'char-dropdown'}>
                    {selectCharForm()}
                </DropdownButton>
                <DropdownButton id='version-dropdown' title={version || 'version-dropdown'}>
                    {selectVersion()}
                </DropdownButton>

            </div>
            <Button onClick={sendContent}><h1>here</h1></Button>
        </>
    )

}

export default UploadFields;