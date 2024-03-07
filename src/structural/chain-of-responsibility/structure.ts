/**
 * Step 1
 * The Handler declares the interface, common for all concrete handlers. It usually contains just a single method for handling requests, but sometimes it may also have another method for setting the next handler on the chain.
 */

interface Handler<T = any> {
  setNext(h: Handler): void;
  handle(request: T): void
}

/**
 * Step 2
 * The Base Handler is an optional class where you can put the boilerplate code that’s common to all handler classes.
 * Usually, this class defines a field for storing a reference to the next handler. The clients can build a chain by passing a handler to the constructor or setter of the previous handler. The class may also implement the default handling behavior: it can pass execution to the next handler after checking for its existence.
 */
abstract class BaseHandler implements Handler {
  next?: Handler;
  setNext(h: Handler) {
    this.next = h;
  }
  handle(request: any) {
    this.callNextHandler(request);
  }

  callNextHandler(request: any) {
    if(this.next !== null) this.next?.handle(request);
  }
}

/**
 * Concrete Handlers contain the actual code for processing requests. Upon receiving a request, each handler must decide whether to process it and, additionally, whether to pass it along the chain.
 * Handlers are usually self-contained and immutable, accepting all necessary data just once via the constructor.
 */
class ConcreteHandler extends BaseHandler {
  handle(request: any): void {
    this.callNextHandler(request);
  }
}
class ConcreteHandler2 extends BaseHandler {
  handle(request: any): void {
    this.callNextHandler(request);
  }
}

/**
 * Step 4:
 * The Client may compose chains just once or compose them dynamically, depending on the application’s logic. Note that a request can be sent to any handler in the chain—it doesn’t have to be the first one.
 */
const h1 = new ConcreteHandler();
const h2 = new ConcreteHandler2();
h1.setNext(h2);

// h1.handle() // Program a request then pass it to handler;

export {}