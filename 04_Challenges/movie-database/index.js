  const express = require('express')
  const server=express();
  const MongoClient    = require('mongodb').MongoClient;
  const bodyParser     = require('body-parser');
  const mongoose = require('mongoose');
  
  const port = 3000
  require('dotenv/config'); 
  const { Schema } = mongoose;
  //to remove the warning
  mongoose.set("strictQuery", true);
  

server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.listen(port, () => {
  console.log(`ok`);

});
server.delete("/", (requestt, respondd)=> {
  console.log("Got a DELETE request for /del_user");
  respondd.json('Hello DELETE');
});
server.get("/",(requestt,respondd)=>{
  respondd.json('Hello');
});
server.post("/",(requestt,respondd)=>{
  respondd.json('Hi');
});



server.get( '/test' ,(requestt,respondd) =>{
    respondd.json({status:200, message:"ok"});
});
server.get( '/time' ,(requestt,respondd) =>{
    const datee=new Date();
    const time=`${datee.getHours()}:${datee.getSeconds()}`;
    const message2={
      status:200,
      message:time};
      respondd.json(message2);
    
});
server.get('/hello/:id',(requestt,respondd)=>{
const message2=`Hello, ${requestt.params.id}`;
respondd.json({
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
respondd.json(message2);
});

const moviesSchema = new Schema(
  {
      title: {
          type: String,
          required: true,
      },
      year: {
          type: Number,
          required: true,
         
      },
      rating: {
          type: Number,
          default: 4,
          min: 0,
          max: 5,
      },
  },
  { versionKey: false }
);

const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
]

const moviess = mongoose.model('moviess', moviesSchema);

server.get("/movies/read", (requestt, respondd) => {
    respondd.json({
        status: 200, 
        movie: movies
    });
});

server.get("/movies/update", (requestt, respondd) => {

});

server.delete("/movies/delete", (requestt, respondd) => {

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
  respondd.json({
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
  respondd.json({
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
  respondd.json({
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
respondd.json(message2);
})

server.post("/movies/add",(requestt,respondd) =>{
  const movie={
title:requestt.query.title,
year:requestt.query.year,
rating:requestt.query.rating};
if(movie.rating==undefined){
  movie.rating=4;
}
if((movie.title==undefined) || (isNaN(movie.year)) || (movie.year==undefined) || (movie.year.toString().length!==4)){
  respondd.json({status:403, error:true, message:'you cannot create a movie without providing a title and a year'});
  console.log(respondd.json)

}
else{
  movies.push(movie);
  respondd.json(movie);
  respondd.json({
    status:200,
    data:movies
  })
  respondd.json({status: 200, message: 'ok' , data: movies})
}
});
server.delete("/movies/delete/:id",(requestt,respondd) =>{
const idd=parseInt(requestt.params.id);
if(idd>movies.length || idd<0){
  respondd.json({
    status:404,
     error:true,
    message:`the movie ${idd} does not exist`
  });
} 
else{
  movies.splice(idd,1);
  respondd.json(movies);
}
});
server.put('/movies/update/:id(\\d+)',(requestt,respondd)=>{
    var idd=requestt.params.id;
    var title=requestt.query.title;
    var year=requestt.query.year;
    var rating=requestt.query.rating;
  
  if(idd<movies.length){
    if(title===undefined || title===""){
      title=movies[idd].title;
    }
    if(year === undefined || year === "" || !(/^\d{4}$/).test(year)){
    year=movies[idd].year;
    }
    if (rating === undefined || rating === "") {
      rating = movies[idd].rating;  }
    movies[idd] = {title, year,rating};
    message2={
      data:movies
    }
    respondd.status(200).send(message2);
  }
  else{
    message2={
      error: true,
        message: `the movie ${idd} does not exist`,
    }
    respondd.status(404).send(message2);
  }
})





module.exports=server;