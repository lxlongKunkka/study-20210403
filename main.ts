enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Potato = SpriteKind.create()
    export const Pumpkin = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const Flag = SpriteKind.create()
    export const Mushroom = SpriteKind.create()
    export const pumpkins = SpriteKind.create()
}
function 初始化南瓜动画 () {
	
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    试图跳跃()
})
function 英雄下蹲动画 () {
    英雄下蹲左 = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hero, 英雄下蹲左)
    英雄下蹲左.addAnimationFrame(img`
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
    英雄下蹲右 = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hero, 英雄下蹲右)
    英雄下蹲右.addAnimationFrame(img`
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
function 初始化金币动画 () {
	
}
function 英雄跳跃动画 () {
    英雄向左跳 = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hero, 英雄向左跳)
    英雄向左跳.addAnimationFrame(img`
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
    英雄向左跳.addAnimationFrame(img`
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
        英雄向左跳.addAnimationFrame(img`
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
    英雄向右跳 = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hero, 英雄向右跳)
    英雄向右跳.addAnimationFrame(img`
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
    英雄向右跳.addAnimationFrame(img`
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
        英雄向左跳.addAnimationFrame(img`
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    试图跳跃()
})
function 初始化英雄动画 () {
    英雄跑动动画()
    英雄空闲动画()
    英雄下蹲动画()
    英雄跳跃动画()
}
function 生成游戏对象 () {
    for (let 值 of tiles.getTilesByType(assets.tile`myTile3`)) {
        pumps = sprites.create(assets.tile`myTile3`, SpriteKind.Mushroom)
        tiles.placeOnTile(pumps, 值)
        tiles.setTileAt(值, assets.tile`transparency16`)
        pumps.ay = 重力加速度
        pumps.setFlag(SpriteFlag.BounceOnWall, true)
        if (Math.percentChance(50)) {
            pumps.vx = randint(30, 60)
        } else {
            pumps.vx = randint(-60, -30)
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
function 根据当前关卡设置地图 (关卡: number) {
    清空游戏对象()
    if (关卡 == 1) {
        tiles.setTilemap(tilemap`级别1`)
    } else if (关卡 == 2) {
        tiles.setTilemap(tilemap`级别2`)
    } else if (关卡 == 3) {
        tiles.setTilemap(tilemap`级别3`)
    }
    初始化关卡(关卡)
}
function 英雄空闲动画 () {
    英雄空闲左 = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hero, 英雄空闲左)
    英雄空闲左.addAnimationFrame(img`
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
    英雄空闲右 = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hero, 英雄空闲右)
    英雄空闲右.addAnimationFrame(img`
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
function 英雄跑动动画 () {
    英雄向左跑 = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hero, 英雄向左跑)
    英雄向左跑.addAnimationFrame(img`
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
    英雄向左跑.addAnimationFrame(img`
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
    英雄向左跑.addAnimationFrame(img`
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
    英雄向左跑.addAnimationFrame(img`
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
    英雄向右跑 = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hero, 英雄向右跑)
    英雄向右跑.addAnimationFrame(img`
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
    英雄向右跑.addAnimationFrame(img`
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
    英雄向右跑.addAnimationFrame(img`
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
    英雄向右跑.addAnimationFrame(img`
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
function 初始化关卡 (关卡: number) {
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
function createPlayer (plr: Sprite) {
    plr.ay = 重力加速度
    scene.cameraFollowSprite(plr)
    controller.moveSprite(plr, 100, 0)
    plr.z = 5
    info.setLife(3)
    info.setScore(0)
}
function 初始化动画 () {
    初始化英雄动画()
    初始化金币动画()
    初始化南瓜动画()
}
let heroFacingLeft = false
let 英雄向右跑: animation.Animation = null
let 英雄向左跑: animation.Animation = null
let 英雄空闲右: animation.Animation = null
let 英雄空闲左: animation.Animation = null
let coins: Sprite = null
let pumps: Sprite = null
let 英雄向右跳: animation.Animation = null
let 英雄向左跳: animation.Animation = null
let 二次跳跃速度 = 0
let 可以二次跳跃 = false
let 英雄下蹲右: animation.Animation = null
let 英雄下蹲左: animation.Animation = null
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
初始化动画()
createPlayer(hero)
let 当前关卡 = 1
let 关卡数量 = 3
根据当前关卡设置地图(当前关卡)
game.onUpdate(function () {
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        可以二次跳跃 = true
    }
})
game.onUpdate(function () {
    if (hero.vx < 0) {
        heroFacingLeft = true
    } else {
        heroFacingLeft = false
    }
    if (hero.isHittingTile(CollisionDirection.Top)) {
        hero.vy = 0
    }
    if (controller.down.isPressed()) {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.Walking)
        } else {
            animation.setAction(hero, ActionKind.Walking)
        }
    } else {
    	
    }
})
