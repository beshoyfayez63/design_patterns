import { Display } from "../interfaces/display";
import { Observer } from "../interfaces/observer";

export class HeatIndexDisplay implements Observer, Display {
  display(): void {
    
  }
  update(temp: number, humidity: number, pressure: number): void {
    
  }
}