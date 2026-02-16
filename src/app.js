import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];



function getRandomItem(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error("Le paramètre doit être un tableau non vide.");
    }
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}
let Who = getRandomItem(who);
let Action = getRandomItem(action);
let What= getRandomItem(what);
let When= getRandomItem(when);


window.onload = function() {
  //write your code here
  document.getElementById('excuse').innerHTML = (Who + " " + Action + " " + What + " " + When);
};