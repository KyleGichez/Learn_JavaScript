// Construction of Arrays
const names = ['Aisha','Khalid','Amina','khadijah','Abass'];
console.log(names);

//Method2
const allNames = new Array();
allNames[0] = "Abdullahi";
allNames[1] = "Ismail";
allNames[2] = "Fatima";
console.log(allNames);

//Method3
const newNames = new Array('Mutakallim', 'Ghaib', 'Mudhakkar', 'Muwannath');
console.log(newNames);

//JavaScript Array Methods
/**
 * array.concat();
 * joins two diffrent arrays altogether
 */
const array1 = ['Wahid','Ithnan','Thalatha'];
const array2 = ['Arbaa', 'Khamsa', 'Sitaa'];
const array3 = ['Sabaa', 'Thamaniya', 'Tisaa'];
let result = array1.concat(array2);
let result2 = array1.concat(array2,array3);
let result3 = result2.concat('Ashara', 'Ishrun', 'Thalathun');
console.log(result, result2, result3);

/**
 * array.unshift();
 * adds one or more elements to an array(beginning)
 */
const numbers = ['Three','Four','Five'];
numbers.unshift('One','Two');
console.log(numbers);

/**
 * array.shift();
 * removes elements from the beginning of an array
 */
const numerals = ['One','Two','Three','Four','Five'];
numerals.shift();
console.log(numerals);

/**
 * array.push();
 * adds one or more elements to the end of an array
 */
const salahs = ['Fajr','Dhuhr','Asr'];
salahs.push('Maghrib','Isha');
console.log(salahs);

/**
 * array.pop();
 * removes and returns the last element in an array
 */
const prophets = ['Yunus','Ibraheem','Ismail','Abdi'];
prophets.pop();
console.log(prophets);

/**
 * array.slice();
 * extracts and returns a given part of the array
 */
const surahs = ['Fatihah','Baqarah','Imran','Nas','Maidah','Najm'];
let surah = surahs.slice(3,-1);
let surah2 = surahs.slice(2,5);
let surah3 = surahs.slice(3);
console.log(surah,surah2,surah3);

/**
 * array.splice();
 * adds or removes elements to and from an array
 * returns removed elements from that array
 * modifies that array
 */
const pillars = ['Shahada','Salat','Musiqi', 'Quran','Zakat'];
const notPillars = ['Quran','Hijabi','Zakat','Sawm','Shahada'];
pillars.splice(2,2,'Sawm','Hajj');
notPillars.splice(2,3);
console.log(pillars,notPillars);





