import { EventEmitter } from "events"
import assign from "object-assign"

const CHANGE_EVENT = "CHANGE"

export class BaseStore extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT)
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  addOnceChangeListener(callback) {
    this.once(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
}
