var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

///////////

document.addEventListener("keydown",stimulateEruption);
document.addEventListener("keyup",function(e) {
	keys[e.keyCode] = false;
});

var eruptionArray = [];
var keys = [];

function createEruptions() {

	for(var i=0;i<canvas.width;i+=5) {
		var eruption = {
			x: Math.floor(i),
			y: baseline.y,
			color: baseline.color,
			height: Math.floor(Math.random()*200 + 100),
			width: 5,
			display: 0
		};

		eruptionArray.push(eruption);
	}
}

var baseline = {
	x: 0,
	y: 400,
	color: "#ff00aa",
	len: canvas.width,
	width: 5
};

///////////

function drawBase() {
	ctx.beginPath();
	ctx.strokeStyle = baseline.color;
	ctx.moveTo(baseline.x,baseline.y);
	ctx.lineTo(baseline.len,baseline.y);
	ctx.lineWidth = baseline.width;
	ctx.closePath();
	ctx.stroke();
}

function drawEruption(i) {

	ctx.beginPath();
	ctx.strokeStyle = eruptionArray[i].color;
	ctx.moveTo(eruptionArray[i].x,eruptionArray[i].y);
	ctx.lineTo(eruptionArray[i].x,eruptionArray[i].y - eruptionArray[i].height);
	ctx.lineWidth = eruptionArray[i].width;
	ctx.closePath();
	ctx.stroke();
}

function stimulateEruption(e) {
	keys[e.keyCode] = true;
	eruptionArray[e.keyCode].height = Math.floor(Math.random()*100+100);
}

function gradualFall(i) {

	eruptionArray[i].height *= 0.9;

}

function render() {
	//eruptionArray = [];
	//createEruptions();
	for(var i=0;i<eruptionArray.length;i++) {
		if(eruptionArray[i].height == 1) {
			eruptionArray[i].height++;
		}
	}

	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawBase();
	for(var i=0;i<eruptionArray.length;i++) {
		if(eruptionArray[i].height == 0) {
			eruptionArray[i].height++;	
			drawEruption(i);
		} else {
			gradualFall(i);
			drawEruption(i);
		}
	}
}

createEruptions();
setInterval(render,50);