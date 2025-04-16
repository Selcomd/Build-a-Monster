// Yahir Rico

class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
    
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

        // Monster Legs
        my.sprite.leg1 = this.add.sprite(this.bodyX + 50, this.bodyY+120, "monsterParts", "leg_greenA.png");
        my.sprite.leg2 = this.add.sprite(this.bodyX - 50, this.bodyY+120, "monsterParts", "leg_greenA.png");
        my.sprite.leg2.flipX = true;

        // Monster Arms
        my.sprite.arm1 = this.add.sprite(this.bodyX + 80, this.bodyY-50, "monsterParts", "arm_greenB.png");
        my.sprite.arm1.flipY = true;
        my.sprite.arm2 = this.add.sprite(this.bodyX - 80, this.bodyY-50, "monsterParts", "arm_greenB.png");
        my.sprite.arm2.flipY = true;
        my.sprite.arm2.flipX = true;

        // Monster Extras
        my.sprite.extra1 = this.add.sprite(this.bodyX + 30, this.bodyY-90, "monsterParts", "detail_white_antenna_small.png");
        my.sprite.extra2 = this.add.sprite(this.bodyX - 30, this.bodyY-90, "monsterParts", "detail_white_antenna_small.png");
        my.sprite.extra2.flipX = true;

        // Monster Body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        // Monster Eye
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY-20, "monsterParts", "eye_human_blue.png");

        // Monster Mouth
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouthH.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouth_closed_fangs.png");


        my.sprite.fangs.visible = false;
        this.keys = this.input.keyboard.addKeys("A,D,S,F");


    }

    update() {
        let my = this.my;    // create an alias to this.my for readability


        // Moves the monster
        const moveSpeed = 2;

        if (this.keys.A.isDown) {
            this.bodyX -= moveSpeed;
            for (let part in my.sprite) {
                my.sprite[part].x -= moveSpeed;
            }
        } else if (this.keys.D.isDown) {
            this.bodyX += moveSpeed;
            for (let part in my.sprite) {
                my.sprite[part].x += moveSpeed;
            }
        }

        //Changes the mouth with key press
        if (Phaser.Input.Keyboard.JustDown(this.keys.S)) {
            my.sprite.mouth.visible = true;
            my.sprite.fangs.visible = false;
        }

        if (Phaser.Input.Keyboard.JustDown(this.keys.F)) {
            my.sprite.mouth.visible = false;
            my.sprite.fangs.visible = true;
        }
    
       

    }

}