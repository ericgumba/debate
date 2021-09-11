 
async function getDebate(debateId) {  

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }, 
  };

  const url = `https://25yefg2sbk.execute-api.us-west-2.amazonaws.com/default/get_debate?debateId=${debateId}`;
  const res = await fetch(url, requestOptions);
  console.log("res ,", res)
  const  debates  = await res.json();
  console.log("debates ,", debates)
  return debates 
}


export default getDebate
 