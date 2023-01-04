var express = require('express')
var server = express()
const port = 3000

server.listen(port, () => {
  console.log(`ok`);

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
server.get('/hello/:id',(requestt,respondd)=>{
const message2='Hello, ${requestt.params.id}';
respondd.send({
    status:200,
    message:message2
  });
});
server.get('/search',(requestt,respondd)=>{
 if(requestt.query.s){
  data2=requestt.query.s;
   message2={
    status:200,
    message:"ok",
    data:data2
  }
 }
 else{
  message2={
    status:500,
    message:"you have to provide a search",
    error:true
 }
}
respondd.send(message2);
});

const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
]