 
async function createToken(params){
    let identity = params.identity
    let debateTitle = params.debateTitle
    const reqOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ debateTitle, identity })
    };
    const url= "https://25yefg2sbk.execute-api.us-west-2.amazonaws.com/default/generate_twilio_access_token"
    let r = await fetch(url, reqOptions);
    let res = await r.json()

    return res.body.replace("\"","")

  }


export default createToken