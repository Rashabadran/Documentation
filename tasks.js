
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text === 'hello\n' || text.startsWith("hello") ){
    hello(text);
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text.startsWith("list")){
    tasknum(list);
  }
  else if(text.startsWith("add")){
    addlist(text);
  }
  else if(text.startsWith("remove")){
    remove(text);
  }

  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}

var list=["apple", "banana","potato","strawberry"];

/**
 *  list
 *
 * @returns {void}
 */
function tasknum(list){
  for(var i=0; i<list.length;i++){
    if(list[i]=="apple" || list[i]=="banana" || list[i]=="potato" || list[i]=="strawberry" ){
      console.log(i + ") " + " [✓] " + list[i]);
    }
    else{
    console.log(i + ") " + " [] " + list[i]);
    }
  }
}
/**
 *  add list
 *
 * @returns {void}
 */
function addlist(item){
  item=item.trim();
  item1=item.substring(4).trim();
  if(item1!=''){
    list.push(item1);
  console.log(item1 + " is added successfully!");
  }
  else{
    console.log("Error! Nothing to add");
  }
  
  }

  /**
 *  remove
 *
 * @returns {void}
 */
function remove(item){
  item=item.trim();
  
   if(item==="remove 1"){
    list.shift();
    console.log(list);
  }
  
   else if(item==="remove"){
    list.pop();
    console.log(list);
  }
  else if(item==="remove 2"){
    list.splice(1,1);
    console.log(list)
  }
  
  }





/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  text=text.replace("\n","")
  text=text.trim(" ")
  console.log(text+"!")
}
/**
 * help the user
 *
 * @returns {void}
 */
function help(){
  console.log('Helping you!')
  console.log('The app can greet the one you want just write hello and the name you want to be greeted')
  console.log('If you want to exit just write exit or quit')
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Rasha Badran")
