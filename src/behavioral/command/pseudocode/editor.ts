// The editor class has actual text editing operations. It plays
// the role of a receiver: all commands end up delegating
// execution to the editor's methods.
export class Editor {
  private text = '';

  getText() {
    return this.text;
  }

  setText(text: string) {
    this.text = text;
  }

  getSelectedText() {
    return this.text;
  }

  deleteSelection() {
    this.text = ''
  }

  replaceSelection(selection: string) {
    this.text = selection;
  }
}