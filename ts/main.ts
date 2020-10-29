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

/**
 * Clears all errors in the validation summary
 */
function clearAllErrors() {
    let errSummary = $("validation-summary");
    errSummary.innerText = "";
}

function addVideoGame() {
    clearAllErrors();

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

/**
 * 
 * @param id getInputById is a shortcut for casting HTMLInputElement
 */
function getInputById(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}


// Validation Code
function allDataValid() {
    let isValid = true;

    let title = getInputById("title").value;
    if(title == ""){
        isValid = false;
        addErrorMessage("Title is required!");
    }

    let price = getInputById("price").value;
    let priceValue = parseFloat(price);
    if(price == "" || isNaN(priceValue)){
        isValid = false;
        addErrorMessage("Price is required and must be a number!");
    }

    let rating = (<HTMLOptionElement>$("rating")).value;
    if(rating == ""){
        isValid = false;
        addErrorMessage("You must choose a rating!");
    }

    let gamePlatform = (<HTMLOptionElement>$("platform")).value;
    if(gamePlatform == ""){
        isValid = false;
        addErrorMessage("You must choose a platform!");
    }

    return isValid;
}

function addErrorMessage(errMsg:string) {
    let errSummary = $("validation-summary");
    let errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
