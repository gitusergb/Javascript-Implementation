// Q: 1
// 1. Array Flattening
// Task:
// Write a function flattenArray(nestedArray, depth) that takes a nested array (e.g., [[1, 2], 3, [4, [5]]]) and returns a new array with all sub-arrays flattened up to the specified depth.
// If depth is not provided, the array should be completely flattened.
// Example:
// flattenArray([1, [2, [3, [4, 5]]]], 2);
// // Expected output: [1, 2, 3, [4, 5]]
// flattenArray([1, [2, [3, [4, 5]]]]);
// // Expected output: [1, 2, 3, 4, 5]
// Requirements:
// Do not use built-in methods like Array.prototype.flat() or similar (if that’s a requirement you want to impose).
// Handle edge cases (e.g., empty arrays, no depth, depth = 0, etc.).
// Ans:

function flattenArray(array,depth=Infinity) {
  if(depth===0)return array;
  return array.reduce((acc,val) => {
    if (Array.isArray(val)) {
      return acc.concat(flattenArray(val,depth-1));
    }
    return acc.concat(val);
  },[]);
}

// Example Usage
console.log(flattenArray([1, [2, [3, [4, 5]]]], 2)); 
// Output: [1, 2, 3, [4, 5]]

console.log(flattenArray([1, [2, [3, [4, 5]]]])); 
// Output: [1, 2, 3, 4, 5]

// 2. Object Flattening
// Task:
// Write a function flattenObject(nestedObject) that takes an object with nested properties and returns a new object with a single level of key-value pairs. Nested keys should use dot notation (e.g., "user.info.name").
// Example:
// const input = {
//   user: {
//     info: {
//       name: "Alice",
//       age: 25
//     },
//     preferences: {
//       theme: "dark",
//       notifications: true
//     }
//   },
//   status: "active"
// };

// flattenObject(input);
/*
Expected output:
{
  "user.info.name": "Alice",
  "user.info.age": 25,
  "user.preferences.theme": "dark",
  "user.preferences.notifications": true,
  "status": "active"
}
*/
// Requirements:

// Recursively traverse nested objects.
// Return a new object with flattened keys.

//////////////////

function flattenObject(obj, parentKey = '') {
  const result = {};

  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(result, flattenObject(obj[key], newKey));
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

// Example Usage
const input = {
  user: {
    info: {
      name: "Alice",
      age: 25,
    },
    preferences: {
      theme: "dark",
      notifications: true,
    },
  },
  status: "active",
};

const output = flattenObject(input);
console.log(output);

// {
//   "user.info.name": "Alice",
//   "user.info.age": 25,
//   "user.preferences.theme": "dark",
//   "user.preferences.notifications": true,
//   "status": "active"
// }

// Q: 2
// 1. Event Delegation
// Task:
// Create a simple interactive web page (or a code snippet) that dynamically adds new list items to an unordered list (<ul>). Use event delegation to handle clicks on any list item by attaching a single event listener to the parent <ul> element.
// Steps:
// Create a <ul> element in the DOM.
// Attach one event listener to the <ul> that listens for click events on its children.
// Dynamically add <li> elements (e.g., via a button click).
// When an <li> is clicked, log the item’s text or perform another action (e.g., highlight, remove, etc.).
// Requirements:
// Only one event listener is allowed (on the parent container).
// No individual event listeners on each <li>.
// Demonstrate that newly added <li> elements are automatically handled by the existing event listener.
// 2. Event Bubbling
// Task:
// Build a nested DOM structure—such as a <div> containing a <section> containing a <button>—and attach click event listeners at each level. Log different messages from each listener to demonstrate how the event bubbles up from the deepest element to the outermost element.
// Example:
// <div id="outer">
//   <section id="middle">
//     <button id="inner">Click me</button>
//   </section>
// </div>
// Steps:

// Attach click event listeners to #outer, #middle, and #inner.
// Inside each listener, console.log a message indicating which element fired and the current event phase if needed.
// Click the button and observe the order of logs, illustrating the bubbling process.
// Requirements:
// Use standard DOM event listeners (e.g., element.addEventListener("click", ...)).
// Demonstrate event bubbling order clearly.

// Q: 3
// Array and Object Manipulation
// Task:
// Suppose you have an array of user objects, each with the structure { id, name, age, city }. Write the following functions:

// filterAdults(users): Returns an array of users whose age is 18 or above.
// mapUserNames(users): Returns an array of names extracted from the user objects.
// groupUsersByCity(users): Returns an object where each key is a city, and its value is an array of users from that city.
// Example:

// const users = [
//   { id: 1, name: "Alice", age: 17, city: "New York" },
//   { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
//   { id: 3, name: "Charlie", age: 30, city: "New York" },
//   { id: 4, name: "Diana", age: 22, city: "Chicago" }
// ];

// // filterAdults(users) => [{ id: 2, ... }, { id: 3, ... }, { id: 4, ... }]
// // mapUserNames(users) => ["Alice", "Bob", "Charlie", "Diana"]
// // groupUsersByCity(users) => {
// //   "New York": [{ id: 1, ... }, { id: 3, ... }],
// //   "Los Angeles": [{ id: 2, ... }],
// //   "Chicago": [{ id: 4, ... }]
// // }
// Requirements:

// Each function should be pure (i.e., should not mutate the original array).
// Handle edge cases (e.g., empty arrays).
const users = [
    { id: 1, name: "Alice", age: 17, city: "New York" },
    { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 30, city: "New York" },
    { id: 4, name: "Diana", age: 22, city: "Chicago" }
  ];
  
  // 1. Filter users whose age is 18 or above
  function filterAdults(users) {
    return users.filter(user => user.age >= 18);
  }
  
  // 2. Map user objects to their names
  function mapUserNames(users) {
    return users.map(user => user.name);
  }
  
  // 3. Group users by city
  function groupByCity(users) {
    return users.reduce((grouped, user) => {
      if (!grouped[user.city]) {
        grouped[user.city] = [];
      }
      grouped[user.city].push(user);
      return grouped;
    }, {});
  }
  
  // Example Usage
  console.log("Filter Adults:", filterAdults(users));
  console.log("Map User Names:", mapUserNames(users));
  console.log("Group Users by City:", groupByCity(users));

//   Filter Adults: [
//     { id: 2, name: 'Bob', age: 25, city: 'Los Angeles' },
//     { id: 3, name: 'Charlie', age: 30, city: 'New York' },
//     { id: 4, name: 'Diana', age: 22, city: 'Chicago' }
//   ]
//   Map User Names: [ 'Alice', 'Bob', 'Charlie', 'Diana' ]
//   Group Users by City: {
//     'New York': [
//       { id: 1, name: 'Alice', age: 17, city: 'New York' },
//       { id: 3, name: 'Charlie', age: 30, city: 'New York' }
//     ],
//     'Los Angeles': [ { id: 2, name: 'Bob', age: 25, city: 'Los Angeles' } ],
//     Chicago: [ { id: 4, name: 'Diana', age: 22, city: 'Chicago' } ]
//   }