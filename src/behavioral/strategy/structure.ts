/**
 * Step1
 * The Context maintains a reference to one of the concrete strategies and communicates with this object only via the strategy interface.
 */
class Context {
  constructor(private strategy: Strategy = new ConcreteStrategy1()) {}

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }
  doSomething(data: string) {
    this.strategy?.execute(data);
  }
}

/**
 * step2
 * The Strategy interface is common to all concrete strategies. It declares a method the context uses to execute a strategy.
 */
interface Strategy {
  execute(data: any): void;
}

/**
 * Step3
 * Concrete Strategies implement different variations of an algorithm the context uses.
 */
class ConcreteStrategy1 implements Strategy {
  execute(data: any): void {
    console.log('ConcreteStrategy1 ', data);
  }
}
class ConcreteStrategy2 implements Strategy {
  execute(data: any): void {
    console.log('ConcreteStrategy2 ', data);
  }
}

/**
 * Step4
 * The context calls the execution method on the linked strategy object each time it needs to run the algorithm. The context doesn’t know what type of strategy it works with or how the algorithm is executed.
 */

/**
 * Step5
 * The Client creates a specific strategy object and passes it to the context. The context exposes a setter which lets clients replace the strategy associated with the context at runtime.
 */

const str = new ConcreteStrategy2();
const context = new Context();
context.doSomething('Test');
context.setStrategy(new ConcreteStrategy2())
context.doSomething('Test');

export {}