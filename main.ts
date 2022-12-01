let score = 0
let Burritocar: game.LedSprite = null
let Burrito_on = false
input.onButtonPressed(Button.A, function () {
    if (0 > 0) {
    	
    }
})
basic.forever(function () {
    score = 0
    Burritocar = game.createSprite(2, 4)
    Burrito_on = true
    while (Burrito_on == true) {
        basic.pause(100)
    }
    game.addScore(score)
    game.gameOver()
})
