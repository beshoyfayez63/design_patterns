/**
 * The Command interface declares a method for executing a command.
 */
interface Command {
  execute(): void;
}

/**
 * Some commands can implement simple operations on their own.
 */
class SimpleCommand implements Command {

  constructor(private payload: string) {}

  execute(): void {
    console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
  }
}

/**
 * However, some commands can delegate more complex operations to other objects,
 * called "receivers."
 */
class ComplexCommand implements Command {
  
  /**
    * Complex commands can accept one or several receiver objects along with
    * any context data via the constructor.
  */
  constructor(
    private receiver: Receiver,
    /**
     * Context data, required for launching the receiver's methods.
     */
    private a: string,
    private b: string
  ) {}

  execute(): void {
    console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
    this.receiver.doSomthing(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}

/**
 * The Receiver classes contain some important business logic. They know how to
 * perform all kinds of operations, associated with carrying out a request. In
 * fact, any class may serve as a Receiver.
 */
class Receiver {

  doSomthing(a: string) {
    console.log(`Receiver: Working on (${a}.)`);
  }

  public doSomethingElse(b: string): void {
    console.log(`Receiver: Also working on (${b}.)`);
  }
}

/**
 * The Invoker is associated with one or several commands. It sends a request to the command.
 */
class Invoker {
  constructor(private onStart?: Command, private onFinish?: Command) {}

  /**
   * Initialize commands.
  */
  setOnStart(c: Command) {
    this.onStart = c;
  }
  setOnFinish(c: Command) {
    this.onFinish = c;
  }

  /**
   * The Invoker does not depend on concrete command or receiver classes. The
   * Invoker passes a request to a receiver indirectly, by executing a
   * command.
  */
  doSomthingImportant() {
    console.log('Invoker: Does anybody want something done before I begin?');
    if(this.onStart) this.onStart.execute();
    console.log('Invoker: ...doing something really important...');
    console.log('Invoker: Does anybody want something done after I finish?');
    if(this.onFinish) this.onFinish.execute();
  }
}

/**
 * The client code can parameterize an invoker with any commands.
 */
const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Say HI!'));
const recevier = new Receiver();
invoker.setOnFinish(new ComplexCommand(recevier, 'Send Email', 'Send Report'));
invoker.doSomthingImportant();

export {}