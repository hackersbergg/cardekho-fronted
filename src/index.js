import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from "./components/home/App.js";
import Listing from "./components/listing/ListingApp.js";
import ListingDetail from "./components/listing/ListingDetailApp.js";

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={Listing} />
        <Route path="/detail/:slug" component={ListingDetail} />

      </Switch>
  </BrowserRouter>
  , document.getElementById('root'));


