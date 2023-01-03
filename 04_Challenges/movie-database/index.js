const express = require('express')
const server = express()
const port = 3000

server.listen(port, () => {
  console.log(`ok`);

})
server.use(express.json());
server.post("/", (requestt, respondd) => {
  respondd.send("okii");
});


server.get( '/test' ,(requestt,respondd) =>{
    respondd.send({status:200, message:"ok"});
});
server.get( '/time' ,(requestt,respondd) =>{
    const datee=new Date();
    const time='${datee.getHours()}:${datee.getSeconds()}';
    respondd.send({
      status:200,
      message:time
    });
});


