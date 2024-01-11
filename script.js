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

/**
 * array.filter();
 * filters and extracts elements that pass the required conditions
 */
const marks = [40,30,79,44,88,96,100];
const pass = (value) =>{
   return value >= 50;
};
console.log(marks.filter(pass));

const towns = ['Nairobi','Nakuru','Mombasa','Kisumu','Eldoret','Nyeri'];
const checkCity = (town) =>{
    return town.charAt(1) === 'a' || town.charAt(0) === 'K';
};
console.log(towns.filter(checkCity));

/**
 * array.reverse();
 * reverses the original array elements from the last to the first element 
 */
const colors = new Array('Red','Blue','Green','Yellow','Black');
colors.reverse();
const nums = [1,2,3,4,5,6];
nums.reverse();
console.log(colors,nums);

/**
 * array.reduce();
 * runs a reducer callback function over all elements in the array
 * in ascending order and accumulates them into a single value
 */
const values = [0,1,2,3,4];
let total = values.reduce((value,currentValue) => value + currentValue);
console.log(total);

const newValues = [0,1,2,3,4];
let initialValue = 10;
let sum = newValues.reduce((value,currentValue) => value + currentValue, initialValue,);
console.log(sum);

/**
 * array.includes();
 * checks if the array contains the specified element
 * returns true if the element exists or false if element doesn't exist
 */
const codeLanguage = ['JavaScript','Java','Python','Dart'];
let isJavaScript = codeLanguage.includes('JavaScript');
console.log(isJavaScript);

const writeCode = ['Java','Python','Golang','javaScript'];
let isPython = writeCode.includes('Python', 2);
console.log(isPython);




