
// step1
interface Builder<T = any> {
	reset(): void;
	buildStepA(): void;
	buildStepB(): void;
	buildStepZ(): void;
	getResult(): T;
}

// step2
class Builder1 implements Builder<Product1> {

	result = new Product1();

	buildStepA(): void {}

	buildStepB(): void {
		this.result?.setFeatureB();
	}

	buildStepZ(): void {}

	reset(): void {
		this.result = new Product1();
	}

	getResult(): Product1 {
		return this.result;
	}
}

class Builder2 implements Builder<Product2> {

	private result = new Product2();

	buildStepA(): void {}

	buildStepB(): void {
		this.result.setFeatureB();
	}

	buildStepZ(): void {
	}

	reset(): void {
		this.result = new Product2();
	}

	getResult() {
		return this.result;
	}
}

// step3
class Product1 {
	setFeatureB() {}
}

class Product2 {
	setFeatureB() {}
}

//step4
class Director {

	constructor(private builder: Builder) {}

	changeBuilder(builder: Builder) {
		this.builder = builder;
	}

	make(type?: any) {
		this.builder.reset();
		if(type === 'simple') this.builder.buildStepA();
		else {
			this.builder.buildStepB();
			this.builder.buildStepZ();
		}
	}
}

// step5
const b1 = new Builder1();
const director = new Director(b1);
director.make();
const product = b1.getResult();

export {}
