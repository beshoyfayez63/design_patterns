interface IRoundPeg {
	getRadius(): number;
}

class RoundPeg implements IRoundPeg {
	constructor(private radius: number){
	}
	public getRadius(): number{
		return this.radius;
	}
}

class SquarePeg {
	constructor(private width: number) {}

	getWidth() {
		return this.width;
	}
}


class SquarePegAdapter implements IRoundPeg {

	constructor(private squarePeg: SquarePeg) {}

	getRadius() {
		return this.squarePeg.getWidth() * Math.sqrt(2) / 2;
	}
}

class RoundHole {
	constructor(private radius: number) {}

	canFit(peg: IRoundPeg) {
		return peg.getRadius() >= this.radius;
	}
}

const hole = new RoundHole(5);
const rPeg = new RoundPeg(5);
console.log(hole.canFit(rPeg)); // true

const smallPeg = new SquarePeg(5)
const largePeg = new SquarePeg(10);
// hole.canFit(smallPeg) // Error

const smallPegAdapter = new SquarePegAdapter(smallPeg);
const largePegAdapter = new SquarePegAdapter(largePeg);
console.log(hole.canFit(smallPegAdapter)); // false
console.log(hole.canFit(largePegAdapter))// true;

export {}
