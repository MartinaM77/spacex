import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Dashboard from './Dashboard.js';
import Mission from './Mission.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/mission">
            <Mission/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
