import { Command } from "./command";

export class CommandHistory {
  history: Command[] = [];

  push(c: Command) {
    this.history.push(c);
  }
  pop() {
    return this.history.pop();
  }
}