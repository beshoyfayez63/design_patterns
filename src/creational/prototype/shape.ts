abstract class Shape {
	x: number;
	y: number;
	color: string;

	protected constructor(source: Shape) {
		this.x = source.x;
		this.y = source.y;
		this.color = source.color;
	}

	abstract clone(): Shape;
}

class Rectangle extends Shape {
	width: number;
	height: number;
	constructor(source: Rectangle) {
		super(source);
		this.width = source.width;
		this.height = source.height;
	}

	clone(): Shape {
		return new Rectangle(this);
	}
}
