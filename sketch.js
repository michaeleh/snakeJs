 var snake;
 var food;
 var scl =20;
 function setup() {
     createCanvas(600, 600)
     snake = new Snake();
     snake.concat();
     food = new Food();
     food.reload();
     frameRate(15);
 }

 function draw() {
     background(51);    
     snake.update();
     snake.show();
     food.show();

     snake.survive(food);


 }

 function keyPressed(){
     snake.keyMove(keyCode);
 }
