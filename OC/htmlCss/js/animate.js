/**************************Variables***************************/

let pos = 0;
let posV = 0;
var theBox = document.getElementById("box");
var toMoveL = document.getElementById("moveL");
var toMoveR = document.getElementById("moveR");
var toMoveU = document.getElementById("moveU");
var toMoveD = document.getElementById("moveD");
var toUndo = document.getElementById("undo");
var toStatus = document.getElementById("status");
var status = document.getElementById("afficheStatut");
var t = 0;
var limit= "Can't go further!";

/**************************Listeners ************************/
toMoveL.addEventListener("click", moveLeft);
toMoveR.addEventListener("click", moveRight);
toMoveU.addEventListener("click", moveUp);
toMoveD.addEventListener("click", moveDown);
toUndo.addEventListener("click", undo);
toStatus.addEventListener("click", status);
/**************************Méthodes *************************/
    /*Main*/
/*function move(){
    moveRight();
    if (posV <= 150){
        moveDown();
    }
    if (posV >=0){
        moveUp();
    }
    if (pos <=150){
        moveLeft();
    }
    if (pos >=0){   
        moveDown();
    }
}*/

    /*deplacements*/

function moveRight(){
    if(pos >= 150){
        return console.log(limit + "Right");
    } else {
        pos += 37.5;
        box.style.left = pos +"px";
    }
    console.log('pos =' + pos);
}
function moveLeft(){
    if(pos <= 0){
        return console.log(limit + "left");
    } else {
        pos -= 37.5;
        box.style.left = pos +"px";
    } 
    console.log('pos =' + pos);
}

function moveDown(){
    if(posV >= 150){
        return console.log(limit + "down");
    } else {
        posV += 37.5;
        box.style.top= posV+"px";
    } 
    console.log('posV =' + posV);
}

function moveUp(){
    if(posV <= 0){
        return console.log(limit + "up");
    } else {
        posV -= 37.5;
        box.style.top= posV+"px";
    } 
    console.log('posV = ' + posV);
}
function undo(){
    box.style.left      = 0;
    box.style.top       = 0;
    box.style.right     = 0;
    box.style.bottom    = 0;
    pos                 = 0;
    posV                = 0;
    console.log("Pos = " + pos + "\nPosV = " + posV);
}
function status(){
    status.innerHTML = "Pos = " + pos + "<br>PosV = " + posV;
}
/*
var jerem = document.getElementById("jerem");

function jeremf(){
    alert('yo !');
}
jerem.addEventListener("click", jeremf);
jerem.removeEventListener("click", jeremf);
*/