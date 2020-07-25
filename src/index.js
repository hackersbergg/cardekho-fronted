import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from "./components/home/App.js";
import Listing from "./components/listing/ListingApp.js";
import ListingDetail from "./components/listing/ListingDetailApp.js";

import BlogList from "./components/blog/BlogList.js";
import BlogDetail from "./components/blog/BlogDetail.js";

import AboutUs from "./components/static/About.js";
import ContactUs from "./components/static/Contact.js";
import Services from "./components/static/Service.js";
import NotFound from "./components/static/404.js";

ReactDOM.render(
  <BrowserRouter>
      <Switch>
      
        <Route exact path="/" component={Home} />
        <Route path="/list" component={Listing} />
        <Route path="/detail/:slug" component={ListingDetail} />
        <Route path="/blog" component={BlogList} />
        <Route path="/blogdetail/:slug" component={BlogDetail} />

        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/service" component={Services} />
        <Route path="*" component={NotFound} status={404} />

      </Switch>
  </BrowserRouter>
  , document.getElementById('root'));


