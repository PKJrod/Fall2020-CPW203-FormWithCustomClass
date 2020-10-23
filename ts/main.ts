class VideoGame {
    // property name then declare data type.
    title:string;
    price:number;
    rating:string;
    platform:string;
    isDigitalOnly:boolean;
}
/* Test Code
let myGame = new VideoGame();
myGame.title = "Ori and the blind forest";
myGame.rating = "E";
myGame.platform = "Xbox one";
myGame.isDigitalOnly = true;
*/

window.onload = function() {
    let addBtn = 
        <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame() {
    
    if(allDataValid()) {
        let game = getVideoGame();
        displayGame(game);
    }
}

/**
 * 
 * @param id $ is short version of document.getElementById(id);
 */
function $(id:string) {
    return document.getElementById(id);
}

/**
 * Gets all game data from the form
 * and returns it in a videoGame object
 */
function getVideoGame():VideoGame {
    // TODO: Create game,  new is used to create an object 
    let game = new VideoGame();
    // TODO: populate with data from the form
    let inputTitle = 
        <HTMLInputElement>$("title");
    game.title = inputTitle.value;

    let priceInput =
        <HTMLInputElement>$("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = 
        <HTMLSelectElement>$("rating");
    game.rating = ratingInput.value;

    let platformInput =
        <HTMLSelectElement>$("platform");
    game.platform = platformInput.value;

    let digitalOnly = 
        <HTMLInputElement>$("online");
    // game.isDigitalOnly = digitalOnly.checked;
    if(digitalOnly.checked) {
        game.isDigitalOnly = true;
    }
    else{
        game.isDigitalOnly = false;
    }
    // TODO: return game

    return game;
}

function displayGame(myGame:VideoGame):void {
    // TODO: Display video game below the form
    let displayDiv = $("display");
    // will create an h2 in memeory with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    let notDigitalDisplay = "";
    if(myGame.isDigitalOnly){
        notDigitalDisplay = "This is a digital only game.";
    }
    else {
        notDigitalDisplay = "You can buy a physical copy at your local retailer!";
    }

    // Create paragraph with game details
    let gameInfo = document.createElement("p");
    /* JS version of adding innerText
    gameInfo.innerText = myGame.title + " has a rating of " + myGame.rating
                        + ". It costs " + myGame.price
                        + ". It is available on " + myGame.platform
                        + ". It is " + notDigitalDiaply + " digital only";
    */
    // interpolated version of adding innerText
    gameInfo.innerText = `${myGame.title} has rating of ` +
                        ` ${myGame.rating}. It costs $${myGame.price.toFixed(2)}. It is available on ${myGame.platform}.` +  
                        ` ${notDigitalDisplay}`;
    // Add <h2> in the <div id="display">
    displayDiv.appendChild(gameHeading);
    // Add <p> game info
    displayDiv.appendChild(gameInfo);
}


// Validation Code
function allDataValid() {
    return true;
}