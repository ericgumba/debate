import generateRowId from '../functions/GenerateDebateId';
import createToken from './CreateToken'
async function createDebate(params) {
 
    var debateId = generateRowId(32).toString()
    let debateTitle = params.debateTitle
    let debateSummary = params.debateSummary
    let dateCreated = new Date()
    let identity = params.identity
    let debateToken = await createToken({identity, debateTitle}) 
 


    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ debateId, debateTitle, debateSummary,dateCreated, debateToken, identity })
  };   
  console.log(requestOptions)

    fetch('https://25yefg2sbk.execute-api.us-west-2.amazonaws.com/default/create_debate', requestOptions)
      .then(response => { console.log("fetching complete"); return response.json() })
      .then(data => console.log(data));
}  


export default createDebate