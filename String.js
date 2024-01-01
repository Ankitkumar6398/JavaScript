const name = "hitesh"
const repoCount = 50;
// console.log(name + repoCount + " Value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // backtags
const  gameName = new String('Ankit-Singh')
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));
const newStr = gameName.substring(0,4);
console.log(newStr);

const anotherString = gameName.slice(-10,4)
console.log(anotherString);
const newStringOne = "    Ankit    "
console.log(newStringOne.trim());


const url = "https:// hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes("hitesh"));
console.log(gameName.split("-"));
