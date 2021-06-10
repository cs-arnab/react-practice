import React, { Component } from "react";
import { Route,Redirect,Switch } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import Customers from "./components/customer";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from './components/navBar';
import MovieForm from "./components/movieForm"

function App() {
  return (
    <div>
    <NavBar />
    <main className="container">
      {/* <Movies /> */}
      <Switch>
      <Route path="/movies/:id" component={MovieForm}></Route>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/customer" component={Customers}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/notFound" component={NotFound}></Route>
      <Redirect from="/" exact to ="/movies" />
      <Redirect to ="/notFound" />
      </Switch>

    </main>
    </div>
  );
}

export default App;
