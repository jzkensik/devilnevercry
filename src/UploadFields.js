import { useState, useEffect, Fragment } from 'react';
import { Navbar, Container, Row, Col, Button, Carousel, Dropdown, DropdownButton } from 'react-bootstrap';
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './Canvas.js';
import DMCNavbar from './DMCNavbar.js';
import VideoThumbnail from './VideoThumbnail.js'
import parse, { domToReact } from 'html-react-parser';

function UploadFields(props) {
    function selectCharForm() {
        switch (props.field) {
            case 0:
                return generateDropdown(['Dante', 'Other'], '1')
            case 1:
                return generateDropdown(['Dante', 'Lucia', 'Trish', 'Other'], '2')
            case 2:
                return generateDropdown(['Dante', 'Vergil', 'Duo', 'Other'], '3')
            case 3:
                return generateDropdown(['Nero', 'Dante', 'Lady', 'Trish', 'Vergil', 'Other'], '4')
            case 4:
                return generateDropdown(['Dante', 'Vergil', 'Other'], 'dmc')
            case 5:
                return generateDropdown(['Nero', 'Dante', 'V', 'Vergil', 'Other'], '5')
        }
    }
    function selectVersion() {
        switch (props.field) {
            case 0:
                return generateDropdown(['Original', 'HD Collection', 'Switch', 'PC', 'n/a'], '1')
            case 1:
                return generateDropdown(['Original', 'HD Collection', 'Switch', 'PC', 'n/a'], '2')
            case 2:
                return generateDropdown(['Original', 'Special Edition', 'HD Collection', 'Switch', 'PC', 'n/a'], '3')
            case 3:
                return generateDropdown(['Original', 'Special Edition', 'PC', 'n/a'], '4')
            case 4:
                return generateDropdown(['Original', 'Definitive Edition', 'PC', 'n/a'], 'dmc')
            case 5:
                return generateDropdown(['Original', 'Special Edition', 'PC', 'n/a'], '5')
        }
    }

    function generateDropdown(dropdown_contents, game) {
        console.log(dropdown_contents[0] + game)
        return (
            dropdown_contents.map((item) => (
                <Fragment>
                    <Dropdown.Item as="button" eventKey={item + game}>{item}</Dropdown.Item>
                </Fragment>
            )
            ));
    }
    return (
        <div style={{ 'display': 'flex', 'justifyContent': 'space-evenly', 'flexWrap': 'column' }}>
            <DropdownButton id='character-dropdown' title='char-dropdown'>
                {selectCharForm()}
            </DropdownButton>
            <DropdownButton id='version-dropdown' title='version-dropdown'>
                {selectVersion()}
            </DropdownButton>
        </div>
    )

}

export default UploadFields;