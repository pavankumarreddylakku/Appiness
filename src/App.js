import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
function App() {
 
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </div>
      </Router>,
    </div>
  );
}

export default App;
