// The concrete publisher contains real business logic that's
// interesting for some subscribers. We could derive this class
// from the base publisher, but that isn't always possible in
// real life because the concrete publisher might already be a
// subclass. In this case, you can patch the subscription logic
// in with composition, as we did here.
class Editor {
  event: EventManager;
  private file: any;

  constructor() {
    this.event = new EventManager()
  }

  // Methods of business logic can notify subscribers about
  // changes.
  openFile() {
    this.event.notify('open', 'file_1');
  }

  saveFile() {
    this.event.notify('save', 'file_2');
  }
}

// The base publisher class includes subscription management
// code and notification methods.
class EventManager {
  listeners = new Map<string, Listener[]>();

  subscribe(eventType: any, l: Listener) {
    if(this.listeners.has(eventType)) {
      const listeners = this.listeners.get(eventType);
      this.listeners.set(eventType, [...listeners ?? [], l])
    } else {
      this.listeners.set(eventType, [l]);
    }
  }
  unsubscribe(eventType: any, l: Listener) {
    const hasType = this.listeners.has(eventType);
    const _listeners = hasType ? this.listeners.get(eventType) as Listener[] : [];
    if(hasType && _listeners.length > 1) this.listeners.set(eventType, _listeners.filter(_l => _l !== l));
    else this.listeners.delete(eventType);
  }

  notify(eventType: any, data: any) {
    const _listeners = this.listeners.get(eventType) ?? [];
    for(const l of _listeners) l.update(data);
  }
}

// Here's the subscriber interface. If your programming language
// supports functional types, you can replace the whole
// subscriber hierarchy with a set of functions.
interface Listener {
  update(filename: string): void;
}

// Concrete subscribers react to updates issued by the publisher
// they are attached to.
class EmailAlertsListener implements Listener {

  constructor(
    public email: string,
    public message: string,
  ) {}

  update(filename: string) {
    console.log(this.email, filename, this.message);
  }
}

class LoggingListener implements Listener {
  update(filename: string): void {
    console.log(filename, 'LoggingListener');
  }
}

// An application can configure publishers and subscribers at
// runtime.

const editor = new Editor();
const logger = new LoggingListener();
editor.event.subscribe('open', logger);

const emailAlerts = new EmailAlertsListener('b@b.com', 'File saved');
editor.event.subscribe('save', emailAlerts);
editor.saveFile();

export {}