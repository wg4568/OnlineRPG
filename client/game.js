var canvas = new Canvas("game", fullscreen=true);
var controls = new Controls(canvas.div);

// Layers
var world = new World();
var entity = new Layer();
var ui = new Layer();

canvas.addLayer(world);
canvas.addLayer(entity);
canvas.addLayer(ui);

world_data = new Grid(100, 100, generator=function(posn) {
	return 1;
});

var c = Color.RandomNeon;
var x = 10;

setInterval(function() {

	var mousePos = world.canvasToWorld(controls.mousePos);
	var c = "red";

	if (controls.mouseHeld(Mousecodes.LEFT)) c = "blue";

	world.clear();
	world.square(mousePos, 50, c);

}, 1);
