const isEven = (number) =>{
    if (number % 2 == 0){
        return true;
    }else{
        return false;
    };
};
//console.log(isEven(4787));

// javaScript date object
let today = new Date();
let today1 = new Date('10/9/2025');
let today2 = new Date();
today2.setDate('25');
today2.setMonth('11');
//console.log(today, today1, today2);

// javaScript String methods
/**
 * array.split();
 * splits a string into a substring array and returns the newly created array
 */
const person = 'Isaac';
let letters = person.split('');
console.log(person,letters);

/**
 * string.charAt();
 * searches the string and returns the character searched 
 */
const artist = 'Gunna';
let letter = artist.charAt(2);
console.log(`${artist} , ${letter}`);

/**
 * string.concat();
 * joins together two separate strings
 */
const playMaker = 'Turbo the Great';
let playMaker1 = 'Wheezy Outta Here';
let playMaker2 = new String('Gunna Wunna');
let turboFolks= playMaker.concat(playMaker1).concat('Wunnna');
console.log(`${playMaker} , ${playMaker1} , ${playMaker2}`);
console.log(`${turboFolks}`);

/**
 * string.indexOf();
 * searches the string and returns the first position of the character searched
 */
const city = 'Nairobi';
let character = city.indexOf('i');
console.log(character);

/**
 * string.lastIndexOf();
 * searches the string and returns the last position of the character searched
 */
const kenyanCity = 'Nairobi';
let lastCharacter = kenyanCity.lastIndexOf('i');
console.log(lastCharacter);

/**
 * string.search();
 * searches for regular expressions in the given string
 * this method is case-sensitive, to remove this we use ignore flag /i
 * returns -1 if no regex found
 */
const sentence = 'javaScript is a scripting language and it Is fun.';
let search = sentence.search('is');
let searched = sentence.search('Is');
let searched1 = sentence.search(/Is/i);
let notSearched = sentence.search('JavaScript');
console.log(`${search}, ${searched}, ${searched1}, ${notSearched}`);

/**
 * string.match();
 * matches the string against a regex and returns the first match
 * we can use the global search modifier to get all the match elements
 */
const wordMatch = 'lifestyle';
let matchCorrect = wordMatch.match('life');
let matchNotCorrect = wordMatch.match(/Life/i);
let matchLetter = wordMatch.match(/[a-p]/);
let matchLetters = wordMatch.match(/[a-p]/g);
console.log(`${matchCorrect}, ${matchNotCorrect}, ${matchLetter}, ${matchLetters}`);

/**
 * string.replace();
 * searches a string with regex and replaces part the matched substring with a new substring
 * we can use global search modifier to replace all the match elements otherwise replaces only one match
 */
const regex = 'java is a scripting language.Learn java on MDN';
const replaceRegex = regex.replace(/java/g,'JavaScript');
const replaceRegex1 = regex.replace(/Java/gi, 'JavaScript');
console.log(`${replaceRegex}>> ${replaceRegex1}`);


