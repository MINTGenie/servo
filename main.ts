let angle = 10
basic.forever(function () {
    maqueen.servoRun(maqueen.Servos.S1, angle)
    basic.pause(1000)
    angle += 10
    if (angle > 400) {
        angle = 10
        basic.pause(1000)
    }
})
