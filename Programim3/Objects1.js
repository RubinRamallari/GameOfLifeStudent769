class LivingCreature {
    constructor(x, y, index,opp,energy,score,arr){
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.index = index;
        this.opp = opp;
        this.energy = energy;
        this.score = score;
        this.arr = arr;
        this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
 
    }
    chooseCell(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == ch) {                                                                                                                                                       
                    found.push(this.directions[i]);                                                                                                                                                       
                }                                                                                                                                                       
            }                                                                                                                                                          
        }
        return found;
    }
    getNewCoordinates(){
        this.directions1 = [
        [this.x - 1, this.y - 1],
        [this.x , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y ],
        [this.x + 1, this.y ],
        [this.x - 1, this.y + 1],
        [this.x , this.y + 1],
        [this.x + 1, this.y + 1]
        ];
        
    }
    move(){
        this.getNewCoordinates();
        var newCell1 = random(this.chooseCell(0));
  
        if(newCell1){
            matrix[this.y][this.x] = 0 
            matrix[newCell1[1]][newCell1[0]] = this.index;
            this.x = newCell1[0];
            this.y = newCell1[1];
        }
    }
    eat(){
        this.getNewCoordinates();
        var newCell2 = random(this.chooseCell(this.opp));
        if(newCell2){
            matrix[this.y][this.x] = 0;
            matrix[newCell2[1]][newCell2[0]] = this.index;
            this.x = newCell2[0];
            this.y = newCell2[1];
            this.energy +=1;
            this.score+=1;
        }
        else{
            this.move();
            this.energy -=1;
        }
        if(this.energy==0){
            this.die();
        }
    }
    die(){
        for(var i in this.arr){
            if(this.x == this.arr[i].x && this.y == this.arr[i].y){
                matrix[this.y][this.x] = 0;
                this.arr.splice(i,1);
                break;
            }
        }
    }
}
class Grass extends LivingCreature{
    constructor(x,y,index){
        super(x,y,index);
        this.sc=0;
    }
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            arrG.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
            this.sc++;
        }
        if(this.sc==5){
            this.die();
        }
        
    }   
}
class GrassEater extends LivingCreature{
    constructor(x,y,index,opp,energy,score,arr){
        super(x,y,index,opp,energy,score,arr);
    }
    mul(){
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if(newCell && this.energy >= 5){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            var newGrasseater = new GrassEater(newX, newY, 2, 1,5,0);
            arrGe.push(newGrasseater);
            this.energy = 5;
        }
    }
}
class Predators extends LivingCreature{
    constructor(x,y,index,opp,energy,score,arr){
        super(x,y,index,opp,energy,score,arr);
    }
    mul(){
        var emptyCells = this.chooseCell(0);
        var newCellPR = random(emptyCells);
        if(newCellPR && this.energy >=10){
            var newX =newCellPR[0];
            var newY = newCellPR[1];
            matrix[newY][newX] = 3;
            var newPredator = new Predators(newX, newY,3,2,5,0);
            arrPR.push(newPredator);
            this.energy=5;
        }
    }
}
class Humans extends LivingCreature {
    constructor(x,y,index,opp,energy,score,arr){
        super(x,y,index,opp,energy,score,arr);
    }
    mul(){
        var emptyCells = this.chooseCell(0);
        var newCellPR = random(emptyCells);
        if(newCellPR && this.energy>=10){
            var newX =newCellPR[0];
            var newY = newCellPR[1];
            matrix[newY][newX] = 3;
            var newPredator = new Humans(newX, newY,4,3,5,0);
            arrPR.push(newPredator);
            this.energy=5;
        }

    }
}
class Robots extends LivingCreature{
    constructor(x,y,index,opp,energy,score,arr){
        super(x,y,index,opp,energy,score,arr);
    }
    mul(){
        var emptyCells = this.chooseCell(0);
        var newCellPR = random(emptyCells);
        if(newCellPR && this.energy>=10){
            var newX =newCellPR[0];
            var newY = newCellPR[1];
            matrix[newY][newX] = 3;
            var newPredator = new Robots(newX, newY,5,4,5,0);
            arrPR.push(newPredator);
            this.energy=5;
        }

    }
}
class SnowCH extends LivingCreature{
    constructor(x, y, index,opp,energy,score,arr){
        super(x, y, index,opp,energy,score,arr);   
    }
    
}