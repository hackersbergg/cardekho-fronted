import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from "./components/home/App.js";
import Listing from "./components/listing/ListingApp.js";
import ListingDetail from "./components/listing/ListingDetailApp.js";

import BlogList from "./components/blog/BlogList.js";
import BlogDetail from "./components/blog/BlogDetail.js";

ReactDOM.render(
  <BrowserRouter>
      <Switch>
      
        <Route exact path="/" component={Home} />
        <Route path="/list" component={Listing} />
        <Route path="/detail/:slug" component={ListingDetail} />
        <Route path="/blog" component={BlogList} />
        <Route path="/blogdetail/:slug" component={BlogDetail} />

      </Switch>
  </BrowserRouter>
  , document.getElementById('root'));


