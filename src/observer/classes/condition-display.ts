import { Display } from "../interfaces/display";
import { Observer } from "../interfaces/observer";
import { Subject } from "../interfaces/subject";

export class ConditionDisplay implements Observer, Display {
  private temperature?: number;
  private humidity?: number;

  constructor(private weatherData: Subject) {
    this.weatherData.registerObserver(this);
  }

  update(temp: number, humidity: number, _: number): void {
    this.temperature = temp;
    this.humidity = humidity;
    this.temperature = temp;
    this.display();
  }

  display(): void {
    console.log(`Current conditions: ${this.temperature} F degrees and ${this.humidity}% humidity);`);
  }
}