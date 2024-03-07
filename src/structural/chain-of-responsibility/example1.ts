// The handler interface declares a method for executing a
// request.
interface ComponentWithContextualHelp {
  showHelp(): void;
}

// The base class for simple components.
class Component implements ComponentWithContextualHelp {

  container: Component | null = null;

  tooltipText = '';

  showHelp(): void {
    if(this.tooltipText !== null) console.log(this.tooltipText);
    else this.container?.showHelp();
  }

  setConainer(container: Component) {
    this.container = container;
  }
}

class Container extends Component {

  children: Component[] = []

  add(child: Component) {
    this.children.push(child);
    child.setConainer(this)
  }
}

class Button extends Component {}

class Panel extends Container {

  modalHelpText = ''

  showHelp(): void {
    if(this.modalHelpText !== null) console.log(this.modalHelpText);
    else this.container?.showHelp();
  }
}

class Dialog extends Container {
  
  wikiPageURL = ''

  showHelp(): void {
    if(this.wikiPageURL !== null) console.log(this.wikiPageURL);
    this.container?.showHelp();
  }
}

const dialog = new Dialog();
dialog.wikiPageURL = "http://..."
const panel = new Panel();
panel.modalHelpText = "This panel does..."
const ok = new Button();
ok.tooltipText = "This is an OK button that..."
const cancel = new Button();
cancel.tooltipText = "This is a Cancel button that..."

function getComponentAtMouseCords(): Component {
  return cancel;
}

function onF1KeyPress() {
  const component = getComponentAtMouseCords();
  component.showHelp();
}
export {}