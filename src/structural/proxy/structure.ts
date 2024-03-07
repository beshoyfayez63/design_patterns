
/**
 * step1
 * The Service Interface declares the interface of the Service. The proxy must follow this interface to be able to disguise itself as a service object.
 */
interface IService {
  operation(): void;
}
/**
 * step2
 * The Service is a class that provides some useful business logic.
 */
class Service implements IService {
  operation(): void {
    console.log('Service Operation...');    
  }
}

/**
 * step3
 * The Proxy class has a reference field that points to a service object. After the proxy finishes its processing (e.g., lazy initialization, logging, access control, caching, etc.), it passes the request to the service object.
Usually, proxies manage the full lifecycle of their service objects.
 */
class ProxyPattern implements IService {
  constructor(public service: IService) {}

  operation(): void {
    if(this.checkAccess()) this.service.operation();
  }

  checkAccess(): boolean {
    return true;
  }
}

/**
 * step4
 * The Client should work with both services and proxies via the same interface. This way you can pass a proxy into any code that expects a service object.
 */
class Client {}

export {}