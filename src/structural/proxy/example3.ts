class Person {
  constructor(
    public name: string,
    public age: number,
    public nationality: string
  ) {}
}

const person = new Person('John Doe', 42, 'American');

const personProxy = new Proxy<Person>(person, {
  get: (obj, prop: keyof Person) => {
    console.log(`The Value Of ${prop} is ${obj[prop]}`);
    return obj[prop];
  },
  set: (obj: Person, prop: keyof Person, value: typeof prop) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    Reflect.set(obj, prop, value)
    return true;
  }
})

personProxy.name;
personProxy.name = 'Beshoy';
console.log(person)

export {}