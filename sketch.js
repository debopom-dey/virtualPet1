//Create variables here
var dog,happyDog,database,foodS,foodStock,dogImg
function preload()
{
  dogImg=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
  database = firebase.database();
  console.log(database);
	createCanvas(500, 500);
  dog=createSprite(250,250)
  dog.addImage(dogImg)
  dog.scale=0.2
  var foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87)
//dog=createSprite(250,250)

//if(Food!==undefined){
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog)
}
  drawSprites();
//}
  textSize(15)
  fill('white')
  text("Press up arrow to feed the dog",200,150)
  //add styles here

}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}



