var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

///////////

var eruptionArray = [];

function createEruptions() {

	for(var i=0;i<canvas.width;i+=5) {
		var eruption = {
			x: Math.floor(i),
			y: baseline.y,
			color: baseline.color,
			height: Math.floor(Math.random()*200 + 1),
			width: 5
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

	//gradualFall();
}

function gradualFall() {
	for(var i=0;i<eruptionArray.length;i++) {
		eruptionArray[i].height *= 0.98;
	}
}

function render() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawBase();
	for(var i=0;i<eruptionArray.length;i++) {
		drawEruption(i);
	}
}

createEruptions();
setInterval(render,17);