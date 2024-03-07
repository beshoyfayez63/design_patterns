interface Implementation {
	method1(): void;
	method2(): void;
	method3(): void;
	method4(): void;
}

class ConcreteImplementation implements Implementation {
	method1(): void {
	}

	method2(): void {
	}

	method3(): void {
	}

	method4() {
	}
}

class Abstraction {
	constructor(protected imp: Implementation) {
	}

	feature1() {
		this.imp.method1();
	}

	feature2() {
		this.imp.method2();
	}
}

class RefinedAbstraction extends Abstraction {
	featureN() {
		this.imp.method4();
	}
}


function client() {
	const imp = new ConcreteImplementation();
	const abs = new Abstraction(imp);
	abs.feature1()
}
