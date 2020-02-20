/*Question 1:*/
const cat = {
"complain": function(){
    console.log("Meow!");
}
}

/*Question 2 */
document.querySelector("h3");

const heading = document.querySelector("h3");
console.dir(heading);

/*Question 3*/ 
heading.style.fontSize="2em";

/*Question 4   Why does the value say "null"? Shouldnt it say "h3"?*/ 
const headingByClass = document.querySelector (".heading");
console.dir (headingByClass);

/*Question 5*/ 
document.querySelectorAll ("p");

const paragraph = document.querySelectorAll ("p");
console.dir (paragraph);

/*Question 6*/
const division = document.querySelector ("div");

console.dir(division);

division.innerHTML = '<p>New paragraph<p>';

/*Question 7*/
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catArray () {
    for (let i = 0; i < cats.length; i++)
    console.log(cats[i].name);
};

catArray();

/*Question 8 */
for (let i= 0; i < cats.length; i++) {
    const name = "<h5>" + cats[i].name + "</h5>";
console.log (name);
}

/*Question 9 */ 

catArray("cats");

for (let i= 0; i < cats.length; i++) {
    const catages = cats[i].age;
console.dir (catages); }

/*Question 10*/

for (let i= 0; i < cats.length; i++) {
    let ageValue = "Age is not defined";

    if (cats[i].age) {
        ageValue = cats[i].age;
    }


console.dir(ageValue);} 

for (let i= 0; i < cats.length; i++) {
    const all = "<div>"+"<h5>" + cats[i].name + "</h5>"+"<p>"+ cats[i].age + "</p>"+"</div>";
console.dir (all);}