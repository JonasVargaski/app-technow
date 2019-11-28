class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (typeof this.events[event] !== 'object') {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return () => this.off(event, listener);
  }

  off(event, listener) {
    if (typeof this.events[event] === 'object') {
      const idx = this.events[event].indexOf(listener);
      if (idx > -1) {
        this.events[event].splice(idx, 1);
      }
    }
  }

  emit(event, ...rest) {
    if (typeof this.events[event] === 'object') {
      this.events[event].forEach(listener => listener.apply(this, rest));
    }
  }

  once(event, listener) {
    const remove = this.on(event, (...rest) => {
      remove();
      listener.apply(this, rest);
    });
  }
}

export default new EventEmitter();
