import Image from 'react-bootstrap/Image'
import dante from './boomerDante.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'

function Canvas(props) {
    window.addEventListener('load', (event) => {
        var element = document.getElementById('reaching')
        var style = window.getComputedStyle(element);
        var color = style.getPropertyValue('background-color')
        console.log(color)
    });

    // //function blurEdges() {
    var img = document.getElementById('dante');
    var canvas = document.createElement('canvas');
    console.log(img)
    console.log(canvas);
    canvas.width = img.width;
    canvas.height = img.height;
    console.log(canvas.height)
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
    console.log(canvas)
    var ctx = canvas.getContext("2d");
    //var imgData = ctx.getImageData(10, 10, img.width, img.height);
    // //for (var i = 0; i < img.width; i++) {
    // //tomorrow, see if we can swap the img for a canvas
    // //}
    // // for (var i = 0; i < img.width * 4; i++) {
    // //     for (var j = 0; j < img.height * 4; j++) {
    // //         imgData.data[((img.width * i) + j) * 4] = 100;
    // //     }
    // // }

    // console.log(imgData.data[2887]);
    // console.log(imgData.data[2888]);
    // console.log(imgData.data[2889]);
    //}
    return (
        <div></div>
    )
}

export default Canvas;