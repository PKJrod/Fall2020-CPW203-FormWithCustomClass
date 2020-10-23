var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
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
}
function allDataValid() {
    return true;
}
