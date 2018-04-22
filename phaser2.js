  var config = {
    type: Phaser.AUTO,
    width: 2048,
    height: 1536,
    physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
};

//Creates a game configuration using phaser.
var player;
var platforms;
var game = new Phaser.Game(config);
 
 //Function is used for loading game assets.
function preload ()
{
        this.load.image('forest', './assets/Background.png');
        this.load.image('platform', './assets/platform.png');
        this.load.spritesheet('character', 'assets/character.png', { frameWidth: 32, frameHeight: 48 });

}
 
function create ()
{
    //Add backgroung image.
    this.add.image(1024, 768, 'forest');
    //Create a static physics group.
    platforms = this.physics.add.staticGroup();
    //Create the bottom platform.
    for(i = 1; i < 2048; i++){
        var px = i * 64;
        platforms.create(i, 1536-64, 'platform');
    }
    player = this.physics.add.sprite(100, 450, 'character');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('character', { start: 0, end: 3 }),
        frameRate: 10,     
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'character', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('character', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

}

function update(){}
