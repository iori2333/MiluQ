import { socket } from './socket';

class Client {
  login(uin: number, password: string) {
    socket.emit('miluq:login', { uin, password });
  }
}

export default new Client();
