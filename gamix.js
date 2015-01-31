var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

///////////
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

function drawErection() {

	var erection = {
		x: Math.floor(Math.random()*(canvas.width-1) + 1),
		y: baseline.y,
		color: baseline.color,
		height: Math.floor(Math.random()*100 + 1),
		width: 2
	};

	ctx.beginPath();
	ctx.strokeStyle = erection.color;
	ctx.moveTo(erection.x,erection.y);
	ctx.lineTo(erection.x,erection.y - erection.height);
	ctx.lineWidth = erection.width;
	ctx.closePath();
	ctx.stroke();
}

function render() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawBase();
	drawErection();
}

setInterval(render,10);