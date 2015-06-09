var separator = function () {
    console.log('-----------------------');
}

/* Problem 1. Make person
Write a function for creating persons.
Each person must have firstname, lastname, age and gender (true is female, false is male)
Generate an array with ten person with different names, ages and genders
*/

function Person(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = !gender ? 'male' : 'female';
}

var people = [
    new Person('Wayne', 'Rooney', 29, false),
    new Person('Ryan', 'Giggs', 16, false),
    new Person('Paul', 'Scholes', 39, false),
    new Person('Michael', 'Carrick', 32, false),
    new Person('Ander', 'Herrera', 25, false),
    new Person('Pamela', 'Andersen', 59, true),
    new Person('Minka', 'Svirkata', 49, true),
    new Person('Penka', 'Gocheva', 69, true),
    new Person('Tsonka', 'Grozeva', 17, true),
    new Person('Marcheto', 'Mihova', 28, true),
];

people.forEach(function (item, index) {
    console.log('Index' + index + ' ' + JSON.stringify(item));
});

separator();

/* Problem 2. People of age
Write a function that checks if an array of person contains only people of age (with age 18 or greater)
Use only array methods and no regular loops (for, while)
*/

var isAllAdult = people.every(function (item) {

    return item.age >= 18;
});

console.log('Is everyone over 18 years old?: ' + isAllAdult);

separator();

/* Problem 3. Underage people
Write a function that prints all underaged persons of an array of person
Use Array#filter and Array#forEach
Use only array methods and no regular loops (for, while)
*/

var allUnderage = people.filter(function (item) {

    return item.age < 18;
});

allUnderage.forEach(function (item, index) {
    console.log('Index' + index + ' ' + JSON.stringify(item));
});

separator();

/* Problem 4. Average age of females
Write a function that calculates the average age of all females, extracted from an array of persons
Use Array#filter
Use only array methods and no regular loops (for, while)
*/

var women = people.filter(function (item) {
    if (item.gender == 'female') {
        return item.age;
    }
});

var sum = women.reduce(function (sum, person) { return sum + person.age; }, 0),
    avg = sum / women.length;

women.forEach(function (item, index) {
    console.log('Index' + index + ' ' + JSON.stringify(item));
});

console.log('Average age: ' + avg);

separator();

/*Problem 5. Youngest person
Write a function that finds the youngest male person in a given array of people and prints his full name
Use only array methods and no regular loops (for, while)
Use Array#find
*/

if (!Array.prototype.find) {
    Array.prototype.find = function (callback) {
        var i, len = this.length;
        for (i = 0; i < len; i += 1) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
    }
}

var youngestMan = people.sort(function (a, b) { return a.age - b.age; })
        .find(function (person) { return !person.isFemale; });

console.log('The youngest male is: ' + youngestMan.firstName + ' ' + youngestMan.lastName);

separator();

/* Problem 6. Group people
Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
Use Array#reduce
Use only array methods and no regular loops (for, while)
*/

var sortedPeople = people.sort(function (p1, p2) {
    return p1.firstName > p2.firstName;
});

var groups = sortedPeople.reduce(function (obj, item) {

    if (obj[item.firstName[0]]) {
        obj[item.firstName[0]].push(item);
    } else {
        obj[item.firstName[0]] = [item];
    }
    return obj;
}, {});

console.log(JSON.stringify(groups));