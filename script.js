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

/**
 * array.findIndex();
 * returns the index of the first element in an array 
 * that satisfies the condition in the provided function
 * if no condition satisfied it returns -1
 */
const allNums = [14,27,3,4,5,7,11,22];
let num = 2;
const isPrime = (randomValue) =>{
    while(num <= Math.sqrt(randomValue)){
        if(randomValue % num++ < 1){
            return false;
        }else{
            return true;
        };
    };
    return randomValue > 1;
};
console.log(allNums,allNums.findIndex(isPrime));

const squares = [225,81,144,121,];
const findSquare = squares.findIndex(x => x < 100)
console.log(squares,findSquare);

const smallNums = new Array(1,28,11,1212,123,9);
let bigNumber = (number) => number > 1000;
console.log(smallNums,smallNums.findIndex(bigNumber));

/**
 * array.sort();
 * arranges the array elements in ascending order
 */
const integers = [8,3,12,1,5,110,2];
let sortIntegers = integers.sort();
console.log(sortIntegers, sortIntegers[1]);

/**
 * array.find();
 * returns the first element in an array
 * that satisfies the conditions of the given function
 */
const bigIntegers = new Array(12,11,75,55,20,225,100);
let bigInt = bigIntegers.find(intValue => intValue > 50);
console.log(bigIntegers,bigInt);

/**
 * array.forEach();
 * iteiates through each element in an array once
 * more efficient than a for loop
 */
const students = ['Mary','John','Isaac','Omar'];
students.forEach(checkStudent = (individual) =>{
    //console.log(individual);
});

const fibonacci = new Array(0,10,15,20,25);
sum = 0;
fibonacci.forEach(getTotal = (val) =>{
    sum += val;
    console.log(sum);
});

/**
 * array.fill();
 * fills the elements of an array with the specified static values
 */
const countries = ['Kenya','Somalia','Ethiopia','Djibouti'];
let newCountries = ['Kenya','Somalia','Ethiopia','Djibouti'];
countries.fill('Italy');
newCountries.fill('Italy',1,3);
console.log(countries, newCountries);

/**
 * array.indexOf();
 * searches the position of an element in an array
 * it's case sensitive and if no element found returns -1
 */
const continents = ['Australia','New Zealand','Africa','New Zealand'];
let continent = continents.indexOf('New Zealand');
let continent1 = continents.indexOf('New Zealand',2);
let continent2 = continents.indexOf('South America');
console.log(continents,continent,continent1,continent2);

/**
 * array.lastIndexOf();
 * searches the last position of an element in an array
 * it's case sensitive and if no element found returns -1
 */
const weather = ['Sunny','Rainy','Cloudy','Rainy','Windy','Calm'];
let today = weather.lastIndexOf('Rainy');
let today1 = weather.lastIndexOf('Rainy',2);
let today2 = weather.lastIndexOf('Stormy');
console.log(weather,today,today1,today2);

/**
 * array.map();
 * calls the speciified function on every element and returns a new array
 */
const ages = [20,15,18,40];
let ageDouble = ages.map(age => age * 2);
console.log(ageDouble);

/**
 * array.join();
 * joins all the elements in an array using separators and returns a new sring
 */
const states = ['Arkansas','Ohio','Atlanta','New York'];
let allStates = states.join(', ');
console.log(allStates);