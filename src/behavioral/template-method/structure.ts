/**
 * Step 1:
 * The Abstract Class declares methods that act as steps of an algorithm, as well as the actual template method which calls these methods in a specific order. The steps may either be declared abstract or have some default implementation.
 */
abstract class AbstractClass {
  templateMethod() {
    this.step1();
    this.step2()
    this.step3()
    this.step4()
  }

  step1() {
    console.log('This is Default behaviour for step1 or you can make it abstract method');
  }
  step2() {
    console.log('This is Default behaviour for step2 or you can make it abstract method');
  }
  step3() {
    console.log('This is Default behaviour for step3 or you can make it abstract method');
  }
  step4() {
    console.log('This is Default behaviour for step4 or you can make it abstract method');
  }
}

/**
 * Step 2:
 * Concrete Classes can override all of the steps, but not the template method itself.
 */
class ConcreteClass1 extends AbstractClass {
  step1(): void {
    console.log(`This is override version of step1 in ConcreteClass1`);
  }
  step2(): void {
    console.log(`This is override version of step2 in ConcreteClass1`);
  }
}

class ConcreteClass2 extends AbstractClass {
  step1(): void {
    console.log(`This is override version of step1 in ConcreteClass2`);
  }
  step2(): void {
    console.log(`This is override version of step2 in ConcreteClass`);
  }
}

const c1 = new ConcreteClass1();
c1.templateMethod();

export {}