var road, beach, garden
var aura
var chen=15
var chenImg
var aliz
var wet_floor, wet_floor2, wet_floor3
var wetFloorImg
var auraImg
var obstacles
var garbagecan, garbageImg
var garbage2, garbage3, garbage4, garbage5, garbage6, garbage7
var score=0
var song
var song2
var kick
var punch

function preload() {
  road = loadImage("./Assets/roadforbyju.png")
  beach = loadImage("./Assets/beachforbyju.jpg")
  garden = loadImage("./Assets/gardenforbyju.jpg")

  auraImg = loadImage("./Assets/aura.png")
  chenImg = loadImage("./Assets/chen.png")
  aliz = loadImage("./Assets/aliz.png")
  wetFloorImg = loadImage("./Assets/WET_FLOOR-removebg-preview.png")
  garbageImg=loadImage("./Assets/garbagae-removebg-preview.png")
  song = loadSound('./Assets/Cleanup Title Song- BYJU.mp3');
  song2 = loadSound('./Assets/Alien Battle Title Song- BYJU.mp3');
  
}

function setup() {
  createCanvas(1850,1000);

  aura=createSprite(925,500,10,10)
  aura.addImage(auraImg)
  aura.scale=0.25 

  chen=createSprite(925,100,10,10)
  chen.addImage(chenImg)
  chen.scale=0.15
  chen.visible=false

//GARBAGE CAN LOADING
  garbagecan=createSprite(100,200,10,10)
garbagecan.addImage(garbageImg)
garbagecan.scale=0.5

garbage2=createSprite(300,500,10,10)
garbage2.addImage(garbageImg)
garbage2.scale=0.5

garbage3=createSprite(800,100,10,10)
garbage3.addImage(garbageImg)
garbage3.scale=0.5

garbage4=createSprite(1250,420,10,10)
garbage4.addImage(garbageImg)
garbage4.scale=0.5

garbage5=createSprite(1487,101,10,10)
garbage5.addImage(garbageImg)
garbage5.scale=0.5

garbage6=createSprite(1667,601,10,10)
garbage6.addImage(garbageImg)
garbage6.scale=0.5

garbage7=createSprite(890,825,10,10)
garbage7.addImage(garbageImg)
garbage7.scale=0.5

//WETFLOOR LOAD
wet_floor=createSprite(1340,700,10,10)
wet_floor.addImage(wetFloorImg)
wet_floor.scale= 0.34

wet_floor2=createSprite(600,700,10,10)
wet_floor2.addImage(wetFloorImg)
wet_floor2.scale= 0.34

wet_floor3=createSprite(570,250,10,10)
wet_floor3.addImage(wetFloorImg)
wet_floor3.scale= 0.34
// SET COLLIDERS FOR WETFLOOR
wet_floor.debug=true
wet_floor.setCollider("circle",0,0,2)

wet_floor2.debug=true
wet_floor2.setCollider("circle",0,0,2)

wet_floor3.debug=true
wet_floor3.setCollider("circle",0,0,2)


//play the 1st song!
song.play()
}





function draw() {
  background(beach)

  //setting up the score
  textSize(30)
  fill("black")
  textFont("Times New Roman")
  text("Score: "+ score, 1600,100,)

  //movement for aura
  if (keyDown("w")) {
    aura.y= aura.y-15
  }

  if (keyDown("a")) {
    aura.x= aura.x-15
  }

  if (keyDown("s")) {
    aura.y= aura.y+15
  }

  if (keyDown("d")) {
    aura.x= aura.x+15
  }

// if aura is touching garbage cans, that specific can dissapears and the score increases by 2
  if (aura.isTouching(garbagecan)) {
    garbagecan.remove() ; 
    score=score+2
  }

  if (aura.isTouching(garbage2)) {
    garbage2.remove()
    score=score+2
  }

  if (aura.isTouching(garbage3)) {
    garbage3.remove()
    score=score+2
  }

  if (aura.isTouching(garbage4)) {
    garbage4.remove()
    score=score+2
  }

  if (aura.isTouching(garbage5)) {
    garbage5.remove()
    score=score+2
  }

  if (aura.isTouching(garbage6)) {
    garbage6.remove()
    score=score+2
  }

  if (aura.isTouching(garbage7)) {
    garbage7.remove()
    score=score+2
  }
//if aura is touching the wet floor signs, its game over+ song stops
  if (aura.isTouching(wet_floor)) {
    song.stop()
    text ("Please reload page to try again!",725,500)
    lifeover()
  
  }

  if (aura.isTouching(wet_floor2)) {
    song.stop()
    text ("Please reload page to try again!",725,500)
    lifeover()
  }
  if (aura.isTouching(wet_floor3)) {
    song.stop()
    text ("Please reload page to try again!",725,500)
    lifeover()
  }
  // IF the score is 14, this is what should happen:
  if (score===14) {
    chen.visible = true
    wet_floor.visible=false
    wet_floor2.visible=false
    wet_floor3.visible=false
  
  aura.x=925
  aura.y=500
  }

  if (score===14) {
    text("Press T to eliminate the opponent! ", 555,400,);
    text("Congrats!",880,100,)
   }

   if (keyDown("t"))  {
    chen.remove()
  }
      
 


  

  drawSprites()
}
