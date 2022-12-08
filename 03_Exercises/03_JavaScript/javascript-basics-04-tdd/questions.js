const stringSize = (text) => {
    text='This text has a certain number of characters';
    const result =  text.length;
    return result;
   
    
}
const replaceCharacterE = (text) => {
text='This text has a certain number of characters'
const result =text.replace("e", " ")
return result;
}
const concatString = (text1, text2) => {
    text1='el Javascript shi '
    text2='ra2e3'
    const result =text1.concat(text2);
    return result
}
const showChar5 = (text) => {
    text='TDD kicks ass'
    const result = text.charAt(4)
    return result
}
const showChar9 = (text) => {
    text='But it is really annoying to write'
    const result = text.slice(0, 9);
    return result

}
const toCapitals = (text) => {
    text='Another useful function'
    const result = text.toUpperCase();
    return result
    
}
const toLowerCase = (text) => {
    text='This is a sentence!'
    const result = text.toLowerCase();
    return result
    
}
const removeSpaces = (text) => {
    text=' Rome wasn\'t built in a day '
    const result = text.trim();
    return result
}
const IsString = (text) => {
    text='Is this a string?'
    if (typeof text === 'string'){
        return true
    }
    else{
        return false
    }
}

const getExtension = (text) => {
    text='images/photo01.jpg'
    const result = text.split('.').pop();
    return result;
}
const countSpaces = (text) => {
    text='Sire open we have a big one!'
    const result = text.split(' ').length - 1;
    return result
}
const InverseString = (text) => {
    text='Après demain, à partir d\'aujourd\'hui?'
  
        let result = "";
    for (let i = text.length - 1; i >= 0; i--) {
       result += text[i];
    }

    return result;
}



const power = (x, y) => {

const result=Math.pow(x,y)
return result
}


const absoluteValue = (num) => {
    const result=Math.abs(num)
    return result
}
const absoluteValueArray = (array) => {
    
 
    array = [-5,-50,-25,-568];
    return array.map(Math.abs);
  
    
   

}
const circleSurface = (radius) => {
     radius=5
    result= Math.PI * radius * radius
    return Math.round(result)
    

}
const hypothenuse = (ab, ac) => {
result=Math.hypot(ab,ac)
return result
}
const BMI = (weight, height) => {
    result = (weight) / (height * height)
    var roun=parseFloat(result).toFixed(2);
    
    return parseFloat(roun) 
}

const createLanguagesArray = () => {
    const languages = ["Html", "CSS", "Java", "PHP"];
    return languages;
}

const createNumbersArray = () => {
    const numbers = [0, 1, 2, 3, 4, 5];
    return numbers;
}

const replaceElement = (languages) => {
    
  languages[2] = "Javascript";
  return languages;
}

const addElement = (languages) => {
   languages.push("Ruby", "Python");
    
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2, -1);
    return numbers;
}

const removeFirst = (languages) => {
languages.shift()
return languages
}

const removeLast = (languages) => {
    languages.pop()
    return languages
}

const convertStrToArr = (social_arr) => {
    const socialNetworksString = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
    const soc = socialNetworksString.split(",");
    return soc;
}

const convertArrToStr = (languages) => {
    const languagesString = ['CSS', 'Javascript', 'PHP', 'Ruby']
    const str = languagesString.join();
    return str;
}

const sortArr = (social_arr) => {
    social_arr.sort();
    return social_arr;
}

const invertArr = (social_arr) => {
    social_arr.reverse();
    return social_arr;
}