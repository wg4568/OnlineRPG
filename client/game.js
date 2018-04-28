var canvas = new Canvas("game", fullscreen=true);
var controls = new Controls(canvas.div);

// Layers
var world = new World();
var entity = new Layer();
var ui = new Layer();

canvas.addLayer(world);
canvas.addLayer(entity);
canvas.addLayer(ui);

var TILESIZE = 16;

world_data = new Grid(100, 100, generator=function(posn) {
	return Helpers.RandomInt(0, 10);
});

var c = Color.RandomNeon;
var x = 10;

setInterval(function() {

	world.fill(c.formatHEX());

}, 1);
