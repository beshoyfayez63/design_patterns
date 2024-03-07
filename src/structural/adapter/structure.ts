interface IClient {
	method(data: any): string;
}

class Adapter implements IClient {

	constructor(public adaptee: Service) {}

	method(data: number) {
		const specialData = data.toString();
		return this.adaptee.serviceMethod(specialData);
	}
}

class Service {
	serviceMethod(specialData: string) {
		console.log(specialData, 'special');
		return specialData;
	}
}

class ClientService implements IClient {
	method(data: any): string {
		return `Data is ${data}`;
	}

}

class Client {
	constructor(private adapter: IClient) {}

	useData(data: number) {
		console.log(data);
	}
}

const service = new Service();
const adapter = new Adapter(service);
const client = new Client(adapter);
client.useData(5)

export {}
