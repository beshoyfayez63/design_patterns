// not completed.

class Prototype {
	clone(): Prototype {
		return this;
	}
}

class ConcretePrototype extends Prototype {
	field1: any;

	constructor(public prototype: Prototype) {
		super();
	}

	clone(): Prototype {
		return new ConcretePrototype(this)
	}
}

const proto = new Prototype();
const copy = new ConcretePrototype(proto)

export {}
