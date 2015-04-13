io = new RocketIO().connect();
var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

context.strokeStyle = "#000";
context.fillStyle = "#F66";
document.addEventListener('mousedown', down);
document.addEventListener('mousemove', test);
document.addEventListener('mouseup', up);
var is_down = false;
var pos_x = 0;
var pos_y = 0;
context.lineWidth = 4;
function down(){
	context.moveTo(pos_x, pos_y);
	is_down = true;
}
function test(e) {
	canvasRect = canvas.getBoundingClientRect();
	if(is_down){
		context.lineTo(e.clientX-canvasRect.left, e.clientY-canvasRect.top);
		context.stroke();
		io.push("hello", pos_x+","+pos_y+","+(e.clientX-canvasRect.left)+","+(e.clientY-canvasRect.top));
	}
	pos_x = e.clientX-canvasRect.left;
	pos_y = e.clientY-canvasRect.top;

}
function up(){
	is_down = false;
}


