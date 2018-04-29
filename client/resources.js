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