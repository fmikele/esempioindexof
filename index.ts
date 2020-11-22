// Import stylesheets
import "./style.css";

let arra = ["casa1", "casa2", "Aaaa", "bbbbb", "aabb"];

let arrayKey: string[] = arra.filter(y => y.indexOf("aa") !== -1);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");

//appDiv.innerHTML = `<h1> ${arrayKey.length}</h1>`;
appDiv.innerHTML = `<h1> ${arrayKey}</h1>`;
