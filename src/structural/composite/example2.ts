abstract class Component {
  protected parent: Component | null = null;

  setParent(parent: Component | null) {
    this.parent = parent;
  }

  getParent() {
    return this.parent;
  }

  add(component: Component): void {}
  remove(component: Component): void {}

  isComposite(): boolean {
    return false;
  }

  public abstract operation(): string;
}

class Leaf extends Component {
  public operation(): string {
    return 'Leaf';
  }
}

class Composite extends Component {
  protected children: Component[] = []

  add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  remove(component: Component): void {
    const children = this.children.filter(ch => ch !== component);
    this.children = children;
  }

  isComposite(): boolean {
    return true;
  }

  public operation(): string {
    const results = [];
    for (const child of this.children) results.push(child.operation());

    return `Branch(${results.join('+')})`;
  }
}

function clientCode(component: Component) {
  console.log(component);
  
  // ...

  console.log(`RESULT: ${component.operation()}`);

  // ...
}

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2)
clientCode(tree);