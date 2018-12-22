function Snake() {
    this.nodes = [];
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.score= 0;
    this.update = function () {
        for (let i = this.total - 1; i >= 1; i--) {
            this.nodes[i].x = this.nodes[i - 1].x;
            this.nodes[i].y = this.nodes[i - 1].y;

        }
        if(this.nodes[0] == undefined){
            this.die();
            return;
        }

        let x = this.nodes[0].x;
        let y = this.nodes[0].y;
        x += this.xspeed * scl;
        y += this.yspeed * scl;

        x = constrain(x, 0, width - scl)
        y = constrain(y, 0, height - scl)
        this.nodes[0].x = x;
        this.nodes[0].y = y;
        this.checkDeath();
    }

    this.checkDeath = function () { 
        for (let i = 1; i < this.total - 1; i++) {
            if (this.nodes[0].eq(this.nodes[i])) {
                this.die();
                return;
            }
        }
    }
    this.die = function(){
        this.nodes = [];
        this.total = 0;
        this.xspeed =1;
        this.yspeed =0;
        this.concat();
    }
    this.concat = function () {
        this.nodes.push(new SnakeNode());
        this.total++;
        this.update();
    }

    this.show = function () {
        for (let i = 0; i < this.total; i++) {
            this.nodes[i].show();
        }

    }

    this.survive = function (food) {
        let d = dist(this.nodes[0].x, this.nodes[0].y, food.x, food.y);
        if (d < 1) {
            this.score++;
            food.reload();
            this.concat();
        }
        return d;
    }
    this.canMove = function (tmpx, tmpy) {
        if (this.xspeed == 0 && tmpx == 0)
            return false;
        if (this.yspeed == 0 && tmpy == 0)
            return false;
        return true;
    }

    this.keyMove = function (key) {
        let tmpX;
        let tmpY;
        switch (key) {
            case UP_ARROW:
                tmpX = 0;
                tmpY = -1;
                break;
            case DOWN_ARROW:
                tmpX = 0;
                tmpY = 1;
                break;
            case RIGHT_ARROW:
                tmpX = 1;
                tmpY = 0;
                break;
            case LEFT_ARROW:
                tmpX = -1;
                tmpY = 0;
                break;
        }
        if (this.canMove(tmpX, tmpY)) {
            this.xspeed = tmpX;
            this.yspeed = tmpY;
        }
    }
}