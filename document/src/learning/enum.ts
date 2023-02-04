enum GameMode {
    Easy,
    Medium,
    Hard,
    VeryEasy = 10,
    VeryMedium = "medium",
    VeryHard = 30,
}

const select : GameMode = GameMode.Easy
console.log(`Enum ${select}`)