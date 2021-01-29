controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
})
info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(true)
    effects.blizzard.endScreenEffect()
})
info.startCountdown(30)
let myCorg = corgio.create(SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
myCorg.verticalMovement()
myCorg.horizontalMovement()
myCorg.follow()
