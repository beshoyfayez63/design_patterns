/**
 * Step 1:
 * The Publisher issues events of interest to other objects. These events occur when the publisher changes its state or executes some behaviors. Publishers contain a subscription infrastructure that lets new subscribers join and current subscribers leave the list.
 * 
 * Step 2:
 * When a new event happens, the publisher goes over the subscription list and calls the notification method declared in the subscriber interface on each subscriber object.
 */
class Publisher {
  subscribers: Subscriber[] = [];

  subscribe(s: Subscriber) {
    this.subscribers.push(s);
  }
  unsubscribe(s: Subscriber) {
    const _subs = this.subscribers.filter(_s => _s !== s);
    this.subscribers = _subs;
  }

  notifySubscribers() {
    this.subscribers.forEach(s => s.update(this));
  }
  mainBusinessLogic() {

  }
}

/**
 * Step 3:
 * The Subscriber interface declares the notification interface. In most cases, it consists of a single update method. The method may have several parameters that let the publisher pass some event details along with the update.
 */
interface Subscriber<T = any> {
  update(context: T): void;
}

/**
 * Step 4:
 * Concrete Subscribers perform some actions in response to notifications issued by the publisher. All of these classes must implement the same interface so the publisher isn’t coupled to concrete classes.
 * 
 * Step 5:
 * Usually, subscribers need some contextual information to handle the update correctly. For this reason, publishers often pass some context data as arguments of the notification method. The publisher can pass itself as an argument, letting subscriber fetch any required data directly.
 */
class ConcreteSubscriber implements Subscriber {
  update(context: any): void {
    console.log(`ConcreteSubscriber notification ${context}`)
  }
}

/**
 * Step 6:
 * The Client creates publisher and subscriber objects separately and then registers subscribers for publisher updates.
 */
const p = new Publisher();
const s = new ConcreteSubscriber();

p.subscribe(s);

export {}