// import React, {Component} from 'react';  
// import LandingPage from './Routing/LandingPage';
// import Routing from './Router/router.js';
// import Header from './Routing/Header';

// class App extends Component {  
//     render() {  
//         return (  
//         <>
//             <Header />
//             <Routing />
//         </> //cek deploy                  
//     );  
// }  
// }  
// export default App;

import React from 'react';  
import {
  BrowserRouter,
  Switch,
  Route
} 
from "react-router-dom";
import Header from "./UTS/Header";
import Blog from "./UTS/Blog.js";
import BlogDetail from "./UTS/BlogDetail";

//install bootstrap dulu
import 'bootstrap/dist/css/bootstrap.min.css';

// Ini merupakan functional component
//https://getbootstrap.com/docs/4.4/examples/navbar-static/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about">
            About
          </Route>
          <Route path="/blog/:articleId" component={BlogDetail} />
          <Route path="/blog" component={Blog}>
            <Blog />
          </Route>
          <Route path="/">
            Home
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;