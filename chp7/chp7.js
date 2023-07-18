// Answer to Question #1
let fe = document.getElementsByTagName("nav")[0];
fe.firstElementChild.style.color = 'red';

// Answer to Question #2
//The view page sources does't show tbody,however the Inspect show the tbody.

// Answer to Question #3
let firstandlast = document.getElementsByTagName("nav")[0];
firstandlast.firstElementChild.style.color = 'darkgreen';
firstandlast.lastElementChild.style.color = 'darkgreen';

// Answer to Question #4
let liBackground = Array.from(document.getElementsByTagName("li"));
liBackground.forEach((element) => {
    element.style.background = 'cyan';
});

// Answer To question #5
// Answer d. (none of these)