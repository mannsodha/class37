var player;
var database,form;
var gameState = 0;
var playerCount = 0;
var game;
var allPlayer;
var car1 , car2 , car3 , car4 , cars
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
   game = new Game();
   game.getState();
   game.start();
}

function draw(){
    background("white");
   if(playerCount === 4){
       game.updateState(1);
   }
   if(gameState === 1){
    clear();
    game.play();
   }
    drawSprites();
}

