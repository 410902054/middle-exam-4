let y0 = 2
let x0 = 2
for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= i; j++) {
        led.plot(x0, y0 + j)
        led.plot(0, 0)
        basic.pause(100)
    }
    basic.clearScreen()
}
basic.forever(function () {
	
})
