abstract class Graphic {
  abstract move(x: number, y: number): void;
  abstract draw(): void;
}

class Dot extends Graphic {
  constructor(public x: number, public y: number) {
    super();
  }
  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
    console.log(`Item moved ${x} , ${y}`);
  }

  draw(): void {
    console.log(`Item drawn at ${this.x}, ${this.y}`);
  }
}

class Circle extends Dot {
  constructor(public x: number, public y: number, public radius: number) {
    super(x, y);
  }

  draw(): void {
    console.log(`Circle Drawn at ${this.x}, ${this.y} with radius ${this.radius}`);
  }
}

class CompundGraphic extends Graphic {
  constructor(public children: Graphic[] = []) {
    super();
  }
  
  add(c: Graphic) {
    this.children.push(c);
  }
  remove(c: Graphic) {
    this.children = this.children.filter(child => child !== c);
  }
  move(x: number, y: number): void {
    this.children.forEach(c => c.move(x, y));
  }
  draw(): void {
    this.children.forEach(c => c.draw());
  }
}

const shape: Graphic = new CompundGraphic([new CompundGraphic([new Dot(5,4)]),new Dot(1, 1), new Circle(2,3,5)]);
class ImageEditor {
  shapes = new CompundGraphic([new CompundGraphic([new Dot(5,4)]),new Dot(1, 1), new Circle(2,3,5)]);

  constructor() {
    this.load();
  }

  load() {
    this.shapes.draw();
  }

  add(c: Graphic) {
    this.shapes.add(c);
    return this;
  }

  draw() {
    this.shapes.draw();
  }
}

new ImageEditor().add(new Dot(6,1)).draw();
export {}