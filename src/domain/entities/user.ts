import { Room } from './room';
import { randomUUID } from 'crypto';
export class User {
  id: string;
  nickname: string;
  room?: Room;
  roomId: string;
  socketId: string;

  constructor(nickname: string, avatar: string, socketId: string) {
    this.id = randomUUID();
    this.nickname = nickname;
    this.socketId = socketId;
  }
}
