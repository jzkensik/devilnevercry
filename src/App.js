import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './HomePage'
import VideoPage from './VideoPage'
import Navigation from './Navigation'
import './App.css';
import DMCNavbar from './DMCNavbar';

function App() {
  return (
    <Router>
      <div>
        <div class="sticky">
          <DMCNavbar></DMCNavbar>
        </div>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/devilmaycry3' component={VideoPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
