var database,dog, happyDog, sprite,sprite2, foodS, foodStock,lastFed,feed,addFood,feedButton,refilButton,x,y;

function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  sprite = createSprite(400,350);
  sprite.addImage(dog);
  feedButton = createButton("Feed");
  feedButton.position(550,60);

  refilButton= createButton("Refil");
  refilButton.position(600,60)
  sprite.scale = 0.25;


 
  call = new food();
 //foodS = 10
  

}


function draw() {  
  background("green");
 
  textSize(15);
 fill("white")
  textSize(20)
  text("remaining food: "+foodS ,290,100)
 call.display();
feedButton.mousePressed(function(){

  console.log("no")
  call.updateFood(foodS);
  
  
sprite.addImage(happyDog)



})

refilButton.mousePressed(function(){

  console.log("yes")
  call.updateFood(11)
  

})
  

  
  
   call.referFood();
   
   
  drawSprites();
    
}

 







