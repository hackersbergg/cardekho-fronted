import React, { Component } from 'react';


import Header from "../common/Header.js"
import Footer from "../common/Footer.js"

import ListDetail from "./ListDetail.js"



const App = (props) => (
  <div>
    <Header></Header>
    <ListDetail {...props}></ListDetail>
    <Footer></Footer>
  </div>
);

export default App;