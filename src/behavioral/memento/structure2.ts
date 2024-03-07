/**
 * Step 1:
 * In the absence of nested classes, you can restrict access to the memento’s fields by establishing a convention that caretakers can work with a memento only through an explicitly declared intermediary interface, which would only declare methods related to the memento’s metadata.
 */
interface Memento<T = any> {
  getState(): T;
}

/**
 * Step2:
 * On the other hand, originators can work with a memento object directly, accessing fields and methods declared in the memento class. The downside of this approach is that you need to declare all members of the memento public.
 */
class ConcereteMemento implements Memento<string> {

  constructor(public state: string) {}

  getState() {
    return this.state;
  }
}

class Originator {
  state = '';

  save(): Memento {
    return new ConcereteMemento(this.state);
  }
  restore(m: Memento) {
    this.state = m.getState();
  }
}

class Caretaker {
  originator = new Originator();
  history: Memento[] = [];

  undo() {
    const m = this.history.pop();
    if(m) this.originator.restore(m);
  }
}

export {}