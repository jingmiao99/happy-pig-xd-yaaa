namespace SpriteKind {
    export const $animal = SpriteKind.create()
    export const $unowned = SpriteKind.create()
    export const banana = SpriteKind.create()
    export const apple = SpriteKind.create()
    export const carrot = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.banana, function (sprite, otherSprite) {
    if (true) {
        info.changeScoreBy(1)
        mySprite5.setPosition(randint(10, scene.screenWidth() - 10), randint(10, scene.screenHeight() - 10))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(-1)
        sprite.x += 15
        game.setGameOverEffect(false, effects.splatter)
    }
})
let mySprite: Sprite = null
let mySprite5: Sprite = null
mySprite5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . 5 5 5 5 5 e e e e . 
    . . . . . 5 5 5 5 5 5 e e e e . 
    . . . . 5 5 5 5 5 5 5 e e e e . 
    . . . 5 5 5 5 5 5 5 5 e e e e . 
    . . . 5 5 5 5 5 5 5 5 e e e e . 
    . . . 5 5 5 5 5 5 5 5 . e e . . 
    . . 5 5 5 5 5 5 5 5 . . . . . . 
    . . . 5 5 5 5 5 5 . . . . . . . 
    . . . 5 5 5 5 5 5 . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    `, SpriteKind.banana)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . . . . . . . 
    . . . . . . . e . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.apple)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 7 7 7 . . . . 
    . . . . . . . . 7 7 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 7 7 . . 
    . . . . . . 2 4 4 4 7 7 7 7 . . 
    . . . . . 4 2 2 4 4 4 7 7 7 . . 
    . . . . 4 4 4 4 4 4 4 7 7 7 . . 
    . . . 2 4 4 4 4 4 4 4 7 7 . . . 
    . . . 2 2 4 4 4 4 4 4 . . . . . 
    . . 4 4 4 4 4 2 2 4 . . . . . . 
    . . 4 4 4 4 4 4 2 . . . . . . . 
    . . 4 2 2 4 4 . . . . . . . . . 
    . . 4 4 2 4 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.carrot)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 3 . . 3 . . 
    . . . . . . . . . . 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 f 3 . . 
    . . . . 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 . . . 3 3 . . . . 
    . . . . . 3 3 . . . 3 3 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
mySprite.sayText("hi:]", 5000, true)
info.setLife(6)
tiles.placeOnRandomTile(mySprite, sprites.castle.shrub)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . d d . . . . . . 
    . . . . . . . d . . . . . . . . 
    . . . . . . . d . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f 1 f f 1 f f . . . . . 
    . . . f f f 1 1 f f f f . . . . 
    . . . f f 1 f f f 1 f f f . . . 
    . . f f f 1 f f f 1 f f f . . . 
    . . f f f f f 1 f f f f f . . 4 
    4 4 f f f f f f f f f f f 4 4 4 
    . . f f f f 1 1 f f f f f . . . 
    . . f f f 1 f f 1 f f f f . . . 
    . . . f f 4 f f f f f f . . . . 
    . . . . . 4 . . . . 4 . . . . . 
    . . 4 4 4 4 . . . . 4 4 4 . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite2, sprites.dungeon.stairWest)
mySprite2.follow(mySprite, 10)
tiles.placeOnRandomTile(mySprite3, assets.tile`myTile1`)
