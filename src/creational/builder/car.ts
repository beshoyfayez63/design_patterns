interface Builder {
	reset(): void;
	setSeats(number: number): void;
	setEngine(engine: any): void;
	setTripComputer(): void;
	setGPS(): void;
}

class CardBuilder implements Builder {

	car!: Car;

	constructor() {
		this.reset();
	}

	reset(): void {
		this.car = new Car();
	}

	setEngine(engine: any): void {
		this.car.setEngine(engine)
	}

	setGPS(): void {}

	setSeats(number: number): void {}

	setTripComputer(): void {}

	getResult(): Car {
		const car = this.car;
		this.reset();
		return car;
	}
}

class ManualBuilder implements Builder {

	manual = new Manual();

	reset(): void {
		this.manual = new Manual();
	}

	setEngine(engine: any): void {
	}

	setGPS(): void {
	}

	setSeats(number: number): void {
	}

	setTripComputer(): void {
	}

	getResult() {
		return this.manual
	}
}

class Car {
	private engine: any;
	setEngine(engine: any) {
		this.engine = engine;
	}
}

class Manual {}


class Director {
	makeSUV(builder: Builder) {}

	makeSportsCar(builder: Builder) {
		builder.reset();
		builder.setSeats(2);
		builder.setEngine(new SportEngine())
		builder.setTripComputer();
		builder.setGPS();
	}
}

class SportEngine {
	power = 1;
}

const director = new Director();
const builder: CardBuilder = new CardBuilder();
director.makeSportsCar(builder);
const car = builder.getResult();

console.log(car);
