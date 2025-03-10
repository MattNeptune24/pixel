const character = document.getElementById("character")
let x = 50;
let y = 50;
let vx= 0;
let vy = 0;

function update(){
    character.getContext('2d').clearRect(0,0,character.clientWidth,character.height)
    character.getContext('2d').fillStyle = "rgb(100,100,100)"
    x += vx
    y += vy
    character.getContext('2d').fillRect(x,y,30,30)
    requestAnimationFrame(update)
}

update()

const tileW = 45;
const tileH = 45;
const gridRows = 15;
const gridColumns = 15;

var color0 = "rgb(175,175,175)"
var color1 = "rgb(150,150,150)"
var color7 = "rgb(200,200,200)"

const canvas0 = document.getElementById('custom1').getContext ('2d');
let map0 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,2,0,0,0,0,0,0,0,0,0,0,0,3,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const updateAll = () =>{
    createMap(map0,canvas0);
    window. requestAnimationFrame(updateAll);
}

window.onload = () => {
    window. requestAnimationFrame(updateAll);
}

const createMap = (map,canvas) => {
    for (let eachRow = 0; eachRow < gridRows; eachRow++) {
        for(let eachColumn = 0; eachColumn < gridColumns; eachColumn++) {
            let arrayIndex = eachRow * gridRows + eachColumn;
            if(map[arrayIndex] === 0 || map[arrayIndex] === "0") {
                canvas.fillStyle = color0
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
            if(map[arrayIndex] === 1 || map[arrayIndex] === "1") {
                canvas.fillStyle = color1
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
            if(map[arrayIndex] === 2 || map[arrayIndex] === "2") {
                canvas.fillStyle = "rgb(125,225,125)"
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
            if(map[arrayIndex] === 3 || map[arrayIndex] === "3") {
                canvas.fillStyle = "rgb(225,125,125)"
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
            if(map[arrayIndex] === 4 || map[arrayIndex] === "4") {
                canvas.fillStyle = "rgb(225,150,100)"
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
            if(map[arrayIndex] === 5 || map[arrayIndex] === "5") {
                canvas.fillStyle = "rgb(125,200,250)"
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
            if(map[arrayIndex] === 6 || map[arrayIndex] === "6") {
                canvas.fillStyle = "rgb(150,125,200)"
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
            if(map[arrayIndex] === 7 || map[arrayIndex] === "7") {
                canvas.fillStyle = color7
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
        }
    }
}

document.getElementById("button1").onclick = function(){
    var mapData = document.getElementById("mapData").value;
    var color0Text = document.getElementById("text0").value;
    var color1Text = document.getElementById("text1").value;
    var color7Text = document.getElementById("text7").value;
    mapData = mapData.split(",")
    color0 = color0Text
    color1 = color1Text
    color7 = color7Text
    map0 = mapData
}
