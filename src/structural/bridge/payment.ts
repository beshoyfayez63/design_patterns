interface PaymentProvider {
  pay(): void;
}

class Paypayl implements PaymentProvider {
  pay(): void {
    console.log('Payment with paypal api...')
  }
}

class MasterCard implements PaymentProvider {
  pay(): void {
    console.log('Payment with masterCard Api...')
  }
}



class Payment {

  constructor(protected payment: PaymentProvider) {}

  pay() {
    this.payment.pay();
  }
}

class SubscriptionPayment extends Payment {
  constructor() {
    const master = new MasterCard();
    super(master)
  }
  pay() {
    this.payment.pay();
  }
}

const paypal = new Paypayl();
const master = new MasterCard()

const payment = new Payment(master);
const sub = new SubscriptionPayment()
payment.pay();

export {}