export class Product {
  constructor(
    public name: string,
    public price = 0,
    public discount: DiscountStrategy = new NoDiscountStrategy()
  ) {}

  setDiscountStrategy(discount: DiscountStrategy) {
    this.discount = discount;
  }

  getDiscountedPrice() {
    return this.discount?.calculate(this.price)
  }
}

abstract class DiscountStrategy {
  abstract calculate(price: number): number;
}

class SeasonalDiscountStrategy extends DiscountStrategy {
  calculate(price: number): number {
    return price - (price * 0.1);
  }
}

class PersonalDiscountStrategy extends DiscountStrategy {
  calculate(price: number): number {
    return price - (price * 0.5);
  }
}

class NoDiscountStrategy extends DiscountStrategy {
  calculate(price: number): number {
    return price;
  }
}

const product = new Product('Product 1', 20, new NoDiscountStrategy());
console.log(product.getDiscountedPrice());
product.setDiscountStrategy(new PersonalDiscountStrategy());
console.log(product.getDiscountedPrice());


export {}