//% color="#0a0289" weight=100
namespace credits {
    let _textlist = 0
    let _spritelist: TextSprite[]
    let _creditlines: string[] = []
    let _textSprite: TextSprite
    //% block="start credits at speed $speed can be speed up $canspeed with skipable $skipable"
    export function start_credits(speed:number,canspeed:boolean,skipable:boolean) {
        game.pushScene()
        _textlist = 0
        _spritelist = []
        for (let index = 0; index <= _creditlines.length - 1; index++) {
            _textSprite = textsprite.create(_creditlines[index])
            _textSprite.y = scene.screenHeight() + 12 * index
            _textSprite.x = scene.screenWidth() / 2
            _textSprite.vy -= speed
            _spritelist.push(_textSprite)
        }
        if (canspeed){
            controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
                for (let value of _spritelist) {
                    value.vy = 0 - (speed * 2)
                }
            })
            controller.A.onEvent(ControllerButtonEvent.Released, function () {
                for (let value of _spritelist) {
                    value.vy = 0 - speed
                }
            })
        }
        while (_textSprite.y > -4) {
            pause(1)
            if (controller.B.isPressed() && skipable){break}
        }
        for (let value of _spritelist) {
            sprites.destroy(value)
        }
        game.popScene()
    }
    //% block="append $text credits"
    export function append(text: string) {
        let _chunks = [];
        for (let i = 0; i < text.length; i += 25) {
            _chunks.push(text.substr(i,25));
        }
        for (let _chunk of _chunks) {
            _creditlines.push(_chunk);
        }
    }
    //% block="add empty line"
    export function empty_line(){_creditlines.push("")}
    //% block="clear credits"
    export function clear_credits() {
        _creditlines = []
    }
}