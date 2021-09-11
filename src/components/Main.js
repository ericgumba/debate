import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signup from '../pages/Signup';
import DebateList from '../pages/DebateList';
import DebateRoom from '../pages/DebateRoom';
import Submit from '../pages/Submit';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/signup' component={Signup}></Route>
      <Route exact path='/submit' component={Submit}></Route>
      <Route exact path='/debatelist' component={DebateList}></Route>
      <Route exact path='/debateroom' component={DebateRoom}></Route>
    </Switch>
  );
}

export default Main;