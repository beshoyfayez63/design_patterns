import { Application } from "./application";
import { Editor } from "./editor";

export abstract class Command {
  
  backup = ''

  constructor(protected app: Application, protected editor: Editor) {}

  /**
   * Make a backup of the editor's state.
   */
  saveBackup() {
    this.backup = this.editor.getText();
  }

  /**
   * Restore the editor's state.
   */
  undo() {
    this.editor.setText(this.backup);
  }

  /**
   * The execution method is declared abstract to force all concrete commands to provide their own implementations.
   * The method must return true or false depending on whether the command changes the editor's state.
   */
  abstract execute(): boolean;
}

// The concrete commands go here.
export class CopyCommand extends Command {
  /**
   * The copy command isn't saved to the history since it doesn't change the editor's state.
   */
  execute(): boolean {
    this.app.clipboard = this.editor.getSelectedText();
    return false;
  }
}

export class CutCommand extends Command {
  // The cut command does change the editor's state, therefore
  // it must be saved to the history. And it'll be saved as
  // long as the method returns true.
  execute(): boolean {
    this.saveBackup();
    this.app.clipboard = this.editor.getSelectedText();
    this.editor.deleteSelection();
    return true;
  }
}

export class PasteCommand extends Command {

  execute(): boolean {
    this.saveBackup();
    this.editor.replaceSelection(this.app.clipboard);
    return true;
  }
}

export class UndoCommand extends Command {
  execute(): boolean {
    this.app.undo();
    return false;
  }
}