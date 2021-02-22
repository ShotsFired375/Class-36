var database, canvas, backGroundImage;
var position;
var game, player, form;
var gameState = 0;
var playerCount = 0;


function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(500,500);

  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("white");

  
}