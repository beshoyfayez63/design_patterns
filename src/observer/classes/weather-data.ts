import { Observer } from "../interfaces/observer";
import { Subject } from "../interfaces/subject";

export class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature?: number;
  private humidity?: number;
  private pressure?: number;

  getTemperature(): void {}
  getHumidity(): void {}
  getPressure(): void {}

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }
  removeObserver(o: Observer): void {
    const _index = this.observers.indexOf(o);
    if(_index > -1) {
      this.observers.splice(_index, 1);
    }
  }
  notifyObservers(): void {
    this.observers.forEach(o => {
      o.update(this.temperature ?? 0, this.humidity ?? 0, this.pressure ?? 0);
    })
  }
  setMeasurenments(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
  measurementsChanged(): void {
    this.notifyObservers();
  }
}