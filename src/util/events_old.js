class _Events {
  constructor() {
    this._eventBus = {};
  }

  createEventStack() {
    return {
      $on: (id, func) => {
        this._eventBus[id] = func;
      },
      $off: id => {
        if (this._eventBus[id]) {
          delete this._eventBus[id];
        }
      },
      $emit: (id, data) => {
        if (this._eventBus[id]) {
          this._eventBus[id](data);
        }
      },
      $erase: () => {
        this._eventBus = {};
      },
    };
  }
}

export default new _Events().createEventStack();
