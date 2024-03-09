/**
 * There’s another implementation which is useful when you don’t want to leave even the slightest chance of other classes accessing the state of the originator through the memento.
 */
/**
 * Step 1:
 * This implementation allows having multiple types of originators and mementos. Each originator works with a corresponding memento class. Neither originators nor mementos expose their state to anyone.
 */
interface Originator {
  save(): Memento;
}

interface Memento {
  restore(): void;
}

/**
 * Step 3:
 * Each memento becomes linked to the originator that produced it. The originator passes itself to the memento’s constructor, along with the values of its state. Thanks to the close relationship between these classes, a memento can restore the state of its originator, given that the latter has defined the appropriate setters.
 */
class ConcereteOriginator implements Originator {
  state = '';

  save(): Memento {
    return new ConecereteMemento(this, this.state);
  }

  setState(state: string) {
    this.state = state;
  }
}

class ConecereteMemento implements Memento {

  constructor(private originator: ConcereteOriginator, private state: string) {}

  restore() {
    this.originator.setState(this.state);
  }
}

/**
 * Step 2:
 * Caretakers are now explicitly restricted from changing the state stored in mementos. Moreover, the caretaker class becomes independent from the originator because the restoration method is now defined in the memento class.
 */
class Caretaker {
  history: Memento[] = [];

  undo() {
    const m = this.history.pop();
    if(m) m.restore();
  }
}

export {}