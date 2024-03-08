import { Button } from "./button";
import { Command, CopyCommand, CutCommand, PasteCommand } from "./command";
import { CommandHistory } from "./command-history";
import { Editor } from "./editor";

export class Application {
  clipboard = '';
  editors: Editor[] = [];
  activateEditor?: Editor;

  constructor(private history: CommandHistory) {}

  setActivatedEditor(editor: Editor) {
    this.activateEditor = editor;
  }

  copy() {
    this.executeCommand(new CopyCommand(this, this.activateEditor!))
  }

  past() {
    this.executeCommand(new PasteCommand(this, this.activateEditor!));
  }

  cut() {
    this.executeCommand(new CutCommand(this, this.activateEditor!));
  }

  /**
   * The code which assigns commands to UI objects may look like this.
   * @returns 
   */
  createUI() {
    if(!this.activateEditor) return;
    const copyBtn = new Button(this.copy.bind(this));
    const pastBtn = new Button(this.past.bind(this));
    const cutBtn = new Button(this.cut.bind(this));
  }

  // Execute a command and check whether it has to be added to
  // the history.
  executeCommand(command: Command) {
    if(command.execute() && this.activateEditor) this.history.push(command);
  }

  // Take the most recent command from the history and run its
  // undo method. Note that we don't know the class of that
  // command. But we don't have to, since the command knows
  // how to undo its own action.
  undo() {
    const command = this.history.pop();
    if(command) command.undo();
  }
}