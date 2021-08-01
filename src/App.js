//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* import Login from "./Login";
import Dashboard from "./Dashboard";
import Parent from "./Task";
import { useSelector,useDispatch } from "react-redux";
import { Increment,Decrement } from "./Actions/actions"; */
import Profile from "./Yikes/Profile";
import CompanyHeader from "./Yikes/CompanyHeader";
import Sider from "./Yikes/sider";
import Price from "./Yikes/price";
import Workflow from "./Yikes/workflow";
import { Layout, Menu, Row, Col, Upload, Input, Avatar, Select } from 'antd';
import Market from "./Yikes/market";
import Details from "./Yikes/details";
import "antd/dist/antd.css";
function App() {
  /* const counter = useSelector(state => { 
    console.log(state,"state");
    return state
  });
  const add = useDispatch(); */
  return (
    <div className="App">
      <Router>
        <CompanyHeader />
        <Layout>
           <Sider />
          <Switch>
            <Route exact path="/market" component={Market}/>
            <Route exact path="/workflow" component={Workflow}/>
            <Route exact path="/price" component={Price} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/" component={Profile} />
          </Switch>
        </Layout>
      </Router>,
    </div>
  );
}

export default App;
