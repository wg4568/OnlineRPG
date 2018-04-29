var Sprites = {
	Grass: new Sprite.Image("sprites/grass.png"),
	Dirt: new Sprite.Image("sprites/dirt.png"),
	DirtCornerTL: new Sprite.Image("sprites/dirtcornerTL.png"),
	DirtCornerTR: new Sprite.Image("sprites/dirtcornerTR.png"),
	DirtCornerBL: new Sprite.Image("sprites/dirtcornerBL.png"),
	DirtCornerBR: new Sprite.Image("sprites/dirtcornerBR.png"),
	DirtCorderT: new Sprite.Image("sprites/dirtborderT.png"),
	DirtCorderB: new Sprite.Image("sprites/dirtborderB.png"),
	DirtCorderL: new Sprite.Image("sprites/dirtborderL.png"),
	DirtCorderR: new Sprite.Image("sprites/dirtborderR.png")
};

var SelectorSpritesRed = [
	new Sprite.Image("sprites/selector2/005.png"),
	new Sprite.Image("sprites/selector2/004.png"),
	new Sprite.Image("sprites/selector2/003.png"),
	new Sprite.Image("sprites/selector2/002.png"),
	new Sprite.Image("sprites/selector2/001.png"),
	new Sprite.Image("sprites/selector2/000.png")
];

var SelectorSpritesGrey = [
	new Sprite.Image("sprites/selector/005.png"),
	new Sprite.Image("sprites/selector/004.png"),
	new Sprite.Image("sprites/selector/003.png"),
	new Sprite.Image("sprites/selector/002.png"),
	new Sprite.Image("sprites/selector/001.png"),
	new Sprite.Image("sprites/selector/000.png")
];

var SelectorRed = new Sprite.Animation(SelectorSpritesRed, 3);
var SelectorGrey = new Sprite.Animation(SelectorSpritesGrey, 3);

SelectorSpritesRed.forEach(function(s) {
	s.onLoad = function() {
		s.permaScale(4);
		SelectorRed.render();
	}
})

SelectorSpritesGrey.forEach(function(s) {
	s.onLoad = function() {
		s.permaScale(4);
		SelectorGrey.render();
	}
})

var SpriteMappings = [
	Sprites.Grass,
	Sprites.Dirt,
	Sprites.DirtCornerTL,
	Sprites.DirtCornerTR,
	Sprites.DirtCornerBL,
	Sprites.DirtCornerBR,
	Sprites.DirtCorderT,
	Sprites.DirtCorderB,
	Sprites.DirtCorderL,
	Sprites.DirtCorderR
];

SpriteMappings.forEach(function(s) {
	s.onLoad = function() {
		s.permaScale(4);
	};
});


var LoaderPlayerLeft = [
	new Sprite.Image("sprites/player/left/3.png"),
	new Sprite.Image("sprites/player/left/2.png"),
	new Sprite.Image("sprites/player/left/1.png")
];

var LoaderPlayerRight = [
	new Sprite.Image("sprites/player/right/3.png"),
	new Sprite.Image("sprites/player/right/2.png"),
	new Sprite.Image("sprites/player/right/1.png")
];

var LoaderPlayerUp = [
	new Sprite.Image("sprites/player/backwards/3.png"),
	new Sprite.Image("sprites/player/backwards/2.png"),
	new Sprite.Image("sprites/player/backwards/1.png")
];

var LoaderPlayerDown = [
	new Sprite.Image("sprites/player/forwards/3.png"),
	new Sprite.Image("sprites/player/forwards/2.png"),
	new Sprite.Image("sprites/player/forwards/1.png")
];

var PlayerStandLeft  = LoaderPlayerLeft[2];
var PlayerStandRight = LoaderPlayerRight[2];
var PlayerStandUp    = LoaderPlayerUp[2];
var PlayerStandDown  = LoaderPlayerDown[2];

var PlayerWalkLeft = new Sprite.Animation(LoaderPlayerLeft, 7);
var PlayerWalkRight = new Sprite.Animation(LoaderPlayerRight, 7);
var PlayerWalkUp = new Sprite.Animation(LoaderPlayerUp, 7);
var PlayerWalkDown = new Sprite.Animation(LoaderPlayerDown, 7);

LoaderPlayerLeft.forEach(function(s) {
	s.onLoad = function() {
		s.permaScale(2);
		PlayerWalkLeft.render();
	}
});

LoaderPlayerRight.forEach(function(s) {
	s.onLoad = function() {
		s.permaScale(2);
		PlayerWalkRight.render();
	}
});

LoaderPlayerUp.forEach(function(s) {
	s.onLoad = function() {
		s.permaScale(2);
		PlayerWalkUp.render();
	}
});

LoaderPlayerDown.forEach(function(s) {
	s.onLoad = function() {
		s.permaScale(2);
		PlayerWalkDown.render();
	}
});