enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Runleft,
    Runright,
    Jumpleft,
    Jumpright,
    Idleleft,
    Idleright,
    Crouchleft,
    Crouchright
}
namespace SpriteKind {
    export const Potato = SpriteKind.create()
    export const Pumpkin = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const Flag = SpriteKind.create()
    export const Mushroom = SpriteKind.create()
    export const pumpkins = SpriteKind.create()
}
function initHeroAnimations () {
    HeroRun()
    HeroIdle()
    HeroCrouch()
    HeroJump()
}
function giveIntroduction () {
    game.setDialogFrame(img`
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 
        2 1 1 2 2 2 2 2 2 2 2 2 1 1 2 
        2 1 2 2 1 1 1 1 1 1 1 2 2 1 2 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 
        2 1 2 2 1 1 1 1 1 1 1 2 2 1 2 
        2 1 1 2 2 2 2 2 2 2 2 2 1 1 2 
        2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        `)
    game.setDialogCursor(assets.tile`myTile6`)
    showIntroduction("Move with the left and right buttons.")
    showIntroduction("Jump with the up or A button.")
    showIntroduction("Double jump by pressing jump again.")
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    试图跳跃()
})
function 试图跳跃 () {
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        hero.vy = -4 * 单位高度
    } else if (可以二次跳跃) {
        二次跳跃速度 = -3 * 单位高度
        if (hero.vy >= -40) {
            二次跳跃速度 = -3 * 单位高度
            hero.startEffect(effects.trail, 500)
            scene.cameraShake(2, 250)
        }
        hero.vy = -4 * 单位高度
        可以二次跳跃 = false
    }
}
function initPumpkinAnimations () {
	
}
function initAnimations () {
    initHeroAnimations()
    initCoinAnimations()
    initPumpkinAnimations()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    试图跳跃()
})
function 生成游戏对象 () {
    for (let 值 of tiles.getTilesByType(assets.tile`myTile3`)) {
        mushrooms = sprites.create(assets.tile`myTile3`, SpriteKind.Mushroom)
        animation.runImageAnimation(
        mushrooms,
        [img`
            . . . . . 4 4 4 4 4 4 . . . . . 
            . . . . 4 4 4 4 4 4 4 4 . . . . 
            . . . 4 4 4 4 4 4 4 4 4 4 . . . 
            . . 4 f f 4 4 4 4 4 4 f f 4 . . 
            . 4 4 4 d f 4 4 4 4 f d 4 4 4 . 
            . 4 4 4 d f f f f f f d 4 4 4 . 
            4 4 4 4 d f d 4 4 d f d 4 4 4 4 
            4 4 4 4 d d d 4 4 d d d 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            . 4 4 4 4 d d d d d d 4 4 4 4 . 
            . . . . d d d d d d d d . . . . 
            . . . . d d d d d d d d . . . . 
            . . f f d d d d d d d d . . . . 
            . f f f f f d d d d d f f . . . 
            . f f f f f f d d d f f f . . . 
            . . f f f f f . . f f f . . . . 
            `,img`
            . . . . . 4 4 4 4 4 4 . . . . . 
            . . . . 4 4 4 4 4 4 4 4 . . . . 
            . . . 4 4 4 4 4 4 4 4 4 4 . . . 
            . . 4 f f 4 4 4 4 4 4 f f 4 . . 
            . 4 4 4 d f 4 4 4 4 f d 4 4 4 . 
            . 4 4 4 d f f f f f f d 4 4 4 . 
            4 4 4 4 d f d 4 4 d f d 4 4 4 4 
            4 4 4 4 d d d 4 4 d d d 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            . 4 4 4 4 d d d d d d 4 4 4 4 . 
            . . . . d d d d d d d d . . . . 
            . . . . d d d d d d d d . . . . 
            . . . . d d d d d d d d f f . . 
            . . . f f d d d d d f f f f f . 
            . . . f f f d d d f f f f f f . 
            . . . . f f f . . f f f f f . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(mushrooms, 值)
        tiles.setTileAt(值, assets.tile`transparency16`)
        mushrooms.ay = 重力加速度
        mushrooms.setFlag(SpriteFlag.BounceOnWall, false)
        if (Math.percentChance(50)) {
            mushrooms.vx = randint(30, 60)
        } else {
            mushrooms.vx = randint(-60, -30)
        }
    }
    for (let 值 of tiles.getTilesByType(assets.tile`myTile5`)) {
        pumps = sprites.create(assets.tile`myTile5`, SpriteKind.Pumpkin)
        tiles.placeOnTile(pumps, 值)
        tiles.setTileAt(值, assets.tile`transparency16`)
    }
    for (let 值 of tiles.getTilesByType(assets.tile`myTile6`)) {
        coins = sprites.create(assets.tile`myTile6`, SpriteKind.Coin)
        tiles.placeOnTile(coins, 值)
        tiles.setTileAt(值, assets.tile`transparency16`)
    }
}
function initLevelMap (关卡: number) {
    清空游戏对象()
    if (关卡 == 1) {
        tiles.setTilemap(tilemap`级别1`)
    } else if (关卡 == 2) {
        tiles.setTilemap(tilemap`级别2`)
    } else if (关卡 == 3) {
        tiles.setTilemap(tilemap`级别3`)
    }
    initobj(关卡)
}
function initobj (关卡: number) {
    effects.clouds.startScreenEffect()
    for (let 值 of tiles.getTilesByType(assets.tile`myTile8`)) {
        tiles.placeOnTile(hero, 值)
        tiles.setTileAt(值, assets.tile`transparency16`)
    }
    for (let 值 of tiles.getTilesByType(assets.tile`myTile`)) {
        tiles.setWallAt(值, true)
    }
    for (let 值 of tiles.getTilesByType(assets.tile`myTile0`)) {
        tiles.setWallAt(值, true)
    }
    生成游戏对象()
}
function HeroCrouch () {
    anim = animation.createAnimation(ActionKind.Crouchleft, 100)
    animation.attachAnimation(hero, anim)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f d d d d d d d d d e e d f . 
        . f d d f d d d d f d d e d f . 
        . f d d f d d d d f d d d e f . 
        . f d d f d d d d f d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f a c c c c c c c c a b f . . 
        . f d c c c c c c c c c d d f . 
        f d d f f f b b f f f f d d f . 
        . f f a a a a a a a a a b f . . 
        . . . f f f f . . f f f f . . . 
        `)
    anim = animation.createAnimation(ActionKind.Crouchright, 100)
    animation.attachAnimation(hero, anim)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f d e e d d d d d d d d d f . 
        . f d e d d f d d d d f d d f . 
        . f e d d d f d d d d f d d f . 
        . . f d d d f d d d d f d d f . 
        . . f d d d d d d d d d d d f . 
        . . f b a c c c c c c c c a f . 
        . f d d c c c c c c c c c d f . 
        . f d d f f f f b b f f f d d f 
        . . f b a a a a a a a a a f f . 
        . . . f f f f . . f f f f . . . 
        `)
}
function HeroJump () {
    anim = animation.createAnimation(ActionKind.Jumpleft, 100)
    animation.attachAnimation(hero, anim)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f d d d d d d d d d e e d f . 
        . f d d f d d d d f d d e d f . 
        . f d d f d d d d f d d d e f . 
        . f d d f d d d d f d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f a c c c c c c c c a b f . . 
        . f d d c c c c c c d d d f . . 
        . f d f f f b b f f f d d f . . 
        . . f a a a a a a a a a b f . . 
        . . . f a a b f f a a b f . . . 
        . . . f a a b f f a a b f . . . 
        . . . . f f f . . f f f . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f d d d d d d d d d e e d f . 
        . f d d f d d d d f d d e d f . 
        . f d d f d d d d f d d d e f . 
        . f d d f d d d d f d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f a c c c c c c c c a b f . . 
        . f d d c c c c c c d d d f . . 
        . f d f f f b b f f f d d f . . 
        . . f a a a a a a a a a b f . . 
        . . . f a a b f f a a b f . . . 
        . . . . f f f . . f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    for (let index = 0; index < 30; index++) {
        anim.addAnimationFrame(img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . f e e e e e e e e e e f . . 
            . f e e e e e e e e e e e e f . 
            . f d d d d d d d d d e e d f . 
            . f d d f d d d d f d d e d f . 
            . f d d f d d d d f d d d e f . 
            . f d d f d d d d f d d d f . . 
            . f d d d d d d d d d d d f a . 
            . d a b c c c c c c c c b a d . 
            . d a c c c c c c c c c c a d . 
            . f f f f f b b f f f f f f a . 
            . . f a a a a a a a a a b f . . 
            . . . f a a b f f a a b f . . . 
            . . . . f f f . . f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    anim = animation.createAnimation(ActionKind.Jumpright, 100)
    animation.attachAnimation(hero, anim)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f d e e d d d d d d d d d f . 
        . f d e d d f d d d d f d d f . 
        . f e d d d f d d d d f d d f . 
        . . f d d d f d d d d f d d f . 
        . . f d d d d d d d d d d d f . 
        . . f b a c c c c c c c c a f . 
        . . f d d d c c c c c c d d f . 
        . . f d d f f f b b f f f d f . 
        . . f b a a a a a a a a a f . . 
        . . . f b a a f f b a a f . . . 
        . . . f b a a f f b a a f . . . 
        . . . . f f f . . f f f . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f d e e d d d d d d d d d f . 
        . f d e d d f d d d d f d d f . 
        . f e d d d f d d d d f d d f . 
        . . f d d d f d d d d f d d f . 
        . . f d d d d d d d d d d d f . 
        . . f b a c c c c c c c c a f . 
        . . f d d d c c c c c c d d f . 
        . . f d d f f f b b f f f d f . 
        . . f b a a a a a a a a a f . . 
        . . . f b a a f f b a a f . . . 
        . . . . f f f . . f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    for (let index = 0; index < 30; index++) {
        anim.addAnimationFrame(img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . f e e e e e e e e e e f . . 
            . f e e e e e e e e e e e e f . 
            . f d e e d d d d d d d d d f . 
            . f d e d d f d d d d f d d f . 
            . f e d d d f d d d d f d d f . 
            . . f d d d f d d d d f d d f . 
            . a f d d d d d d d d d d d f . 
            . d a b c c c c c c c c b a d . 
            . d a c c c c c c c c c c a d . 
            . a f f f f f f b b f f f f f . 
            . . f b a a a a a a a a a f . . 
            . . . f b a a f f b a a f . . . 
            . . . . f f f . . f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
}
function HeroIdle () {
    anim = animation.createAnimation(ActionKind.Idleleft, 100)
    animation.attachAnimation(hero, anim)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f d d d d d d d d d e e d f . 
        . f d d f d d d d f d d e d f . 
        . f d d f d d d d f d d d e f . 
        . f d d f d d d d f d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f a c c c c c c c c a b f . . 
        . f d d c c c c c c d d d f . . 
        . f d f f f b b f f f d d f . . 
        . . f a a a a a a a a a b f . . 
        . . . f a a b f f a a b f . . . 
        . . . f a a b f f a a b f . . . 
        . . . . f f f . . f f f . . . . 
        `)
    anim = animation.createAnimation(ActionKind.Idleright, 100)
    animation.attachAnimation(hero, anim)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f d e e d d d d d d d d d f . 
        . f d e d d f d d d d f d d f . 
        . f e d d d f d d d d f d d f . 
        . . f d d d f d d d d f d d f . 
        . . f d d d d d d d d d d d f . 
        . . f b a c c c c c c c c a f . 
        . . f d d d c c c c c c d d f . 
        . . f d d f f f b b f f f d f . 
        . . f b a a a a a a a a a f . . 
        . . . f b a a f f b a a f . . . 
        . . . f b a a f f b a a f . . . 
        . . . . f f f . . f f f . . . . 
        `)
}
function showIntroduction (text: string) {
    game.showLongText(text, DialogLayout.Bottom)
    music.baDing.play()
}
function 清空游戏对象 () {
    for (let 值 of sprites.allOfKind(SpriteKind.Potato)) {
        值.destroy()
    }
    for (let 值 of sprites.allOfKind(SpriteKind.Pumpkin)) {
        值.destroy()
    }
    for (let 值 of sprites.allOfKind(SpriteKind.Coin)) {
        值.destroy()
    }
}
function HeroRun () {
    anim = animation.createAnimation(ActionKind.Runleft, 100)
    animation.attachAnimation(hero, anim)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f e e e e e e e f . . . . . 
        . f e e e e e e e e e f . . . . 
        . f d d d d e d d e e f . . . . 
        . f d d f d d e d e e f . . . . 
        . f d d f d d d e e e f . . . . 
        . f d d f d d d d d d f . . . . 
        . f d d d d d d d d d f . . . . 
        . . f c c c a a c c b f . . . . 
        . . f c c d d d c c b f . . . . 
        . . f b f f d d f f f f . . . . 
        . . f a a a a a a a b f . . . . 
        . . . f a a a a b f f . . . . . 
        . . . f a a a a b f . . . . . . 
        . . . . f f f f f . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f e e e e e e e f . . . . . 
        . f e e e e e e e e e f . . . . 
        . f d d d d e d d e e f . . . . 
        . f d d f d d e d e e f . . . . 
        . f d d f d d d e e e f . . . . 
        . f d d f d d d d d d f . . . . 
        . f d d d d d d d d d f . . . . 
        . . f c c c c a a c b f . . . . 
        . . f c c c c d d c b f . . . . 
        . . f b f f d d d f f f f . . . 
        . . f a a a a a a a a b f f . . 
        . . . f a a b f f a a a f f . . 
        . . . . f f f . f f f f f . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f e e e e e e e f . . . . . 
        . f e e e e e e e e e f . . . . 
        . f d d d d e d d e e f . . . . 
        . f d d f d d e d e e f . . . . 
        . f d d f d d d e e e f . . . . 
        . f d d f d d d d d d f . . . . 
        . f d d d d d d d d d f . . . . 
        . . f c c c a a c c b f . . . . 
        . . f c c d d d c c b f . . . . 
        . . f b f f d d f f f f . . . . 
        . . f a a a a a a a b f . . . . 
        . . . f a a a a b f f . . . . . 
        . . . f a a a a b f . . . . . . 
        . . . . f f f f f . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f e e e e e e e f . . . . . 
        . f e e e e e e e e e f . . . . 
        . f d d d d e d d e e f . . . . 
        . f d d f d d e d e e f . . . . 
        . f d d f d d d e e e f . . . . 
        . f d d f d d d d d d f . . . . 
        . f d d d d d d d d d f . . . . 
        . . f c a a c c c c b f . . . . 
        . f d d d b c c c c b f . . . . 
        f f f d d f f f f f f f . . . . 
        f f f a a a a a a a b f . . . . 
        . f a a b f a a b f f . . . . . 
        . f f f f . f f f . . . . . . . 
        `)
    anim = animation.createAnimation(ActionKind.Runright, 100)
    animation.attachAnimation(hero, anim)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . f e e e e e e e f . . 
        . . . . f e e e e e e e e e f . 
        . . . . f e e d d e d d d d f . 
        . . . . f e e d e d d f d d f . 
        . . . . f e e e d d d f d d f . 
        . . . . f d d d d d d f d d f . 
        . . . . f d d d d d d d d d f . 
        . . . . f b c c a a c c c f . . 
        . . . . f b c c d d d c c f . . 
        . . . . f f f f d d f f b f . . 
        . . . . f b a a a a a a a f . . 
        . . . . . f f b a a a a f . . . 
        . . . . . . f b a a a a f . . . 
        . . . . . . . f f f f f . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . f e e e e e e e f . . 
        . . . . f e e e e e e e e e f . 
        . . . . f e e d d e d d d d f . 
        . . . . f e e d e d d f d d f . 
        . . . . f e e e d d d f d d f . 
        . . . . f d d d d d d f d d f . 
        . . . . f d d d d d d d d d f . 
        . . . . f b c a a c c c c f . . 
        . . . . f b c d d c c c c f . . 
        . . . f f f f d d d f f b f . . 
        . . f f b a a a a a a a a f . . 
        . . f f a a a f f b a a f . . . 
        . . . f f f f f . f f f . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . f e e e e e e e f . . 
        . . . . f e e e e e e e e e f . 
        . . . . f e e d d e d d d d f . 
        . . . . f e e d e d d f d d f . 
        . . . . f e e e d d d f d d f . 
        . . . . f d d d d d d f d d f . 
        . . . . f d d d d d d d d d f . 
        . . . . f b c c a a c c c f . . 
        . . . . f b c c d d d c c f . . 
        . . . . f f f f d d f f b f . . 
        . . . . f b a a a a a a a f . . 
        . . . . . f f b a a a a f . . . 
        . . . . . . f b a a a a f . . . 
        . . . . . . . f f f f f . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . f e e e e e e e f . . 
        . . . . f e e e e e e e e e f . 
        . . . . f e e d d e d d d d f . 
        . . . . f e e d e d d f d d f . 
        . . . . f e e e d d d f d d f . 
        . . . . f d d d d d d f d d f . 
        . . . . f d d d d d d d d d f . 
        . . . . f b c c c c a a c f . . 
        . . . . f b c c c c b d d d f . 
        . . . . f f f f f f f d d f f f 
        . . . . f b a a a a a a a f f f 
        . . . . . f f b a a f b a a f . 
        . . . . . . . f f f . f f f f . 
        `)
}
function createPlayer (plr: Sprite) {
    plr.ay = 重力加速度
    scene.cameraFollowSprite(plr)
    controller.moveSprite(plr, 100, 0)
    plr.z = 5
    info.setLife(3)
    info.setScore(0)
}
function initCoinAnimations () {
	
}
let heroFacingLeft = false
let anim: animation.Animation = null
let coins: Sprite = null
let pumps: Sprite = null
let mushrooms: Sprite = null
let 二次跳跃速度 = 0
let 可以二次跳跃 = false
let 重力加速度 = 0
let 单位高度 = 0
let hero: Sprite = null
scene.setBackgroundColor(9)
hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f . . . 
    . . f e e e e e e e e e e f . . 
    . f e e e e e e e e e e e e f . 
    . f d e e d d d d d d d d d f . 
    . f d e d d f d d d d f d d f . 
    . f e d d d f d d d d f d d f . 
    . . f d d d f d d d d f d d f . 
    . . f d d d d d d d d d d d f . 
    . . f b a c c c c c c c c a f . 
    . . f d d d c c c c c c d d f . 
    . . f d d f f f b b f f f d f . 
    . . f b a a a a a a a a a f . . 
    . . . f b a a f f b a a f . . . 
    . . . f b a a f f b a a f . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.Player)
let 无敌时间 = 600
单位高度 = 30
重力加速度 = 9.8 * 单位高度
initAnimations()
createPlayer(hero)
let 当前关卡 = 1
let 关卡数量 = 3
initLevelMap(当前关卡)
giveIntroduction()
game.onUpdate(function () {
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        可以二次跳跃 = true
    }
})
game.onUpdate(function () {
    if (hero.vx < 0) {
        heroFacingLeft = true
    } else if (hero.vx > 0) {
        heroFacingLeft = false
    }
    if (hero.isHittingTile(CollisionDirection.Top)) {
        hero.vy = 0
    }
    if (controller.down.isPressed()) {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.Crouchleft)
        } else {
            animation.setAction(hero, ActionKind.Crouchright)
        }
    } else if (hero.vy < 60 && !(hero.isHittingTile(CollisionDirection.Bottom))) {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.Jumpleft)
        } else {
            animation.setAction(hero, ActionKind.Jumpright)
        }
    } else if (hero.vx < 0) {
        animation.setAction(hero, ActionKind.Runleft)
    } else if (hero.vx > 0) {
        animation.setAction(hero, ActionKind.Runright)
    } else {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.Idleleft)
        } else {
            animation.setAction(hero, ActionKind.Idleright)
        }
    }
})
game.onUpdate(function () {
    for (let 值 of sprites.allOfKind(SpriteKind.Mushroom)) {
        if (值.isHittingTile(CollisionDirection.Left)) {
            值.vx = randint(30, 60)
        } else if (值.isHittingTile(CollisionDirection.Right)) {
            值.vx = randint(-60, -30)
        }
    }
})
