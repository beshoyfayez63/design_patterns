class Particle {
  constructor(
    public coords: number,
    public vector: number,
    public speed: number,
    public color: string,
    /**
     * image of practicle
     */
    public sprite: string,
  ) {}

  move() {
    console.log(`Practicle moved to ${this.coords} with speed ${this.speed}`);
  }

  draw(canvas: string) {
    console.log('Draw Me', canvas);
    
  }
}

class Game {
  practicle: Particle[] = []

  addPracticle(p: Particle) {
    this.practicle.push(p);
  }

  draw(canvas: string) {
    this.practicle.forEach(p => p.draw(canvas));
  }
}

class Unit {
  constructor(private game: Game) {}

  fireAt(target: Unit) {
    const p = new Particle(5, 5, 100, 'red', 'bullet.png');
    this.game.addPracticle(p);
    // continue logic
  }
}

export {}

