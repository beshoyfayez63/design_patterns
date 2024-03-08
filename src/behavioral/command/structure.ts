/**
 * Step 1:
 * The Sender class (aka invoker) is responsible for initiating requests. This class must have a field for storing a reference to a command object. The sender triggers that command instead of sending the request directly to the receiver. Note that the sender isn’t responsible for creating the command object. Usually, it gets a pre-created command from the client via the constructor.
 */
class Invoker {

  constructor(private command: Command) {}

  setCommand(command: Command): void {
    this.command = command;
  }

  executeCommand(): ReturnType<Command['execute']> {
    return this.command.execute();
  }
}

/**
 * Step 2:
 * The Command interface usually declares just a single method for executing the command.
 */
interface Command<T = string> {
  execute(): T;
}

class ConcreteCommand implements Command {

  constructor(private receiver: Receiver, private params: any) {}

  execute(): string {
    return this.receiver.operation(this.params);
  }
}

/**
 * The Receiver class contains some business logic. Almost any object may act as a receiver. Most commands only handle the details of how a request is passed to the receiver, while the receiver itself does the actual work.
 */
class Receiver {
  //...
  operation(a: string): string {
    return `Receiver 1 ${a}`;
  }
}

/**
 * Step 5:
 * The Client creates and configures concrete command objects. The client must pass all of the request parameters, including a receiver instance, into the command’s constructor. After that, the resulting command may be associated with one or multiple senders.
 */
const c1 = new ConcreteCommand(new Receiver(), 'T1');
const inv = new Invoker(c1);
inv.executeCommand()

export {}