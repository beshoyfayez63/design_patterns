/**
 * This example uses the Memento pattern alongside the Command pattern for storing snapshots of the complex text editor’s state and restoring an earlier state from these snapshots when needed.
 */

// The originator holds some important data that may change over
// time. It also defines a method for saving its state inside a
// memento and another method for restoring the state from it.
class Editor {
  private text = '';
  private curX = 0
  private curY = 0;
  private selectionWidth = 0;

  setText(t: string) {
    this.text = t;
  }

  setCursor(x: number, y: number) {
    this.curX = x;
    this.curY = y;
  }

  setSelectionWidth(width: number) {
    this.selectionWidth = width;
  }

  // Saves the current state inside a memento.
  createSnapshot(): SnapShot {
    // Memento is an immutable object; that's why the
    // originator passes its state to the memento's
    // constructor parameters.
    return new SnapShot(this, this.text, this.curX, this.curY, this.selectionWidth);
  }
}

class SnapShot {
  constructor(
    private editor: Editor,
    private text: string, 
    private curX: number, 
    private curY: number, 
    private selectionWidth: number
  ) {}

  // At some point, a previous state of the editor can be
  // restored using a memento object.
  restore() {
    this.editor.setText(this.text);
    this.editor.setCursor(this.curX, this.curY);
    this.editor.setSelectionWidth(this.selectionWidth);
  }
}

// A command object can act as a caretaker. In that case, the
// command gets a memento just before it changes the
// originator's state. When undo is requested, it restores the
// originator's state from a memento.
class Command {
  backup?: SnapShot

  constructor(private editor: Editor) {}

  makeBackup() {
    this.backup = this.editor.createSnapshot();
  }

  undo() {
    if(this.backup) { this.backup.restore() }
  }

  //....
  // may be add execute methods
}
export {}