class food {

constructor(){

    
    this.image = loadImage("images/Milk.png")

}

referFood(){

    var refer = database.ref('food')
    refer.on("value",function(data){
    
   foodS = data.val();
    
    })





}


updateFood(x){


    if(x === 0){
    
        x = 0
        
        
        
        }else{
        
        x = x-1;
        
        }
        
        database.ref('/').update({food:x})
        
}

display(){

x = 400,y = 500;

imageMode(CENTER);
image(this.image,0,0,10,20)
console.log(foodS)

if(foodS != 0){

for(var i = 0;i<foodS;i = i++){
if(i%10 ===0){
x = 400,y = y+50

}
image(this.image,x,y,10,20);
x = x+30

    }



}


}




}