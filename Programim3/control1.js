var side = 15;
var season = prompt("Enter Season");
var matrix = []
var sizeArr = 50;
var arrG = [];
var arrGe = [];
var arrPR = [];
var arrH =  [];
var arrR =[];
var arrSnow = [];
var local_season;

function refill(){
    for(var i = 0;i < matrix.length;i++) {
        for(var j =0; j < matrix[i].length; j++) {
            if(matrix[i][j] == 1) {
                var gr = new Grass(j,i,1);
                arrG.push(gr);
            }
            if(matrix[i][j]==2){
                var grE = new GrassEater(j,i,2,1,5,0,arrGe);
                arrGe.push(grE);
            }
            if(matrix[i][j]==3){
                var PR = new Predators(j,i,3,2,5,0,arrPR);
                arrPR.push(PR);
            }
            if(matrix[i][j]==4){
                var H = new Humans(j,i,4,3,5,0,arrH);
                arrH.push(H)
            }
            if(matrix[i][j]==5){
                var R = new Robots(j,i,5,4,5,0,arrR);
                arrR.push(R);
            }
            if(matrix[i][j]==6){
                var Snow = new SnowCH(j,i,6,1,5,0,arrSnow);
                arrSnow.push(Snow);
            }
        }
    }
    console.log(arrG);
}
function killallCH(){
    for(var i in arrG){
        arrG[i].die();
    }
    for(var j in arrGe){
        arrGe[j].die();
    }
    for(var pr in arrPR){
        arrPR[pr].die();
    }
    for(var h in arrH){
        arrH[h].die();
    }
    for(var r in arrR){
        arrR[r].die();
    }
    for(var s in arrSnow){
        arrSnow[s].die();
    }
}
function statistics(){
    var grasslength = arrG.length;
    grasslength.toString();
    var grassText = "Grass : "+grasslength;
    document.getElementById('grass').innerText  = grassText;


    var grasseaterlength = arrGe.length;
    grasseaterlength.toString();
    var grasseaterText = "GrassEater : " + grasseaterlength;
    document.getElementById('grasseater').innerText = grasseaterText;

    var predatorlength = arrPR.length;
    predatorlength.toString();
    var predatorText = "Predator : "+predatorlength;
    document.getElementById("predator").innerText = predatorText;

    var humanslength = arrH.length;
    humanslength.toString();
    var humansText = "Humans : "+humanslength;
    document.getElementById("humans").innerText = humansText;

    var robotslength = arrR.length;
    robotslength.toString();
    var robotsText = "Robots : "+robotslength;
    document.getElementById("robots").innerText = robotsText;

    var snowLength = arrSnow.length;
    snowLength.toString();
    var snowText = "Snow : "+snowLength;
    document.getElementById("snow").innerText = snowText;
}
function clearALLarr(){
    arrG =[];
    arrGe = [];
    arrPR = [];
    arrH = [];
    arrR = [];
    arrSnow = [];
}
function winter(){
    matrix = [];
    for(var n = 0;n<sizeArr;n++){
       matrix.push([])
       for(var m = 0;m<50;m++){
           var randomnumber = Math.random();
           if(Math.round(randomnumber*7) == 1){
             matrix[n].push(0);
           }
            else if(randomnumber>0.10){
                matrix[n].push(6);
           }
           else{
               matrix[n].push(Math.floor(Math.random()*7));
           }
       }
    }
    local_season = "winter";
    statistics();
    document.getElementById('season').innerText = "Season : Winter";
}
function spring(){
    matrix = [];
    for(var n = 0;n<sizeArr;n++){
        matrix.push([])
        for(var m = 0;m<50;m++){
        var randomnumber = Math.random();
        if(Math.round(randomnumber*6) == 5){
            matrix[n].push(0);
        }
        else if(randomnumber < 0.20){
            matrix[n].push(4);
        }
        else{
            matrix[n].push(Math.floor(Math.random()*5));
        }
    }
    local_season = "spring";
    statistics();
    document.getElementById('season').innerText = "Season : Spring";
}
}
function summer(){
    matrix = [];
    for(var n = 0;n<sizeArr;n++){
        matrix.push([])
        for(var m = 0;m<50;m++){
            var randomnumber = Math.random();
            if(Math.round(randomnumber*6) == 6){
                matrix[n].push(0);
            }else if(randomnumber < 0.10){
                matrix[n].push(3);
            }
            else{
                matrix[n].push(Math.floor(Math.random()*6));
            }
        }
    }
    local_season = "summer";
    statistics();
    document.getElementById('season').innerText = "Season : Summer";
}
function autumn(){
    matrix = [];
    for(var n = 0;n<sizeArr;n++){
        matrix.push([])
        for(var m = 0;m<50;m++){
            var randomnumber = Math.random();
            if(Math.round(randomnumber*6) == 6){
                matrix[n].push(0);
            }else if(randomnumber < 0.10){
                matrix[n].push(3);
            }
            else{
                matrix[n].push(Math.floor(Math.random()*6));
            }
        }
    }
    local_season = "autumn";
    statistics();
    document.getElementById('season').innerText = "Season : Autumn";
}
function setup() {
   frameRate(5);
   if(season == 'winter'){
        winter();
   }
   else if(season=="spring"){
        spring();
   }
   else if(season == "summer"){
        summer();
   }else if(season == "autumn"){
        autumn();
   }else{
        alert("!!Season not found!! \n The matrix is going to be random");
    }
   createCanvas(matrix[0].length * side, matrix.length * side);
   background('#acacac');
   for(var i = 0;i < matrix.length;i++) {
       for(var j =0; j < matrix[i].length; j++) {
           if(matrix[i][j] == 1) {
               var gr = new Grass(j,i,1);
               arrG.push(gr);
           }
           if(matrix[i][j]==2){
               var grE = new GrassEater(j,i,2,1,5,0,arrGe);
               arrGe.push(grE);
           }
           if(matrix[i][j]==3){
               var PR = new Predators(j,i,3,2,5,0,arrPR);
               arrPR.push(PR);
           }
           if(matrix[i][j]==4){
               var H = new Humans(j,i,4,3,5,0,arrH);
               arrH.push(H)
           }
           if(matrix[i][j]==5){
               var R = new Robots(j,i,5,4,5,0,arrR);
               arrR.push(R);
           }
           if(matrix[i][j]==6){
               var Snow = new SnowCH(j,i,6,1,5,0,arrSnow);
               arrSnow.push(Snow);
           }
       }
   }
   console.log(arrG);
}
function draw() {
  if(season == local_season){
    statistics();
  }  
  else if(season == 'winter'){
    winter();
    killallCH();
    clearALLarr();
    refill();
  }else if(season=="spring"){
    spring();
    killallCH();
    clearALLarr();
    refill();
  }else if(season == "summer"){
    summer();
    killallCH();
    clearALLarr();
    refill();
  }else if(season == "autumn"){
    autumn();
    killallCH();
    clearALLarr();
    refill();
  }
   for (var y = 0; y < matrix.length; y++) {
       for (var x = 0; x < matrix[y].length; x++) {
           if (matrix[y][x] == 1) {
               if(local_season=="winter"){
                    fill("#B4CEB7");
               }else if(local_season=="spring"){
                    fill("green");
               }else if(local_season=="summer"){
                    fill("#E7EE9C");
               }else{
                    fill("#EEC79C");
               }
           }
           else if (matrix[y][x] == 0) {
               fill("#acacac");
           }
           else if (matrix[y][x] == 2){
               fill("orange");
           }
           else if (matrix[y][x] == 3){
               fill("purple");
           }
           else if(matrix[y][x] == 4){
               fill("black");
           }
           else if(matrix[y][x]==5){
               fill("blue");
           }
           else if(matrix[y][x]==6){
               fill("white");
           }
           rect(x * side, y * side, side, side);
           }
       }
    for(var i in arrG){
        arrG[i].mul();

    }
   for(var j in arrGe){
        arrGe[j].move();
        arrGe[j].eat();
   }
   for(var p in arrPR){
        arrPR[p].move();
        arrPR[p].eat();
   }
   for(var h in arrH){
        arrH[h].move();
       arrH[h].eat();
   }
   for(var r in arrR){
        arrR[r].move();
        arrR[r].eat();
   }
   for(var snow in arrSnow){
        arrSnow[snow].move();
        arrSnow[snow].eat();
   }
}
var local_themecolor = "white";
function change_theme_color(){
   if(local_themecolor=="white"){
       document.body.style.backgroundColor = "#B0BDBC ";
       local_themecolor = "#B0BDBC ";
   }else{
       document.body.style.backgroundColor = "white";
       local_themecolor = "white";
   }
}
var music = new Audio("music.mp3");
function play_music(){
   music.play();
}
function pause_music(){
   music.pause();
   music.currentTime = O;
}
function pauseGame(){
   alert("If you click 'OK' the game will Start again")
}
function bomb(index){
   for(var y_cordinates =0;y_cordinates<matrix.length;y_cordinates++){
       for(var x_cordinates=0;x_cordinates<matrix[y_cordinates].length;x_cordinates++){
           matrix[y_cordinates][x_cordinates] = index;
       }
   }
}
function bomb_conditions(){
   var random_ch = prompt("Enter character that is going to explode");
   if(random_ch=="grass"){
       bomb(indexs=1);
   }
   else if(random_ch=="grasseater"){
       bomb(index=2);
   }
   else if(random_ch=="predator"){
       bomb(index=3);
   }
   else if(random_ch=="humans"){
       bomb(index=4);
   }
   else if(random_ch=="robots"){
       bomb(index=5);
   }
   else if(random_ch=="snow"){
       bomb(index=6);
   }
   else{
       alert("Character not found");
   }
}
function illnes(array, index){
    for(var i=0;i<matrix.length;i++){
        for(var j=0;j<matrix[i].length;j++){
            if(matrix[i][j]==index){
                matrix[i][j]=0;
            }
        }
    }
    for(var ch in array){
       array[ch].die()
    }
    array=[];

}
function illnes_conditons(){
   var choose_ch_for_illnes = prompt("Enter the character that is going to get an flu");
   if(choose_ch_for_illnes=="grass"){
       illnes(arrG, 1);
   }else if(choose_ch_for_illnes == "grasseater"){
       illnes(arrGe, 2);
   }else if(choose_ch_for_illnes=="predator"){
       illnes(arrPR, 3);
   }else if(choose_ch_for_illnes=="human"){
       illnes(arrH, 4);
   }else if(choose_ch_for_illnes=="robot"){
       illnes(arrR, 5);
   }else if(choose_ch_for_illnes=="snow"){
       illnes(arrSnow, 6)
   }
}
function resizeGrid(){
   alert("Grid is Resizing");
}
function clearGrid(){
   for(var Y=0;Y<matrix.length;Y++){
       for(var X = 0;X<matrix[Y].length;X++){
           matrix[Y][X]=0;
       }
   }
   killallCH();
   clearALLarr();

}
function seed(){
    season = prompt("Choose season: ");
    if(season=="winter"){
        winter();
        refill();
        
    }
    else if(season=="spring"){
        spring();
        refill();
    }
    else if(season=="summer"){
        summer();
        refill();
    }
    else if(season=="autumn"){
        autumn();
        refill();
    }
    else{
        alert("Season not found. Try again");
    }
    
}
function changeSeason(){
   season = prompt('Enter season: ');
}
function showData(){
    var length_grass = arrG.length
    console.log(length_grass)
    var grassText = "Grass  " + length_grass;
    document.getElementById('grass').innerText = grassText;
}