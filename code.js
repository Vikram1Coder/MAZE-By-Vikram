var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating the player Sofia

var Sofia = createSprite(30, 30,15,15);
Sofia.shapeColor = "yellow";

//creating the maze walls (wall1 - wall2)
  ;
var wall1 = createSprite(275, 50, 15, 100);
var wall2 = createSprite(330, 52, 100,15);
var wall3 = createSprite(233, 100, 100, 15);
var wall4 = createSprite(50, 100, 100,15);
var wall5 = createSprite(65, 150, 15, 100);
var wall6 = createSprite(180, 100, 15,100);
var wall7 = createSprite(180, 50, 100, 15);
var wall8 = createSprite(180, 175, 100,15);
var wall9 = createSprite(180, 230, 15, 100);
var wall10 = createSprite(230, 250, 100,15);
var wall11 = createSprite(240, 300, 15, 100);
var wall12 = createSprite(240, 360, 15,40);
var wall13 = createSprite(290, 280, 100, 15);
var wall14 = createSprite(355, 280, 63, 15);
var wall15 = createSprite(135, 238, 100, 15 );
var wall16 = createSprite(50, 330, 100,15);
var wall17 = createSprite(125, 20, 15, 100);
var wall18 = createSprite(280, 157, 100,15);
var wall19 = createSprite(306, 200, 15, 100);
var wall20 = createSprite(150, 340, 15,100);
var wall21 = createSprite(30, 290, 15, 100);
var wall22 = createSprite(285, 333, 100,15);
var wall23 = createSprite(310, 120, 15,65);

//create cup
var cup = createSprite(390, 390, 15, 30);
cup.shapeColor = "blue";
  
function draw() {
  //setting the background color to pink
  background("pink");
  
  if (keyDown("up")) {
    Sofia.velocityX = 0;
    Sofia.velocityY = -1;
  }
  

  if (keyDown("down")) {
    Sofia.velocityX = 0;
    Sofia.velocityY = 1;
  }

  if (keyDown("left")) {
    Sofia.velocityX = -1;
    Sofia.velocityY = 0;
  }
  if (keyDown("right")) {
    Sofia.velocityX = 1;
    Sofia.velocityY = 0;
  }
  if (Sofia.isTouching(cup)) {
    textSize(40);
    textFont("Arial");
    text("YOU WON", 200, 200);
    Sofia.x = 30;
    Sofia.y = 30;
    Sofia.velocityX = 0;
    Sofia.velocityY = 0;
  }
  
  createEdgeSprites();
  Sofia.collide(edges);
  Sofia.collide(wall1);
  Sofia.collide(wall2);
  Sofia.collide(wall3);
  Sofia.collide(wall4);
  Sofia.collide(wall5);
  Sofia.collide(wall6);
  Sofia.collide(wall7);
  Sofia.collide(wall8);
  Sofia.collide(wall9);
  Sofia.collide(wall10);
  Sofia.collide(wall11);
  Sofia.collide(wall12);
  Sofia.collide(wall13);
  Sofia.collide(wall14);
  Sofia.collide(wall15);
  Sofia.collide(wall16);
  Sofia.collide(wall17);
  Sofia.collide(wall18);
  Sofia.collide(wall19);
  Sofia.collide(wall20);
  Sofia.collide(wall21);
  Sofia.collide(wall22);
  Sofia.collide(wall23);
drawSprites();

}






































function resetSofia()
{
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("You Win", 200,200);
  }
}























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
