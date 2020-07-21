import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from "./components/home/Home.js";
import Listing from "./components/listing/Listing.js";
import ListingDetail from "./components/listing/Detail.js";

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={Listing} />
        <Route path="/detail" component={ListingDetail} />

      </Switch>
  </BrowserRouter>
  , document.getElementById('root'));


