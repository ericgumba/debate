import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signup from '../pages/Signup';
import DebateList from '../pages/DebateList';
import DebateRoom from '../pages/DebateRoom';
import Submit from '../pages/Submit';
import { Link } from "react-router-dom";

const Debate = (props) => {
    const path = "/debateroom?debateId=" + props.debateId
  return ( 
      <div>
          <header>{props.debateId}</header>
          <header>{props.debateTitle}</header>
          <header>{props.debateSummary}</header> 
            <Link to={path} >
                <button> Join debate </button>
            </Link> 
      </div>
  );
}

export default Debate;