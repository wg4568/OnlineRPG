var canvas = new Canvas("game", fullscreen=true);
var controls = new Controls(canvas.div);

// Layers
var world = new World();
var entity = new Layer();
var ui = new Layer();

canvas.addLayer(world);
canvas.addLayer(entity);
canvas.addLayer(ui);

var TILESIZE = 64;
var SPEED = 5;

world_data = new Grid(100, 100, generator=function(posn) {
	return 0;
	// return Helpers.RandomInt(0, 10);
});

world.posn = new Vector(1400, 1400);

Timer.Start(function() {

	if (controls.keyHeld(Keycodes.LEFT))  world.posn.x -= SPEED;
	if (controls.keyHeld(Keycodes.RIGHT)) world.posn.x += SPEED;
	if (controls.keyHeld(Keycodes.UP))    world.posn.y -= SPEED;
	if (controls.keyHeld(Keycodes.DOWN))  world.posn.y += SPEED;

	var xmin = Math.floor((world.posn.x - (world.width / 2)) / TILESIZE) - 1;
	var xmax = Math.floor((world.posn.x + (world.width * 2)) / TILESIZE) + 1;
	var ymin = Math.floor((world.posn.y - (world.height / 2)) / TILESIZE) - 1;
	var ymax = Math.floor((world.posn.y + (world.height * 2)) / TILESIZE) + 1;

	if (xmin < 0) xmin = 0;
	if (ymin < 0) ymin = 0;

	world_data.iterateRange(xmin, xmax, ymin, ymax, function(p, v) {

		var world_posn = Vector.Multiply(p, TILESIZE);
		var sprite = SpriteMappings[v];

		world.sprite(world_posn, sprite);

	});

	var selPosn = world.canvasToWorld(controls.mousePos);
	var selPosn = new Vector(
		Math.floor(selPosn.x / TILESIZE) * TILESIZE,
		Math.floor(selPosn.y / TILESIZE) * TILESIZE,
	)

	SelectorRed.draws = SelectorGrey.draws;
	if (controls.mouseHeld(Mousecodes.LEFT)) {
		world.sprite(selPosn, SelectorRed);
		SelectorGrey.draws = SelectorRed.draws;
	} else {
		world.sprite(selPosn, SelectorGrey);
		SelectorRed.draws = SelectorGrey.draws;
	}

});
