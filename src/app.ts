const express =  require('express');

const app = express();

app.listen(3000, ()=>{
  console.log(`
    ===================================
    Server is working on the port 3000. 
    ===================================
  `)
})