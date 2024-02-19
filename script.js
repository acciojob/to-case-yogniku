function toCase(text) {
  // write your code here
	if (!text) return '-'; // Handle empty strings
    
    const lowerCase = str.toLowerCase();
    const upperCase = str.toUpperCase();

    return `${lowerCase}-${upperCase}`;
}
console.log(toCase('Mthatha'));     
console.log(toCase('HelloWorld'));   
console.log(toCase('OpenAI'));       
console.log(toCase(''));             
console.log(toCase('My Name'));
// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
