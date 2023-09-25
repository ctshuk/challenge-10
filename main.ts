// Whenever Game function is called (i.e. board is tilted left or button B is pressed), the following code will run.
function Game () {
    // Check value of variable Pattern and light up the RGB LEDs in the corresponding set of colours.
    if (Pattern == 0) {
        edubitRgbBit.setPixelColor(0, 0xff0000)
        edubitRgbBit.setPixelColor(1, 0x00ff00)
        edubitRgbBit.setPixelColor(2, 0x0000ff)
        edubitRgbBit.setPixelColor(3, 0xffff00)
    } else if (Pattern == 1) {
        edubitRgbBit.setPixelColor(0, 0xffff00)
        edubitRgbBit.setPixelColor(1, 0x0000ff)
        edubitRgbBit.setPixelColor(2, 0x00ff00)
        edubitRgbBit.setPixelColor(3, 0xff0000)
    } else if (Pattern == 2) {
        edubitRgbBit.setPixelColor(0, 0xff0000)
        edubitRgbBit.setPixelColor(1, 0xffff00)
        edubitRgbBit.setPixelColor(2, 0x00ff00)
        edubitRgbBit.setPixelColor(3, 0x0000ff)
    } else if (Pattern == 3) {
        edubitRgbBit.setPixelColor(0, 0x0000ff)
        edubitRgbBit.setPixelColor(1, 0x00ff00)
        edubitRgbBit.setPixelColor(2, 0xffff00)
        edubitRgbBit.setPixelColor(3, 0xff0000)
    } else if (Pattern == 4) {
        edubitRgbBit.setPixelColor(0, 0xff0000)
        edubitRgbBit.setPixelColor(1, 0x00ff00)
        edubitRgbBit.setPixelColor(2, 0x0000ff)
        edubitRgbBit.setPixelColor(3, 0xffff00)
    } else if (Pattern == 5) {
        edubitRgbBit.setPixelColor(0, 0xffff00)
        edubitRgbBit.setPixelColor(1, 0x00ff00)
        edubitRgbBit.setPixelColor(2, 0x0000ff)
        edubitRgbBit.setPixelColor(3, 0xff0000)
    } else if (Pattern == 6) {
        edubitRgbBit.setPixelColor(0, 0x0000ff)
        edubitRgbBit.setPixelColor(1, 0x00ff00)
        edubitRgbBit.setPixelColor(2, 0xff0000)
        edubitRgbBit.setPixelColor(3, 0xffff00)
    } else if (Pattern == 7) {
        edubitRgbBit.setPixelColor(0, 0x0000ff)
        edubitRgbBit.setPixelColor(1, 0xff0000)
        edubitRgbBit.setPixelColor(2, 0x00ff00)
        edubitRgbBit.setPixelColor(3, 0xffff00)
    } else {
        edubitRgbBit.setPixelColor(0, 0xffff00)
        edubitRgbBit.setPixelColor(1, 0xff0000)
        edubitRgbBit.setPixelColor(2, 0x00ff00)
        edubitRgbBit.setPixelColor(3, 0x0000ff)
    }
    // Wait (i.e. RGB LEDs stay lighted up) for the amount of time set (current value of variable Duration)
    basic.pause(Duration)
    // Turn off all RGB LEDs.
    edubitRgbBit.clear()
}
// When button A is pressed, change variable Score by 2 then show the current Score value on the LED matrix.
input.onButtonPressed(Button.A, function () {
    Score += 2
    basic.showNumber(Score)
})
// When EDU:BIT is tilted to the left, variable Pattern is set to a random number between 0 and 8. Game function is called.
input.onGesture(Gesture.TiltLeft, function () {
    Pattern = randint(0, 8)
    Game()
})
// When button B is pressed, Game function is called.
input.onButtonPressed(Button.B, function () {
    Game()
})
// On start, show a heart icon and set variable Score to 0.
let Duration = 0
let Pattern = 0
let Score = 0
basic.showIcon(IconNames.Heart)
Score = 0
basic.forever(function () {
    // Set the variable Duration to map potentiometer value from low 0 high 1023 to low 1000 (1 second) high 10000 (10 seconds). 
    // 
    // *Duration is the amount of time that the RGB LEDs stay lighted up before they are turned off.
    Duration = pins.map(
    edubitPotentioBit.readPotValue(),
    0,
    1023,
    1000,
    10000
    )
})
