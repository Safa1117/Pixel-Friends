var backgroundImg;

var safa, safaImg, chloe, chloeImg, chloeFood1, chloeFood2, chloeFood1Img, chloeFood2Img;
var harper, harperImg, harperFood1, harperFood2, harperFood1Img, harperFood2Img;
var timmy, timmyImg, timmyFood1, timmyFood2, timmyFood1Img, timmyFood2Img;
var startWork, startWorkImg, brk, brkImg;
var foodstand1, foodstandImg;
var foodstand2;
var foodstand3;
var loveemote, loveemoteImg, hateemote, hateemoteImg, foodemote, foodemoteImg;
var house, houseImg;
var office, officeImg;
var sec = 0;
var reset, resetImg;

function preload(){
  backgroundImg = loadImage("images/Background.jpg");
  foodStandImg = loadImage("images/FoodStandFinal.jpg");
  houseImg = loadImage("images/house.jpg");
  officeImg = loadImage("images/workplace.jpg");
  chloeImg = loadImage("images/chloe.jpg");
  harperImg = loadImage("images/harper.jpg");
  timmyImg = loadImage("images/timmy.jpg");
  brkImg = loadImage("images/break.jpg");
  startWorkImg = loadImage("images/worktime.jpg");
  safaImg = loadImage("images/safa.jpg");
  resetImg = loadImage("images/reset.jpg");
  stopImg = loadImage("images/stop.jpg");
  chloeFood1Img = loadImage("images/CFood1.jpg");
  chloeFood2Img = loadImage("images/CFood2.jpg");
  harperFood1Img = loadImage("images/HFood1.jpg");
  harperFood2Img = loadImage("images/HFood2.jpg");
  timmyFood1Img = loadImage("images/TFood1.jpg");
  timmyFood2Img = loadImage("images/TFood2.jpg");
  foodemoteImg = loadImage("images/Femote.jpg");
  hateemoteImg = loadImage("images/HBemote.jpg");
  loveemoteImg = loadImage("images/Hemote.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  // database = firebase.database();

  safa = createSprite(750, 450, 50, 50);
  safa.addImage(safaImg);
  safa.scale = 0.7;
  
  chloe = createSprite(600, 150, 50, 50);
  chloe.addImage(chloeImg);
  chloe.scale = 0.7;

  harper = createSprite(750, 150, 50, 50);
  harper.addImage(harperImg);
  harper.scale = 0.7;
  
  timmy = createSprite(900, 150, 50, 50);
  timmy.addImage(timmyImg);
  timmy.scale = 0.7;

  foodStand1 = createSprite(350, 200, 150, 50);
  foodStand1.addImage(foodStandImg);
  foodStand1.scale = 1.5;
  
  foodStand2 = createSprite(350, 325, 150, 50);
  foodStand2.addImage(foodStandImg);
  foodStand2.scale = 1.5;

  foodStand3 = createSprite(350,450, 150, 50);
  foodStand3.addImage(foodStandImg);
  foodStand3.scale = 1.5;

  chloeFood1 = createSprite(285, 180, 20, 20);
  chloeFood1.addImage(chloeFood1Img);
  chloeFood1.scale = 0.3;

  chloeFood2 = createSprite(420, 180, 20, 20);
  chloeFood2.addImage(chloeFood2Img);
  chloeFood2.scale = 0.3;

  harperFood1 = createSprite(285, 300, 20, 20);
  harperFood1.addImage(harperFood1Img);
  harperFood1.scale = 0.3;

  harperFood2 = createSprite(420, 300, 20, 20);
  harperFood2.addImage(harperFood2Img);
  harperFood2.scale = 0.3;

  timmyFood1 = createSprite(285, 420, 20, 20);
  timmyFood1.addImage(timmyFood1Img);
  timmyFood1.scale = 0.3;

  timmyFood2 = createSprite(420, 420, 20, 20);
  timmyFood2.addImage(timmyFood2Img);
  timmyFood2.scale = 0.3;

  house = createSprite(1100, 160, 100, 100);
  house.addImage(houseImg);
  house.scale = 1.4;
  
  office = createSprite(1000, 400, 100, 150);
  office.addImage(officeImg);
  office.scale = 1.5;

  brk = createSprite(1100, 450, 35, 35);
  brk.addImage(brkImg);
  brk.scale = 1;

  startWork = createSprite(1100, 380, 35, 35);
  startWork.addImage(startWorkImg);
  startWork.scale = 0.4;

  reset = createSprite(695,380,80,50);
  reset.addImage(resetImg);
  reset.scale = 0.3;
  
  hateemote = createSprite(200, 200, 20, 20);
  hateemote.addImage(hateemoteImg);
  hateemote.visible = false;
  hateemote.scale = 0.4;

  loveemote = createSprite(200, 200, 20, 20);
  loveemote.addImage(loveemoteImg);
  loveemote.visible = false;
  loveemote.scale = 0.4
 
}


function draw(){
  background(backgroundImg);

    if(frameCount%60===0){
      sec = sec + 1;
    }
    

    if(keyDown("right")){
      safa.x = safa.x + 3;
    }
    if(keyDown("left")){
      safa.x = safa.x - 3;
    }
    if(keyDown("up")){
      safa.y = safa.y - 3;
    }
    if(keyDown("down")){
      safa.y = safa.y + 3;
    }

    if( sec> 10){

      if(safa.isTouching(chloeFood1)){
        chloeFood1.x = safa.x+30;
        chloeFood1.y = safa.y;
      }
      if(safa.isTouching(chloe) && safa.isTouching(chloeFood1)){
        chloeFood1.x = 630;
        chloeFood1.y = 150;
      }

      if(safa.isTouching(chloeFood2)){
        chloeFood2.x = safa.x+30;
        chloeFood2.y = safa.y;
      }
      if(safa.isTouching(chloe) && safa.isTouching(chloeFood2)){
        chloeFood2.x = 570;
        chloeFood2.y = 150;
      }

      if(safa.isTouching(harperFood1)){
        harperFood1.x = safa.x+30;
        harperFood1.y = safa.y;
      }
      if(safa.isTouching(harper) && safa.isTouching(harperFood1)){
        harperFood1.x = 780;
        harperFood1.y = 150;
      }
      if(safa.isTouching(harperFood2)){
        harperFood2.x = safa.x+30;
        harperFood2.y = safa.y;
      }
      if(safa.isTouching(harper) && safa.isTouching(harperFood2)){
        harperFood2.x = 720;
        harperFood2.y = 150;
      }

      if(safa.isTouching(timmyFood1)){
        timmyFood1.x = safa.x+30;
        timmyFood1.y = safa.y;
      }
      if(safa.isTouching(timmy) && safa.isTouching(timmyFood1)){
        timmyFood1.x = 930;
        timmyFood1.y = 150;
      }
      if(safa.isTouching(timmyFood2)){
        timmyFood2.x = safa.x+30;
        timmyFood2.y = safa.y;
      }
      if(safa.isTouching(timmy) && safa.isTouching(timmyFood2)){
        timmyFood2.x = 870;
        timmyFood2.y = 150;
      }

      if(harperFood1.isTouching(chloe) || harperFood2.isTouching(chloe) ||
        timmyFood1.isTouching(chloe) || timmyFood2.isTouching(chloe)
      ){
        hateemote.visible = true;
        hateemote.x = 600;
        hateemote.y = 100;
      }

      if(harperFood1.isTouching(timmy) || harperFood2.isTouching(timmy) ||
        chloeFood1.isTouching(timmy) || chloeFood2.isTouching(timmy)
      ){
        hateemote.visible = true;
        hateemote.x = 900;
        hateemote.y = 100;
      }

      if(chloeFood1.isTouching(harper) || chloeFood2.isTouching(harper) ||
        timmyFood1.isTouching(harper) || timmyFood2.isTouching(harper)
      ){
        hateemote.visible = true;
        hateemote.x = 750;
        hateemote.y = 100;
      }

      if(chloeFood1.isTouching(chloe) || chloeFood2.isTouching(chloe)){
        loveemote.visible = true;
        loveemote.x = 600;
        loveemote.y = 100;
      }

      if(timmyFood1.isTouching(timmy) || timmyFood2.isTouching(timmy)){
        loveemote.visible = true;
        loveemote.x = 900;
        loveemote.y = 100;
      }

      if(harperFood1.isTouching(harper) || harperFood2.isTouching(harper)){
        loveemote.visible = true;
        loveemote.x = 750;
        loveemote.y = 100;
      }
    }
    

  if(mousePressedOver(reset)){
    chloeFood1.x = 285;
    chloeFood1.y = 180;
    chloeFood2.x = 420;
    chloeFood2.y = 180;
    harperFood1.x = 285;
    harperFood1.y = 300;
    harperFood2.x = 420;
    harperFood2.y = 300;
    timmyFood1.x = 285;
    timmyFood1.y = 420;
    timmyFood2.x = 420;
    timmyFood2.y = 420;
    sec = 0;
  }

  safa.bounceOff(chloe);
  safa.bounceOff(harper);
  safa.bounceOff(timmy);
  safa.bounceOff(foodStand1);
  safa.bounceOff(foodStand2);
  safa.bounceOff(foodStand3);
  safa.bounceOff(house);
  safa.bounceOff(office);
  safa.bounceOff(brk);
  safa.bounceOff(startWork);
  safa.bounceOff(reset);

  drawSprites();

  stroke("red");
  text("Time : " + sec, 680, 300);
  strokeWeight(4);
  line(600,250,800,250);
  line(600,350,800,350);
  line(600,250,600,350);
  line(800,250,800,350);


}
