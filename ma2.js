/*Question 1 */

const myFunctionExpression = function(){
    console.log ("Line");
};

myFunctionExpression();

/*Question 2 */
const btn = document.querySelector(".btn");

function respondToClick() {
    console.log('The button was clicked');
}

/*Question 3 */


const firstName = document.querySelector("#firstName");

function callAfterAKeyIsPressed() {
    console.log("A key was pressed");
};

firstName.addEventListener("keydown", callAfterAKeyIsPressed);

/*Question 4*/
/*
const dataAnimal = document.querySelector(".dog");

function callOnHover(event){
    console.log(event);
    console.log("The cursor moved over the button");

};
dataAnimal.addEventListener("mouseover",callOnHover);

*/

/* Question 7 */
const animal = "cow";


switch(animal) {
    case "cat":
    console.log ("Meow");
    break;

    case "cow":
        console.log ("Moo");
        break;

    case "bird":
        console.log ("Tweet");
        break;
    
    default:
        console.log ("Harrumph");
}

/*Question 8*/
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(shep) {
    console.log(shep);
});

/*Question 9 */
function logTime(){
    console.log("Hello");

    if (counter ===5) {
        clearInterval(interValId);
    }
    counter++;
}
let counter = 0;

const interValId = setInterval(logTime, 500);

/*Question 10*/
const container = document.querySelector(".container");

function updateDiv(){
    container.innerHTML = "Text updated"
}

setTimeout(updateDiv, 2000);