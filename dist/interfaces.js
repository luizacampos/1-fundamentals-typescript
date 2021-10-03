"use strict";
var game1 = {
    title: "The last of us",
    description: "Best game",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, Merto");
    },
};
// TYPE GUARD
if (game1.getSimilars) {
    game1.getSimilars(game1.title);
}
var game2 = {
    title: "The Last os us - Left Behind",
    description: "You play as Ellie",
    genre: "Action",
    originalGame: game1,
    newContent: ["3 hours story", "new characters"],
};
// Implement a interface at a class
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
