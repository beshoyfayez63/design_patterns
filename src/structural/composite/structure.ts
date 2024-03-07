// step1
abstract class Component {
  abstract execute(): void;
}

class Leaf extends Component {
  execute(): void {
    console.log('LEAF');
  }
}

class Composite extends Component {
  children: Component[] = [];

  add(c: Component) {
    this.children.push(c);
  }
  remove(c: Component) {
    this.children = this.children.filter(child => child !== c);
  }
  getChildren() {
    return this.children;
  }
  execute() {
    this.children.forEach(ch => ch.execute());
  }
}
export {}