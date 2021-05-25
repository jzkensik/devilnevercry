import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './HomePage'
import VideoPage from './VideoPage'
import UploadVideo from './UploadVideo'
import Navigation from './Navigation'
import './App.css';
import DMCNavbar from './DMCNavbar';

function App() {

  // const VideoPageDMC1 = ({ filters }) => {
  //   return (
  //     <VideoPage characters></VideoPage>
  //   )
  // }

  return (
    <Router>
      <div>
        <div class="sticky" style={{ zIndex: 3 }}>
          <DMCNavbar></DMCNavbar>
        </div>
        <Switch style={{ zIndex: 2 }}>
          <Route path='/' exact component={HomePage} />
          <Route path='/devilmaycry' component={() => <VideoPage game={'Devil May Cry'} filters={[false, false]}></VideoPage>} />
          <Route path='/devilmaycry2' component={() => <VideoPage game={'Devil May Cry 2'} filters={[false, false, false, false]}></VideoPage>} />
          <Route path='/devilmaycry3' component={() => <VideoPage game={'Devil May Cry 3'} filters={[false, false, false, false]}></VideoPage>} />
          <Route path='/devilmaycry5' component={() => <VideoPage game={'Devil May Cry 5'} filters={[false, false, false, false]}></VideoPage>} />
          <Route path='/upload' component={UploadVideo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
