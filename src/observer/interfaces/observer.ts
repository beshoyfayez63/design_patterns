export interface Observer {
  update(temp: number, humidity: number, pressure: number): void;
}

// 01013082417 01280315653