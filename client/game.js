var canvas = new Canvas("game", fullscreen=true);
var world = new Layer();
var entity = new Layer();
var ui = new Layer();

world_data = new Grid(100, 100, generator=function(posn) {
	return Helpers.RandomInt(0, 255);
});

canvas.addLayer(world);
canvas.addLayer(entity);
canvas.addLayer(ui);

var c = Color.RandomNeon;
var x = 10;

setInterval(function() {

	world_data.iterate(function(p, v) {
		c.hue = Helpers.RandomInt(0, 255);
		world.square(Vector.Multiply(p, x), x, c.formatHEX())
	});

}, 1000 / 30);