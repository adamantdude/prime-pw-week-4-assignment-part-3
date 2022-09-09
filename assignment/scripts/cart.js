console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

var basket = [];
const maxItems = 5;

// I learned to prototype and build functions first before testing in code using C/C++ and Java
// I will stick to this workflow since it feels natural to me.

function addItem(item) {
    // if not full, !false = true
    if(!isFull()) {
        basket.push(item);
        return true;
    }
    return false;
}

function listItems() {
    // if empty, !0 = true, false otherwise
    if(!basket.length) return console.log('Empty basket!');
    for(const item of basket) {
        console.log(item);
    }
    return;
}

function empty() {
    basket = [];
    return;
}

function isFull() {
    if(basket.length < maxItems) return false;
    return true;
}

function removeItem(item) {
    // if the index of item is found in the array, delete it. otherwise, return null
    if(basket.indexOf(item) >= 0) return basket.splice(basket.indexOf(item), 1);
    return null;
}

// ---------- Debug and Testing Code ----------

// array with 10 items
let market = ['banana', 'kiwi', 'pomegranate', 'lemon', 'lime', 'potato', 'tomato', 'cilantro', 'green onions', 'cucumber'];
let i=0;

console.log('TESTING addItem() functon:');
// while we can keep adding items from the market
// works as a condition since addItem() returns true or false
while(addItem(market[i])) ++i;
// variable i is now equal to 5
console.log(basket);

console.log('TESTING listItems() function: ');
listItems();

console.log('TESTING empty() function: ');
empty();
console.log('Calling listItems() after empty(): ');
listItems();

console.log('Calling addItem() function for removeItem() testing: ');
while(addItem(market[i])) ++i;
// variable i is now equal to 10
console.log('Calling listItems() after second addItem() call: ');
listItems();

console.log('TESTING removeItem() function for "banana"; result should be null: ', removeItem('banana'));
console.log('basket array is: ', basket);
console.log('TESTING removeItem() function for "cilantro"; result should be removed item: ', removeItem('cilantro'));
console.log('basket array is: ', basket);
console.log('TESTING removeItem() function for index zero item, "potato"; result should be removed item: ', removeItem('potato'));
console.log('basket array is: ', basket);

// --- END DEBUG ---