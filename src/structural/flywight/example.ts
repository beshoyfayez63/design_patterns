class Flyweight  {
  constructor(private sharedState: any) {}

  public operation(uniqueState: any): void {
    const s = JSON.stringify(this.sharedState);
    const u = JSON.stringify(uniqueState);
    console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
  }
}

class FlyweightFactory {
  // private flyweights: {[key: string]: Flyweight} = <any>{};
  private flyweights = new Map<string, Flyweight>()

  constructor(initialFlyweights: string[][]) {
    this.initFlyweights(initialFlyweights)
  }

  private initFlyweights(initialFlyweights: string[][]) {
    for (const state of initialFlyweights) {
      this.flyweights.set(this.getKey(state), new Flyweight(state))
    }
  }

  private getKey(state: string[]): string {
    return state.join('_');
  }

  public getFlyweight(sharedState: string[]): Flyweight {
    const key = this.getKey(sharedState);

    if(!this.flyweights.has(key)) {
      console.log('FlyweightFactory: Can\'t find a flyweight, creating new one.');
      this.flyweights.set(key, new Flyweight(sharedState));
    } else {
      console.log('FlyweightFactory: Reusing existing flyweight.');
    }

    return this.flyweights.get(key)!;
  }

  public listFlyweights(): void {
    const count = this.flyweights.size;
    console.log(`\nFlyweightFactory: I have ${count} flyweights:`);
    for (const key of this.flyweights) {
      console.log(key);
    }
  }
}

const factory = new FlyweightFactory([
  ['Chevrolet', 'Camaro2018', 'pink'],
  ['Mercedes Benz', 'C300', 'black'],
  ['Mercedes Benz', 'C500', 'red'],
  ['BMW', 'M5', 'red'],
  ['BMW', 'X6', 'white'],
])
factory.listFlyweights();

function addCarToPoliceDatabase(
  ff: FlyweightFactory, plates: string, owner: string,
  brand: string, model: string, color: string,
) {
  console.log('\nClient: Adding a car to database.');
  const flyweight = ff.getFlyweight([brand, model, color]);
  flyweight.operation([plates, owner])
}

addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');
addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');
factory.listFlyweights();