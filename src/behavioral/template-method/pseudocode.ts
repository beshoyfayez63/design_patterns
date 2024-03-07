abstract class GameAI {
// The abstract class defines a template method that contains a
// skeleton of some algorithm composed of calls, usually to
// abstract primitive operations. Concrete subclasses implement
// these operations, but leave the template method itself
// intact.
  takeTurn() {
    this.collectResources();
    this.buildStructures();
    this.buildUnits();
    this.attack();
  }

  // Some of the steps may be implemented right in a base class.
  collectResources() {
    console.log('collect Resources')
  }
  abstract buildStructures(): void;
  abstract buildUnits(): void

  // A class can have several template methods.
  attack() {
    this.sendScouts(5)
    this.sendWarriors(6);
  }
  abstract sendScouts(position: number): void
  abstract sendWarriors(position: number): void
}

// Concrete classes have to implement all abstract operations of
// the base class but they must not override the template method
// itself.
class OrcsAI extends GameAI {
  buildStructures(): void {
    console.log(`This is OrcsAI buildStructures implementation`);
  }

  buildUnits(): void {
    console.log(`This is OrcsAI buildUnits implementation`);
  }

  sendScouts(position: number): void {
    console.log(`This is OrcsAI sendScouts implementation`);
  }

  sendWarriors(position: number): void {
    console.log(`This is OrcsAI sendWarriors implementation`);
  }
}
export {}