var config = {
	type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);
 
function preload ()
{
		this.load.image('forest', './assets/Background.png');
		this.load.image('platform', './assets/platform.png');
}

function create(){
	    this.add.image(400, 300, 'sky');

}