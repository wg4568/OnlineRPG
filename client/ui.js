var Pins = {
	Center: 0,
	BottomLeft: 1,
	BottomRight: 2,
	TopLeft: 3,
	TopRight: 4
}

class Element {
	constructor(pin, offset, width, height) {
		this.pin = pin;
		this.offset = offset;

		this.width = width;
		this.height = height;

		this.layer = null;
	}

	drawFunc(posn) {
		// user defined
	}

	draw() {
		var posn = Vector.Empty;

		if (this.pin == Pins.Center) {
			posn = new Vector((this.layer.width - this.width) / 2, (this.layer.height - this.height) / 2);
			posn = Vector.Add(posn, this.offset);
		}

		if (this.pin == Pins.BottomLeft) {
			posn = new Vector(this.offset.x, this.layer.height - this.offset.y - this.height);
		}

		if (this.pin == Pins.BottomRight) {
			posn = new Vector(this.layer.width - this.offset.x - this.width, this.layer.height - this.offset.y - this.height);
		}

		if (this.pin == Pins.TopLeft) {
			posn = this.offset;
		}

		if (this.pin == Pins.TopRight) {
			posn = new Vector(this.layer.width - this.offset.x - this.width, this.offset.y);
		}

		this.drawFunc(posn);
	}
}

class HealthBar extends Element {
	constructor(pin, offset, width, height, max, bgc="#000000", fgc="#ff0000", value=50, edge=5) {
		super(pin, offset, width, height);
		this.maxValue = max;
		this.value = value;
		this.edge = edge;
		this.bgc = bgc;
		this.fgc = fgc;
	}

	drawFunc(posn) {
		var scaleFactor = this.value / this.maxValue;

		this.layer.context.fillStyle = this.bgc;
		this.layer.rect(posn, this.width, this.height, this.bgc)
		this.layer.rect(Vector.Add(posn, this.edge), (this.width - (this.edge * 2)) * scaleFactor, this.height - (this.edge * 2), this.fgc);
	}
}

class UI extends Layer {
	constructor() {
		super();

		this.elements = [];
	}

	addElement(el) {
		el.layer = this;
		this.elements.push(el);
	}

	draw() {
		this.elements.forEach(function(e) {
			e.draw();
		});
	}
}