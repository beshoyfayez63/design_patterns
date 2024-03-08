import { Command } from "./command";

export class Button {
  constructor(private cb: () => void) {}

  setCommand(cb: () => void) {
    this.cb = cb;
  }

  execute() {
    this.cb();
  }
}