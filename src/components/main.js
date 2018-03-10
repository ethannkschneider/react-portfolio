import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Welcome from './welcome';
import Summary from './summary';
import Projects from './projects';
import Widgets from './widgets';
import Contact from './contact';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/welcome' component={Welcome}/>
      <Route exact path='/about' component={Summary}/>
      <Route exact path='/projects' component={Projects}/>
      <Route exact path='/widgets' component={Widgets}/>
      <Route exact path='/contact' component={Contact}/>
      <Redirect to='/welcome' />
    </Switch>
  </main>
);
