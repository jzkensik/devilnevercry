import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage';
import DMCNavbar from './DMCNavbar';
import VideoPage from './VideoPage';
import CharacterFilter from './CharacterFilter';
import VideoThumbnail from './VideoThumbnail';
import UploadVideo from './UploadVideo';
import 'bootstrap/dist/css/bootstrap.min.css';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UploadVideo></UploadVideo>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
