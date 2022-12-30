
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
  else if(text.startsWith("remove")){
    remove(text);
  }
  else if(text.startsWith("edit")){
    edit(text);
  }
  
  else if(text.startsWith("check")){
    check(text);
  }
  else if(text.startsWith("uncheck")){
    uncheck(text);
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
    console.log(i+1 + ") " +checkk[i+1] + list[i]);
   
  }
}


const checkk=[];
for(var i=0;i<=list.length;i++){
  checkk[i+1]="[ ]";
}
/**
 *  check list
 *
 * @returns {void}
 */
function check(item){
  item=item.trim();
  item1=item.substring(6);
  if(item==="check"){
    console.log("Error please select an item to uncheck");
  }
  else{
  checkk[Number(item1)]= checkk[Number(item1)].replace("[ ]","[✓]");
}
}

  

/**
 *  uncheck list
 *
 * @returns {void}
 */
function uncheck(item){
  item=item.trim();
  item1=item.substring(8);
  if(item==="uncheck"){
    console.log("Error please select an item to uncheck");
  }
  else{
  checkk[Number(item1)]= checkk[Number(item1)].replace("[✓]","[ ]");
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
  if(item==="remove\n"){
  list.pop();
  console.log("We removed the last item for you");
  
  }
    
    else if(item.substring(7)-1 >= list.length){
      console.log("Error! This index doesn't exist");
    }
    
    else{
      list.splice(item.substring(7)-1,1); 
      console.log("We removed this item for you")}
  }
  
 

 /**
 *  edit
 * 
 * @returns {void}
 */
 function edit(item){
  item=item.trim();
  item1=item.substring(5).trim();
  item2=item.slice(5,7)-1;
  if(item==="edit"){
    console.log("ERROR!You didn't specify the item");
  
  }
  else if(isNaN(item2)){
    list.splice(list.length-1,1,item1);
    console.log("Last item is editted");
  }

  else {
    list.splice(item2,1,item1.substring(1).trim());
    console.log("You edited it");
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
  console.log('If you want to view the list just write list')
  console.log('If you want to add on list just write add and the item you want to add for example add juice')
  console.log('If you want to remove the last item just remove')
  console.log('If you want to remove the nth item in the list just write remove nth')
  console.log('example If you want to remove the 3rd item just write remove 3')
  console.log("If you want to replace the nth item write edit nth new item")
  console.log("If you want to replace the last item write edit new item")
  console.log("If you want to check an item write check and the number of item")
  console.log("If you want to uncheck an item write uncheck and the number of item")
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

const fs=require ('fs');
const { json, text } = require('stream/consumers');
const saveData=(list)=>{
  const finished =(error) =>{
    if(error){
      console.error(error);
      return;
    }
  }
  const jsonData=JSON.stringify(list);
  fs.writeFile('database.json',jsonData,finished);
}
saveData(list,"database.json")
// The following line starts the application
startApp("Rasha Badran")
