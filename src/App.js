import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.css';
import Main from "./pages/main";
import NavBar from './pages/nav';
import Resume from './pages/resume';
import Project from './pages/projects/project';
import Contact from './pages/contact';
import Show from './pages/projects/project-show';


const App = () => (
  <HashRouter>
    <div>
      <Route path="/" component={ NavBar } />
      <Route exact path="/" component={Main} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/show" component={Show} />
    </div>
  </HashRouter>
);

export default App;
