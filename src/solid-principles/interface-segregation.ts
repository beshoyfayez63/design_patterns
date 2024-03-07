/**
 * Problem
interface CloudProvider {
	storeFile(name: string): void;
	getFile(name: string): void;
	createServer(region: any): void;
	liteServes(region: any): any;
	getCDNAddress(): any;
}

class Amazone implements CloudProvider {
	createServer(region: any): void {
	}

	getCDNAddress(): any {
	}

	getFile(name: string): void {
	}

	liteServes(region: any): any {
	}

	storeFile(name: string): void {
	}
}

	Dropbox will not implement createServe, listServer, getCDNAddress
class Dropbox implements CloudProvider {
	createServer(region: any): void {
	}

	getCDNAddress(): any {
	}

	getFile(name: string): void {
	}

	liteServes(region: any): any {
	}

	storeFile(name: string): void {
	}
}
 */

/**
 * Solve
 */

interface CloudHostingProvider {
	createServer(region: any): void;
	listServers(region: any): void;
}
interface CDNProvider {
	getCDNAddress(): any;
}
interface CloudStorageProvider {
	storeFile(name: string): void
	getFile(name: string): any;
}

class Amazon implements CloudHostingProvider, CDNProvider, CloudStorageProvider {
	createServer(region: any): void {
	}

	getCDNAddress(): any {
	}

	getFile(name: string): any {
	}

	listServers(region: any): void {
	}

	storeFile(name: string): void {
	}
}

class Dropbox implements CloudStorageProvider {
	getFile(name: string): any {
	}

	storeFile(name: string): void {}
}
