class Logistics {
	planDelivery() {}

	createTransport() {}
}

class RoadLogistics extends Logistics {
	createTransport(): Transport {
		return new Truck()
	}
}

class SeaLogistics extends Logistics {
	createTransport(): Transport {
		return new Ship();
	}
}

interface Transport {
	deliver(): void;
}

class Truck implements Transport {
	deliver() {}
}

class Ship implements Transport {
	deliver() {}
}
export {}
