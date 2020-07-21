import React, { Component } from 'react';


import Header from "../common/Header.js"
import Footer from "../common/Footer.js"

import Listing from "./Listing.js"



const App = (props) => (
  <div>
    <Header></Header>
    <Listing {...props}></Listing>
    <Footer></Footer>
  </div>
);

export default App;