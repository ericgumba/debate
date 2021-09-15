
  function generateIdentity(){
      function randomIntFromInterval(min, max) { // min and max included 
          return Math.floor(Math.random() * (max - min + 1) + min);
        }
      

    return "player" + randomIntFromInterval(100000,1000000);
  }

  export default generateIdentity