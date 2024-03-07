interface RouteStrategy {
  buildRoute(a: number,b:number): void;
}

class RoadStrategy implements RouteStrategy {
  buildRoute(a: number, b: number): void {
    console.log(`Road Route is ${a}, ${b}`);
  }
}

class PublicTrasportStrategy implements RoadStrategy {
  buildRoute(a: number, b: number): void {
    console.log(`Transport Route is ${a}, ${b}`);
  }
}

class WalkingStrategy implements RoadStrategy {
  buildRoute(a: number, b: number): void {
    console.log(`Waling Route is ${a}, ${b}`);
  }
}

class RouteNavigator {
  constructor(public routeStrategy: RoadStrategy) {}

  buildRoute(a: number, b: number) {
    this.routeStrategy.buildRoute(a,b)
  }
}

const nav = new RouteNavigator(new RoadStrategy());
nav.buildRoute(1,5)

export {}