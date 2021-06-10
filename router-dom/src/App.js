import React, { Component } from 'react';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home"
import NavBar from "./components/navbar"
import A from "./components/a"
import B from "./components/b"
import C from "./components/c"
import D from "./components/d"
import E from "./components/e"
import Error from "./components/error"
import NestedRoute from './components/nestedRouting';


class App extends Component {
  render(){
    return (
      <div>
        <div className="content">
          <NavBar />
          <Switch>
                {/* <Route path="" component={} /> */}
                <Route path="/a/:x?/:y?" component={A} />
                <Route path="/b" component={B} />
                <Redirect from="/c" to="/d" />
                <Route path="/c" component={C} />
                <Route path="/d" component={D} />
                <Route path="/e" component={E} />
                <Route path="/nestedRouteing" component={NestedRoute} />
                <Route path="/error" component={Error} />
                <Route path="/" exact component={Home} />


                {/* if nothing match */}
                <Redirect to="/error" />
          </Switch>
        </div>
      </div>
    );
  }
 
}

export default App;
