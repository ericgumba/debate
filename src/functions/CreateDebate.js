import generateRowId from '../functions/GenerateDebateId';

async function createDebate(params) {
    async function createToken(){
      const reqOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ debateTitle })
      };
      const url= "https://25yefg2sbk.execute-api.us-west-2.amazonaws.com/default/generate_twilio_access_token"
      let r = await fetch(url, reqOptions);
      let res = await r.json()

      return res.body

    } 

    var debateId = generateRowId(32).toString()
    let debateTitle = params.debateTitle
    let debateSummary = params.debateSummary
    let dateCreated = new Date()
    let debateToken = await createToken() 

    console.log("DEBATE TOKEN THAT WAS JUST GENERATED: ", debateToken)


    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ debateId, debateTitle, debateSummary,dateCreated, debateToken })
  };   
  console.log(requestOptions)

    fetch('https://25yefg2sbk.execute-api.us-west-2.amazonaws.com/default/create_debate', requestOptions)
      .then(response => { console.log("fetching complete"); return response.json() })
      .then(data => console.log(data));
}  


export default createDebate