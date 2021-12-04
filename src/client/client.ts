import { io } from 'socket.io-client';

import { EventMap } from './types/events';
import { EmitMap } from './types/emits';

const URL = 'http://localhost:5001/';

class Client {
  #socket = io(URL);

  login(uin: number, password: string, callback: () => void) {
    this.#socket.connect();

    this.emit('miluq:login', { uin, password });

    this.on('system.online', () => {
      callback();
      this.on('system.offline', this.#unregister);
    });
  }

  #unregister() {
    this.#socket.off();
    this.#socket.disconnect();
  }

  on<T extends keyof EventMap>(event: T, callback: EventMap[T]) {
    this.#socket.on(event as string, callback);
  }

  off<T extends keyof EventMap>(event: T, callback: EventMap[T]) {
    this.#socket.off(event as string, callback);
  }

  emit<T extends keyof EmitMap>(event: T, data: EmitMap[T]) {
    this.#socket.emit(event, data);
  }
}

export default Client;
