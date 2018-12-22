function Food(){
    this.x =0;
    this.y =0;

    this.reload = function(){
        let col= width/scl;
        let row = height/scl;
        this.x = floor(random(col))*scl;
        this.y = floor(random(row))*scl;

    }
    this.show = function(){
        fill(255,0,100);
        rect(this.x,this.y,scl,scl);
    }
}