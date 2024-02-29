const numbers = [1, 2, 3, 4, 5];

//map
function mapByFor(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2);
    }
    return newArray;
}
console.log(mapByFor(numbers));

//forEach
function forEachByFor(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i}: ${array[i]}`);
    }
}
forEachByFor(numbers);

// Find
function findByFor(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 3) {
            return array[i];
        }
    }
    return undefined;
}
console.log(findByFor(numbers));

// Filter
function filterByFor(array) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 3) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}
console.log(filterByFor(numbers)); 


// FindIndex
function findIndexByFor(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 3) {
            return i;
        }
    }
    return -1;
}
console.log(findIndexByFor(numbers));

// Reduce
function reduceByFor(array) {
    let value = 0;
    for (let i = 0; i < array.length; i++) {
        value += array[i];
    }
    return value;
}
console.log(reduceByFor(numbers));

const a=['a', 'b', 'c']
const b =[1, 2, 3]
console.log(b.concat(a));

const data = [1, -2, 3, 4, -5, 10]

const allIsEvenNumber = data.every(value => value % 2 == 0)
console.log(allIsEvenNumber);

const someIsEvenNumber = data.some(value => value % 2 == 0)
console.log(someIsEvenNumber);

const positiveNumber = data.filter(value => value > 0)
console.log(positiveNumber);

const firstPositiveNumber = data.find(value => value >0)
const firstPositiveIndex = data.findIndex(value => value >0)
if (firstPositiveNumber != undefined)
  console.log(`${firstPositiveIndex} ${firstPositiveNumber}`);
else
  console.log('No result');

const divisibleBy5 = data.forEach(value => {
    if (value % 5 == 0) console.log(value);
})

const data2 = [-1, 2, 3, 4, 2, 6]
const firstIndex = data2.indexOf(2);
const lastIndex = data2.lastIndexOf(2);
if (firstIndex != -1)
    console.log(firstIndex);
else console.log('No result');
if (lastIndex != -1)
    console.log(lastIndex);
else console.log('No result');

const data3 = ['A' , 'B', 'C'];
console.log(data3.join(', '));

const data4 = [2, -1, -8]
const absNumber = data4.map(value => {
    return Math.abs(value);
})
console.log(absNumber);

var reserve = function(x)
{
    var INT_MAX = 2147483647;
    var INT_MIN = - INT_MAX - 1;
    var value = x;
    var res = 0
    while(value != 0){
        res = res*10 + value%10;
        value = (value>0) ? Math.floor(value/10) : Math.ceil(value/10)
        if (res > INT_MAX || res < INT_MIN) return 0;
    }
    return res;
}

console.log(reserve(123));
console.log(reserve(-456));