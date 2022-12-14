namespace SpriteKind {
    export const Arrow = SpriteKind.create()
    export const floor = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    moving = true
})
function Build_house () {
    _1st_floor_options = [img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ..4....4.4.....4..4..4444.4444..
        ..4......4.....4.....4..4.4..4..
        ..4.......4...4......4..4.4444..
        ..4....4..4...4...4..4..4....4..
        ..4....4...4.4....4..4..4....4..
        ..4444.4....4.....4..4..4.4444..
        ................................
        ................................
        ....4444........................
        ....4..4.4444..4444.44444.......
        ....4....4..4..4..4.4.4.4.......
        ....4....4..4..4..4.4.4.4.......
        ....4....4..4..4..4.4.4.4.......
        ....4....4444..4444.4.4.4.......
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ...................4............
        ..4..4..4...4......4............
        ..4.4......444.444.4...444.444..
        ..44....4...4..4...444.4.4.4.4..
        ..4.4...4...4..4...4.4.444.4.4..
        ..4..4..4...4..4...4.4.4...4.4..
        ..4...4.4...44.444.4.4.444.4.4..
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, img`
        ................................
        ................................
        ................................
        ....4444........................
        ....4....................444....
        ....4.....44444....44444.4.4....
        ....4.44..4..4.4...4.4.4.444....
        ....4..4..4..4..4..4.4.4.4......
        ....4444..4444...4.4.4.4.444....
        ................................
        ......444.......................
        ......4.4.4444.4444..44444......
        ......4...4..4.4..4..4.4.4......
        ......4...4..4.4..4..4.4.4......
        ......4...4444.4444..4.4.4......
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `]
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    moving = true
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    moving = false
})
function play () {
    music.baDing.play()
    controller.moveSprite(My_Player, 50, 50)
    My_Player.setStayInScreen(true)
    the_arrow = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Arrow)
    pause(100)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    moving = true
    pause(100)
    moving = false
    pause(1000)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    moving = true
    pause(100)
    moving = false
    pause(1000)
})
function Get_arrow_sprite (x1: number, y1: number, x2: number, y2: number, Arrow_length: number) {
    while (true) {
        the_arrow.setPosition(x1, y1)
        dif_x = x2 - x1
        dif_y = y2 - y1
        if (Math.abs(dif_x - 0) < 2) {
            if (dif_y < 0) {
                the_arrow.setImage(assets.image`Arrow`)
                the_arrow.y += -1 * Arrow_length
            } else {
                the_arrow.setImage(assets.image`Arrow1`)
                the_arrow.y += 1 * Arrow_length
            }
        } else if (dif_x < 0) {
            if (Math.abs(dif_y - 0) < 2) {
                the_arrow.setImage(assets.image`Arrow2`)
                the_arrow.x += -1 * Arrow_length
            } else if (dif_y < 0) {
                the_arrow.setImage(assets.image`myImage0`)
                the_arrow.x += Math.sqrt(2) * -1 * Arrow_length
                the_arrow.y += Math.sqrt(2) * -1 * Arrow_length
            } else {
                the_arrow.setImage(assets.image`myImage1`)
                the_arrow.x += Math.sqrt(2) * -1 * Arrow_length
                the_arrow.y += Math.sqrt(2) * Arrow_length
            }
        } else {
            if (Math.abs(dif_y - 0) < 2) {
                the_arrow.setImage(assets.image`Arrow0`)
                the_arrow.x += 1 * Arrow_length
            } else if (dif_y < 0) {
                the_arrow.setImage(assets.image`myImage`)
                the_arrow.x += Math.sqrt(2) * Arrow_length
                the_arrow.y += Math.sqrt(2) * -1 * Arrow_length
            } else {
                the_arrow.setImage(assets.image`myImage2`)
                the_arrow.x += Math.sqrt(2) * Arrow_length
                the_arrow.y += Math.sqrt(2 * Arrow_length)
            }
        }
        pause(100)
    }
}
let dif_y = 0
let dif_x = 0
let the_arrow: Sprite = null
let _1st_floor_options: Image[] = []
let moving = false
let My_Player: Sprite = null
game.splash("Press A to start")
let gender = game.askForNumber("Press 0 for boy and 1 for girl", 1)
if (gender == 1) {
    My_Player = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
} else if (gender == 0) {
    My_Player = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Player)
}
scene.cameraFollowSprite(My_Player)
tiles.setCurrentTilemap(tilemap`Starter tilemap`)
tiles.placeOnTile(My_Player, tiles.getTileLocation(8, 8))
play()
forever(function () {
    while (controller.up.isPressed() || controller.down.isPressed() || (controller.left.isPressed() || controller.right.isPressed())) {
        music.setVolume(10000)
        music.setTempo(200)
        music.footstep.play()
        pause(500)
        music.setTempo(120)
    }
    music.stopAllSounds()
})
