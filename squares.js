

let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random()*21)+30; //30-50
let topZ = 0;
document.querySelector('#add').onclick = addSquare;
document.querySelector(`#change`).onclick= changeColors;

function addSquare(){
    let square = document.createElement("div");
    square.onclick = function(){
    if(square.style.zIndex == topZ && topZ > 0){
        square.remove();
    }
    else{
        topZ++;
        square.style.zIndex = topZ;
    }
    };
    square.className = "square";
    let size = parseInt(Math.random()*11)+45;
    square.style.width = size + "px";
    square.style.height = size +  "px";
    square.style.backgroundColor=getRandomColor();
    square.style.top = parseInt(Math.random()*(300-size))+"px";
    square.style.left = parseInt(Math.random()*(700-size))+"px";
    squareArea.append(square);
}

function changeColors(){
    let squares = document.querySelectorAll(".square");
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = getRandomColor();
    }
}

for(let i = 0; i < squareCount; i++){
    addSquare();
}

function getRandomColor(){
    let possibleLetters = "0123456789ABCDEF";
    let color="#";
    //Do something to make a random value????
    for(let i = 0;i <6;i++){
        let position = parseInt(Math.random()*
        possibleLetters.length)
        color+=possibleLetters.charAt(position);
    }
    return color;
}