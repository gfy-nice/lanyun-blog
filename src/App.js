import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./containers/home/index"
import Program from "./containers/program/index"
import EditPage from "./containers/edit-page/index"

export default function BasicExample() {
    return (
        <Router>
            <Switch>
                <Route path="/program">
                    <Program/>
                </Route>
                <Route path="/editpage">
                    <EditPage/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
