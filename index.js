console.log("Linked!");

//1a

const title = document.getElementById("title");
console.log(title);

//1b

const content = document.getElementsByClassName("content");

console.log(content);

//1c

const list = Array.from(document.getElementsByTagName("li"));

//method 1: let nameList = list.map(item =>item.textContent); 

//console.log(nameList)

//method 2
console.log(list.map(item =>item.textContent));

// 1d


const highlight = document.querySelector(".highlight");

console.log(highlight);
//console.log(highlight.textContent)

//1e


const allHighlight = Array.from(document.querySelectorAll(".highlight"));

console.log(allHighlight.map(item =>item.textContent));

// Instructions:
// Select the first <li> element inside the <ul> with the id of "itemList".
// Use the parentNode property to access its parent.
// Log the parent element to the console.
// Expected Outcome:
// The console should display the entire <ul> element with the id of "itemList" and all of its <li> children.

// 2a 
// Using the queryselector, we're accessing the id itemlist and we're taking the first child from the itemlist.
// Use the parentNode with.... to print the itemlist

const fruitList = document.querySelector("#itemList > li:nth-child(1)").parentNode;
console.log(fruitList);


// Instructions:
// Select the <ul> element with the id of "itemList".
// Use the childNodes property to get all its child nodes.
// Log the child nodes to the console.
// Expected Outcome:
// The console should display a collection (NodeList) of child nodes of the <ul> element, which includes the <li> elements as well as any whitespace or line breaks.

// 2b
