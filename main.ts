input.onButtonPressed(Button.A, function () {
    if (rain == true) {
        basic.showString("Raincoat")
    } else {
        basic.showString("Shorts")
    }
})
let rain = false
rain = true
