// not good for TS
/**
 * The Originator class can produce snapshots of its own state, as well as restore its state from snapshots when needed.
 */
class Originator {
  state = '';

  // Missing semicolon and unnecessary "function" keyword
  save(): Originator.Memento {
    return new Originator.Memento(this.state);
  }

  restore(s: Originator.Memento) {
    this.state = s.getState();
  }
}

/**
 * Step 2:
 * The Memento is a value object that acts as a snapshot of the originator’s state. It’s a common practice to make the memento immutable and pass it the data only once, via the constructor.
 */
namespace Originator {
  export class Memento {

    constructor(private state: string) {}

    getState() {
      return this.state;
    }
  }
}

/**
 * Step 3:
 * The Caretaker knows not only “when” and “why” to capture the originator’s state, but also when the state should be restored.
 * A caretaker can keep track of the originator’s history by storing a stack of mementos. When the originator has to travel back in history, the caretaker fetches the topmost memento from the stack and passes it to the originator’s restoration method.
 */
class Caretaker {
  history: Originator.Memento[] = [];
  constructor(private originator: Originator) {}

  doSomething() {
    const m = this.originator.save();
    this.history.push(m);
  }

  undo() {
    const m = this.history.pop();
    if(m) this.originator.restore(m);
  }
}

export {}