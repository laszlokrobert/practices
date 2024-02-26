const myPersonalData = { age: 17, name: "Rob" };
console.log("The list of items in object: " + myPersonalData);

myPersonalData.name;
console.log("My name with dot: " + myPersonalData.name)

let myName = myPersonalData["name"];
console.log("My name: " + myName);

// Updating key value in object:
myPersonalData.age = 20;
let myNewAge2 = myPersonalData.age;
console.log("My new age: " + myNewAge2);
console.log();

let peopleObjectsInArray = [

    {
        name: "Jani",

        age: 18

    },

    {

        name: "Kati",

        age: 34

    }

];


console.log(peopleObjectsInArray);

let myFirstPersonName = peopleObjectsInArray[0].name;
console.log("Name of first person: " + myFirstPersonName);

// Updating object key in array:
peopleObjectsInArray[0].name = "Feri";
console.log(peopleObjectsInArray);
console.log("New name of first person: " + peopleObjectsInArray[0].name);

let myListArray = ["bajhbkéqwrglép", 20, "éghéghé"];
console.log(myListArray);

let myAge = 18;
let myNewAge = myAge;
myAge = 19;
console.log("New age not updated: " + myNewAge);

let myAge2 = 30;
let myNewAge3 = myAge2;
myAge2 = 33;
myNewAge3 = myAge2;
console.log("My new age updated: " + myNewAge3);


let myOldAge = 18; 
let myNewAge1 = myOldAge + 1;
console.log(myNewAge1);

let myShoppingList = ["alma", "barack", "citrom", "dió"];

let myFirstShoppingListItem = myShoppingList[0];
console.log("First item in shopping list array: " + myFirstShoppingListItem);

myShoppingList[0] = "körte";
let myNewFirstItem = myShoppingList[0];

console.log("New first item in shopping list: " + myNewFirstItem);

let theLengthOfMyShoppingList = myShoppingList.length;
console.log("Length of shopping list: " + theLengthOfMyShoppingList);

let myLastItem = myShoppingList.length-1;
console.log(myShoppingList);
console.log("Index of last item: " + myLastItem);

let myLastItem2 = myShoppingList[myShoppingList.length-1];
console.log(myShoppingList);
console.log("Name of last item: " + myLastItem2);

