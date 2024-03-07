/**
 * Solving Problem ......................................................................
 */
class Particle {
  constructor(
    public color: string,
    public sprite: string
  ) {}

  move(coords: number, vector: number, speed: number) {
    console.log(`Particle with ${this.color} color move with coords ${coords} and vector ${vector} with speed ${speed} KM`)
  }

  draw(coords: number, canvas: string) {
    console.log(`Particle draw with color ${this.color} and coords ${coords} with canvas ${canvas}`);
  }
}

class MovingParticle {
  constructor(private particle: Particle, private coords: number, private vector: number, private speed: number) {}

  move() {
    this.particle.move(this.coords, this.vector, this.speed);
  }

  draw(canvas: string) {
    this.particle.draw(this.coords, canvas)
  }
}

class Game {
  particles: Particle[] = []
  mps: MovingParticle[] = [];

  addParticle(coords: number, vector: number, speed: number, color: string, sprite: string) {
    let particle = this.particles.find(p => p.color === color && p.sprite === sprite);
    if(!particle) {
      particle = new Particle(color, sprite);
      this.particles.push(particle);
    }
    const mp = new MovingParticle(particle, coords, vector, speed)
    this.mps.push(mp);
    
  }

  draw(canvas: string) {
    this.mps.forEach(mp => mp.draw(canvas));
  }
}

class Unit {
  constructor(private game: Game) {}

  fireAt(target: Unit) {
    // this.game.addParticle() // calc and add params.
  }
}

export {}