interface Product {
	doStuff(): void;
}

class ProductA implements Product {
	doStuff() {}
}

class ProductB implements Product {
	doStuff() {}
}

abstract class Creator {
	someOperation() {}
	abstract createProduct(): Product;
}

class CreatorA extends Creator {
	createProduct() {
		return new ProductA();
	}
}

class CreatorB extends Creator {
	createProduct() {
		return new ProductB();
	}
}

export {}
