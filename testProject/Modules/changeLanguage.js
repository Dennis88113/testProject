
import {variables} from './variables.js'
const  { changeLanguage, changeLanguageButton, changeLanguageCheck, body, burgerMenuButton, burgerMenu, groupPictures} = variables;


  function changeLang(){
    changeLanguageCheck.checked = !changeLanguageCheck.checked;
    if (changeLanguageCheck.checked) {
        changeLanguage.textContent = "EN";
    } else {
        changeLanguage.textContent = "RU";
    }
}
export {changeLang}