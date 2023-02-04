"use strict";
var GameMode;
(function (GameMode) {
    GameMode[GameMode["Easy"] = 0] = "Easy";
    GameMode[GameMode["Medium"] = 1] = "Medium";
    GameMode[GameMode["Hard"] = 2] = "Hard";
    GameMode[GameMode["VeryEasy"] = 10] = "VeryEasy";
    GameMode["VeryMedium"] = "medium";
    GameMode[GameMode["VeryHard"] = 30] = "VeryHard";
})(GameMode || (GameMode = {}));
const select = GameMode.Easy;
console.log(`Enum ${select}`);
