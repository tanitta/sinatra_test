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

io.push("init", "");
onload=function(){
	var img = new Image();
	img.src = "test.png";
	context.drawImage(img,10,10);
}
function down(){
	is_down = true;
}
function test(e) {
	canvasRect = canvas.getBoundingClientRect();
	if(is_down){
		io.push("hello", pos_x+","+pos_y+","+(e.clientX-canvasRect.left)+","+(e.clientY-canvasRect.top));
	}
	pos_x = e.clientX-canvasRect.left;
	pos_y = e.clientY-canvasRect.top;

}
function up(){
	is_down = false;
}



function draw(x1,y1,x2,y2,width,color){
	context.lineWidth = width;
	context.strokeStyle = color;
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
}

io.on("echo", function(message){
   p = message.split(",");
   draw(parseFloat(p[0]),parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3]),1,"#000000");
});
