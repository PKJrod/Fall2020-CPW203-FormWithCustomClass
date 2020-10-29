var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function clearAllErrors() {
    var errSummary = $("validation-summary");
    errSummary.innerText = "";
}
function addVideoGame() {
    clearAllErrors();
    if (allDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function $(id) {
    return document.getElementById(id);
}
function getVideoGame() {
    var game = new VideoGame();
    var inputTitle = $("title");
    game.title = inputTitle.value;
    var priceInput = $("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = $("rating");
    game.rating = ratingInput.value;
    var platformInput = $("platform");
    game.platform = platformInput.value;
    var digitalOnly = $("online");
    if (digitalOnly.checked) {
        game.isDigitalOnly = true;
    }
    else {
        game.isDigitalOnly = false;
    }
    return game;
}
function displayGame(myGame) {
    var displayDiv = $("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var notDigitalDisplay = "";
    if (myGame.isDigitalOnly) {
        notDigitalDisplay = "This is a digital only game.";
    }
    else {
        notDigitalDisplay = "You can buy a physical copy at your local retailer!";
    }
    var gameInfo = document.createElement("p");
    gameInfo.innerText = myGame.title + " has rating of " +
        (" " + myGame.rating + ". It costs $" + myGame.price.toFixed(2) + ". It is available on " + myGame.platform + ".") +
        (" " + notDigitalDisplay);
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function getInputById(id) {
    return document.getElementById(id);
}
function allDataValid() {
    var isValid = true;
    var title = getInputById("title").value;
    if (title == "") {
        isValid = false;
        addErrorMessage("Title is required!");
    }
    var price = getInputById("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue)) {
        isValid = false;
        addErrorMessage("Price is required and must be a number!");
    }
    var rating = $("rating").value;
    if (rating == "") {
        isValid = false;
        addErrorMessage("You must choose a rating!");
    }
    var gamePlatform = $("platform").value;
    if (gamePlatform == "") {
        isValid = false;
        addErrorMessage("You must choose a platform!");
    }
    return isValid;
}
function addErrorMessage(errMsg) {
    var errSummary = $("validation-summary");
    var errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
