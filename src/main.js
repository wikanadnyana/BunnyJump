import Phaser from "phaser";

import HelloWorldScene from "./HelloWorldScene";
import BunnyJumpScene from "./scenes/BunnyJumpScene";

const config = {
  type: Phaser.AUTO,
  parent: "app",
  width: 480,
  height: 640,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  autoCenter: Phaser.Scale.CENTER_BOTH,
  scene: [BunnyJumpScene],
};

export default new Phaser.Game(config);
