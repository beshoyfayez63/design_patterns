class Order {
	lineItems: any[] = [];

	constructor(private shipping: Shipping) {}

	getTotalWeight() {}

	setShippingType() {}

	getShippingCost() {
		return this.shipping.getCost(this);
	}

	getShippingDate() {
		return this.shipping.getDate(this)
	}
}

interface Shipping {
	getCost(order: Order): number;
	getDate(order: Order): Date;
}

class Ground implements Shipping {
	getCost(order: Order): number {
		return 5;
	}

	getDate(order: Order): Date {
		return new Date();
	}
}

class Air implements Shipping {
	getCost(order: Order): number {
		return 10;
	}
	getDate(order: Order): Date {
		return new Date('1/1/2024');
	}
}
// may be to get location from Google Maps and set it in ground cass to calc Shipping details
const ground = new Ground()
const order = new Order(new Ground());
