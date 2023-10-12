
import {variables} from "./variables.js";
const  {body, burgerMenuButton, burgerMenu} = variables;


function burgerMenuFunc() {
    burgerMenu.classList.toggle("active");

    if (burgerMenu.classList.contains("active")) {
        burgerMenuButton.innerHTML = `<img src="Images/MenuClose.png" alt="Menu" loading="lazy">`;
        burgerMenu.classList.remove("no-display");
        body.style.height = "100vh";
        body.style.overflowY = "hidden";
    } else {
        burgerMenu.classList.add("no-display");
        burgerMenuButton.innerHTML = `<img src="Images/MenuBurger.png" alt="Menu" loading="lazy">`;
        body.style.overflowY = "visible";
    }
}
export {burgerMenuFunc}