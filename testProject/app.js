import {variables} from "./Modules/variables.js";
import {changeLang} from './Modules/changeLanguage.js';
import {burgerMenuFunc} from './Modules/burgerMenu.js';
import {changeImage} from './Modules/changePicture.js';

const  { changeLanguageButton, burgerMenuButton } = variables;

changeLanguageButton.addEventListener("click", changeLang);
burgerMenuButton.addEventListener("click", burgerMenuFunc);

changeImage()