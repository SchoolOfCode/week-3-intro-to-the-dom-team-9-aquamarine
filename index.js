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

//1 f



