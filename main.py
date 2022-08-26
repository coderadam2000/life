@namespace
class SpriteKind:
    Arrow = SpriteKind.create()

def on_up_pressed():
    global moving
    moving = True
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    global moving
    moving = True
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_left_released():
    global moving
    moving = False
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_right_pressed():
    global moving
    moving = True
    pause(100)
    moving = False
    pause(1000)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    global moving
    moving = True
    pause(100)
    moving = False
    pause(1000)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def Get_arrow_sprite(x1: number, y1: number, x2: number, y2: number):
    global dif_x, dif_y, the_arrow
    dif_x = x2 - x1
    dif_y = y2 - y1
    if dif_x < 0:
        if dif_y > 0:
            the_arrow = sprites.create(assets.image("""
                myImage0
            """), SpriteKind.Arrow)
        elif dif_y == 0:
            the_arrow = sprites.create(assets.image("""
                Arrow2
            """), SpriteKind.Arrow)
        else:
            the_arrow = sprites.create(assets.image("""
                myImage1
            """), SpriteKind.Arrow)
    elif dif_x == 0:
        if dif_y > 0:
            the_arrow = sprites.create(assets.image("""
                Arrow
            """), SpriteKind.Arrow)
        else:
            the_arrow = sprites.create(assets.image("""
                Arrow1
            """), SpriteKind.Arrow)
    else:
        pass
the_arrow: Sprite = None
dif_y = 0
dif_x = 0
moving = False
My_Player: Sprite = None
gender = game.ask_for_number("Press 0 for boy and 1 for girl", 1)
if gender == 1:
    My_Player = sprites.create(img("""
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
        """),
        SpriteKind.player)
elif gender == 0:
    My_Player = sprites.create(img("""
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
        """),
        SpriteKind.player)
scene.camera_follow_sprite(My_Player)
music.ba_ding.play()
My_Player.set_position(130, 150)
controller.move_sprite(My_Player, 50, 50)
My_Player.set_stay_in_screen(True)
tiles.set_current_tilemap(tilemap("""
    Starter tilemap
"""))
My_Player.say_text("I need to build my house")

def on_forever():
    while controller.up.is_pressed() or controller.down.is_pressed() or (controller.left.is_pressed() or controller.right.is_pressed()):
        music.set_volume(10000)
        music.set_tempo(200)
        music.footstep.play()
        pause(500)
        music.set_tempo(120)
    music.stop_all_sounds()
forever(on_forever)
