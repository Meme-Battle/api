import { User } from './user';
import { randomUUID } from 'crypto';
import { generate } from 'generate-password';
export class Room {
  id: string;
  title: string;
  isPrivate: boolean;
  password?: string | null;
  Users: User[];
  hash: string;

  constructor(
    title: string,
    isPrivate: boolean,
    users: User[],
    password?: string,
  ) {
    this.id = randomUUID();
    this.title = title;
    this.isPrivate = isPrivate;
    this.password = password;
    this.Users = users;
    this.hash = generate({ length: 4, numbers: true });
  }
}
