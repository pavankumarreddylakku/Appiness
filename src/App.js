import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Parent from "./Task";
import { useSelector,useDispatch } from "react-redux";
import { Increment,Decrement } from "./Actions/actions";
import Profile from "./Profile";
function App() {
  const counter = useSelector(state => { 
    console.log(state,"state");
    return state
  });
  const add = useDispatch();
  return (
    <div className="App">
      <Profile />
      {/* <Router>
        <div>
          <Route exact path="/">
            <Parent  />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </div>
      </Router>, */}
    </div>
  );
}

export default App;
