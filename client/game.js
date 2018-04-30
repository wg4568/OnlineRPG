var canvas = new Canvas("game", fullscreen=true);
var controls = new Controls(canvas.div);

// Layers
var world = new World();
var selector = new Layer();
var entity = new World();
var ui = new UI();

var health_bar = new HealthBar(Pins.TopRight, new Vector(30, 30), 300, 40, 100, bgc="#000000", fgc="#ff0000", value=100, edge=5);
var mana_bar = new HealthBar(Pins.TopRight, new Vector(30, 80), 300, 40, 100, bgc="#000000", fgc="#0000ff", value=100, edge=5);

ui.addElement(health_bar);
ui.addElement(mana_bar);

canvas.addLayer(world);
canvas.addLayer(selector);
canvas.addLayer(entity);
canvas.addLayer(ui);

var TILESIZE = 64;
var SPEED = 5;

world_data = new Grid(100, 100, generator=function(posn) {
	return 0;
});

world.posn = new Vector(1400, 1400);

var greyPosn = null;

var p = new Vector(1216, 1280);

Timer.Start(function() {

	ui.clear();
	selector.clear();
	entity.clear();

	var c = false;
	if (controls.keyHeld(Keycodes.LEFT))  world.posn.x -= SPEED; c = true;
	if (controls.keyHeld(Keycodes.RIGHT)) world.posn.x += SPEED; c = true;
	if (controls.keyHeld(Keycodes.UP))    world.posn.y -= SPEED; c = true;
	if (controls.keyHeld(Keycodes.DOWN))  world.posn.y += SPEED; c = true;

	var xmin = Math.floor((world.posn.x - (world.width / 2)) / TILESIZE) - 1;
	var xmax = Math.floor((world.posn.x + (world.width * 2)) / TILESIZE) + 1;
	var ymin = Math.floor((world.posn.y - (world.height / 2)) / TILESIZE) - 1;
	var ymax = Math.floor((world.posn.y + (world.height * 2)) / TILESIZE) + 1;

	entity.posn = world.posn;

	if (xmin < 0) xmin = 0;
	if (ymin < 0) ymin = 0;

	if (c) {
		world_data.iterateRange(xmin, xmax, ymin, ymax, function(p, v) {

			var world_posn = Vector.Multiply(p, TILESIZE);
			var sprite = SpriteMappings[v];

			world.sprite(world_posn, sprite);

		});		
	}

	var selPosn = world.canvasToWorld(controls.mousePos);
	var selPosn = new Vector(
		Math.floor(selPosn.x / TILESIZE) * TILESIZE,
		Math.floor(selPosn.y / TILESIZE) * TILESIZE,
	)


	selector.sprite(world.worldToCanvas(selPosn), SelectorRed);

	if (controls.mousePressed(Mousecodes.LEFT)) {
		greyPosn = selPosn;
	}

	if (greyPosn != null) {
		selector.sprite(world.worldToCanvas(greyPosn), SelectorGrey);
	}
	
	p.x += 1;
	// entity.sprite(p, PlayerWalkRight);

	ui.draw();

	controls.frame();

});
