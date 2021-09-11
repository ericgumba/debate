import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import generateRowId from '../functions/GenerateDebateId';
import getDebates from '../functions/GetDebates';
import Debate from '../components/Debate';
import { Link } from 'react-router-dom';

function DebateList({ debates }) {
  const [debateList, setDebateList] = React.useState([]);

  React.useEffect(() => {
    async function retrieve(){ 
      const url = `https://25yefg2sbk.execute-api.us-west-2.amazonaws.com/default/get_debates`;
      const res = await fetch(url); 
      const debates  = await res.json();  
      setDebateList(debates.body) 
    }

    retrieve()

  }, [debates]); 

  return (
    <div>
      <header>hello</header>
      <Link to="/submit">
        <button> Create debate </button>
      </Link> 
      <ul>
        {debateList.map((debate, i) => {
          return <Debate 
                          debateId={debate.debateId} 
                          debateTitle={debate.debateTitle} 
                          debateSummary={debate.debateSummary} />;
        })}
      </ul>
    </div>
  );
}
{/* <Greeting greeting={greeting} /> */}


export default DebateList;


 