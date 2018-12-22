function SnakeNode() {
    this.x = 0;
    this.y = 0;
    
    this.show = function () {
        fill(255);
        rect(this.x, this.y, scl, scl);
    }

    this.eq = function(node){
        return this.x == node.x && this.y == node.y;
    }

   
  
}