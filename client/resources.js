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