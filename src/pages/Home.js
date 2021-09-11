import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from "react-router-dom";
function Home() {
  return (
    <div >
      <header> 
        <h1>We now have Home!</h1>
      </header>
      <Link to="/debatelist">
        <button> 
            debate someone 
        </button> 
      </Link>
      <Link to="/signup">
        <button variant="outlined">
            Sign up
        </button>
      </Link>   
      <Link to="/debateroom">
        <button variant="outlined">
            debate room
        </button>
      </Link>  
    </div>
  );
}

export default Home;