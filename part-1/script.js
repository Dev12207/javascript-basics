/**
 * Part 1: DOM Selection Basics
 *
 * In this file, you will practice selecting DOM elements
 * using various methods.
 *
 * Open index.html in your browser and check the console (F12)
 * to see the results of your code.
 */

// ============================================
// EXAMPLE: How to select and log elements
// ============================================

// Selecting by ID
const titleExample = document.getElementById('title');
console.log('Example - Title element:', titleExample);

// Selecting by query selector
const firstParagraph = document.querySelector('p');
console.log('Example - First paragraph text:', firstParagraph.textContent);


// ============================================
// EXERCISE 1: Basic Selection
// ============================================

// Task 1.1: Select the element with ID 'list-title' and log it
// Your code here:
const listTitle= document.getElementById('list-title');
console.log('List title element:', listTitle);


// Task 1.2: Select the first element with class 'box' and log it
// Your code here:
const firstBox=document.querySelector('.box');
console.log('First box element: ',firstBox);
// Task 1.3: Select ALL list items and log how many there are
// Hint: Use querySelectorAll and .length property
// Your code here:
const para=document.querySelector('p');
console.log('paragraph:',para)

// ============================================
// EXERCISE 2: Exploring Properties
// ============================================

// Task 2.1: Select the image (id="sample-image") and log its 'src' attribute
// Hint: Use getAttribute('src') or .src property
// Your code here:
const sampleImage=document.getElementById('sample-image');
console.log('Sample image src:',sampleImage);

// Task 2.2: Select the link (id="sample-link") and log its 'href' attribute
// Your code here:
const sampleLink=document.getElementById('sample-link');
console.log('Sample Link href:',sampleLink);

// Task 2.3: Select the shopping list (id="shopping-list") and log its innerHTML
// Your code here:
const shoppingList=document.getElementById('shopping-list');
console.log('shopping list inner HTML:',shoppingList.innerHTML)


// ============================================
// EXERCISE 3: Multiple Selections
// ============================================

// Task 3.1: Select all elements with class 'highlight'
// Your code here:
const highlightedElements=document.querySelectorAll('.highlight');
console.log('Highlighted elements:', highlightedElements);

// Task 3.2: Loop through all highlighted elements and log each text content
// Hint: Use forEach() method
// Your code here:
const highlighteds=document.querySelectorAll('.highlight');
highlighteds.forEach((element)=>{
    console.log('Highlighted text Content:',element.textContent);
})

// Task 3.3: Select all list items and log each item's text in uppercase
// Hint: Use .toUpperCase() method on textContent
// Your code here:
const listItems=document.querySelectorAll('li');
listItems.forEach((item)=>{
    console.log('list item in uppercase:',item.textContent.toUpperCase());
})


// ============================================
// BONUS CHALLENGE
// ============================================

// Challenge: Select the container div and count how many child elements it has
// Hint: Use .children.length
// Your code here:
const childLength=document.querySelector('.container');
console.log('number of child elements',childLength.children.length);
