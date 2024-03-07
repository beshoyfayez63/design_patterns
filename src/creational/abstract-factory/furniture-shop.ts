abstract class Chair {
	abstract hasLegs(): boolean;
	abstract sitOn(): void;
}
abstract class Sofa {}
abstract class CoffeeTable {}

class VictorianChair extends Chair {
	hasLegs(): boolean {
		return true;
	}

	sitOn(): void {}

}
class ModernChair extends Chair {
	hasLegs(): boolean {
		return false;
	}

	sitOn(): void {}
}

class VictorianSofa extends Sofa {}
class ModernSofa extends Sofa {}

class VictorianCoffeeTable extends CoffeeTable {}
class ModernCoffeeTable extends CoffeeTable {}

abstract class AbstractFactory {
	abstract createChair(): Chair;
	abstract createSofa(): Sofa;
	abstract createCoffeeTable(): CoffeeTable;
}

class ModernFurnitureFactory implements AbstractFactory {
	createChair(): Chair {
		return new ModernChair();
	}

	createCoffeeTable(): CoffeeTable {
		return new ModernCoffeeTable();
	}

	createSofa(): Sofa {
		return new ModernSofa();
	}
}

class VictorianFurnitureFactory implements AbstractFactory {
	createChair(): Chair {
		return new VictorianChair();
	}

	createCoffeeTable(): CoffeeTable {
		return new VictorianCoffeeTable();
	}

	createSofa(): Sofa {
		return new VictorianSofa();
	}
}
