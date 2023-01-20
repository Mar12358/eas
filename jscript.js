console.log('hello world');

let userPrompt = 16;

document.addEventListener("DOMContentLoaded", function() {
let container = document.getElementById("container");

    makeGrid(userPrompt);

})
let opac = 0.1;
function makeGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        let innerDiv = document.createElement('div');
        innerDiv.className = "test";
        innerDiv.innerHTML = 0.1;
        container.appendChild(innerDiv);

        innerDiv.addEventListener("mouseover", () => {
            innerDiv.style.backgroundColor = 'black';
            innerDiv.style.opacity = parseFloat(innerDiv.innerHTML);
            innerDiv.innerHTML = (parseFloat(innerDiv.innerHTML)+0.1).toFixed(1);
            
            //console.log(parseFloat(innerDiv.innerHTML))
            console.log("Mouse entered the element" + innerDiv.innerHTML);
        });
    }
}

function showPrompt() {
    userPrompt = prompt("How many grids do you want to show");
    
    document
        .querySelectorAll(".test")
        .forEach((e) => e.parentNode.removeChild(e));
    container.style.gridTemplateColumns = 'repeat(' + userPrompt + ', 1fr)';//50px//repeat(userPrompt, 1fr);
    makeGrid(parseInt(userPrompt));
}
// window.onload = function() {
//     const element = document.getElementsByClassName("test");
    

//     element.addEventListener("mouseover", () => {
//       console.log("Mouse entered the element");
//     });

//     element.addEventListener("mouseout", () => {
//       console.log("Mouse left the element");
//     });
// }


// document.addEventListener("DOMContentLoaded", function() {
//     const container = document.getElementById("container");

//     for (let i = 0; i < (16 * 16); i++) {
//         let innerDiv = document.createElement('div');
//         innerDiv.className = "test";
//         innerDiv.innerHTML = i + 1;
//         container.appendChild(innerDiv);
//     }
// });


