import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Welcome from './welcome';
import Summary from './summary';
import Projects from './projects';
import Widgets from './widgets';
import Contact from './contact';
import '../assets/css/main.css';

const Main = () => (
  <main class="main-content">
    <Switch>
      <Route exact path='/welcome' component={Welcome}/>
      <Route exact path='/about' component={Summary}/>
      <Route exact path='/portfolio' component={Projects}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/fun' component={Widgets}/>
      <Redirect to='/welcome' />
    </Switch>
  </main>
);

export default Main;
