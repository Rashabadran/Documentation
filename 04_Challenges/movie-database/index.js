const express = require('express')
const port = 3000
const server = express()


server.listen(port, () => {
  console.log(`ok`);

});
server.get("/",(requestt,respondd)=>{
  respondd.send('Hello');
});
server.get( '/test' ,(requestt,respondd) =>{
    respondd.send({status:200, message:"ok"});
});
server.get( '/time' ,(requestt,respondd) =>{
    const datee=new Date();
    const time=`${datee.getHours()}:${datee.getSeconds()}`;
    const message2={
      status:200,
      message:time};
      respondd.send(message2);
    
});
server.get('/hello/:id',(requestt,respondd)=>{
const message2=`Hello, ${requestt.params.id}`;
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

server.get("/movies/create", (requestt, respondd) => {
    
});

server.get("/movies/read", (requestt, respondd) => {
    respondd.send({
        status: 200, 
        movie: movies
    });
});

server.get("/movies/update", (requestt, respondd) => {

});

server.get("/movies/delete", (requestt, respondd) => {

})
server.get("/movies/read/by-date", (requestt, respondd) => {
  const arr=[...movies];
  arr.sort(function(a,b){
    if(a.year<b.year){
      return -1;
    }
    else if(a.year>b.year){
      return 1;
    }
    else{
      return 0;
    }
  })
  respondd.send({
      status: 200, 
      data:arr
  });
});

server.get("/movies/read/by-rating", (requestt, respondd) => {
  const arr=[...movies];
  arr.sort(function(a,b){
    if(a.rating>b.rating){
      return -1;
    }
    else if(a.rating>b.rating){
      return 1;
    }
    else{
      return 0;
    }
  })
  respondd.send({
      status: 200, 
      data:arr
  });
});

server.get("/movies/read/by-title", (requestt, respondd) => {
  const arr=[...movies];
  arr.sort(function(a,b){
    if(a.title<b.title){
      return -1;
    }
    else if(a.title>b.title){
      return 1;
    }
    else{
      return 0;
    }
  })
  respondd.send({
      status: 200, 
      data:arr
  });
});

server.get("/movies/read/id/:id",(requestt,respondd) => {
if(requestt.params.id>=0 && requestt.params.id<movies.length){
  message2={status:200, 
  data:movies[requestt.params.id]}

}
else {
  message2 = {
      status: 400,
      error: true,
      message: `The movie ${requestt.params.id} does not exist`
  }

}
respondd.send(message2);
})

server.get("/movies/add",(requestt,respondd) =>{
  const movie={
title:requestt.query.title,
year:requestt.query.year,
rating:requestt.query.rating};
if(movie.rating==undefined){
  movie.rating=4;
}
if((movie.title==undefined) || (isNaN(movie.year)) || (movie.year==undefined) || (movie.year.toString().length!==4)){
respondd.send({
  status:403, 
  error:true,
  message:'you cannot create a movie without providing a title and a year'
})
console.log(respondd.json)

}
else{
  movies.push(movie);
  respondd.send(movie);
  respondd.send({
    status:200,
    data:movies
  })
}
});