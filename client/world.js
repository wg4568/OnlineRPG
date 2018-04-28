class World extends Layer {
	constructor() {
		super();

		this.posn = Vector.Empty;
	}

	worldToCanvas(posn) {
		return Vector.Subtract(posn, this.posn, new Vector(-this.width / 2, -this.height / 2));
	}

	canvasToWorld(posn) {
		return Vector.Add(this.posn, posn, new Vector(-this.width / 2, -this.height / 2));
	}

	square(posn, size, color) {
		var cposn = this.worldToCanvas(posn)

		this.context.fillStyle = color;
		this.context.fillRect(cposn.x, cposn.y, size, size);
	}
	
	sprite(posn, sprite, rotation=0, scale=0) {
		var cposn = this.worldToCanvas(posn)
		sprite.drawOnLayer(this, cposn);
	}
}