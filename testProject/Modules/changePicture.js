
import {variables} from './variables.js'
const  {groupPictures} = variables;

function changeImage(){
    for (let i = 0; i < groupPictures.length; i++) {
        if (window.innerWidth > 900) {
            groupPictures[0].src = "Images/World.png ";
            groupPictures[1].src = "Images/Usd.png";
        } else {
            groupPictures[0].src = "Images/GroupH.png";
            groupPictures[1].src = "Images/UsdH.png";
        }
    }
}

export {changeImage}