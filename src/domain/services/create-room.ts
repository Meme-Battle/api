import { Room } from '../entities/room';

export interface ICreateRoom {
  create(params: ICreateRoom.Params): Promise<ICreateRoom.Return>;
}

export namespace ICreateRoom {
  export interface Params {
    user: {
      nickname: string;
      avatar: string;
    };
    room: {
      isPrivate: boolean;
      password?: string;
      title: string;
    };
  }

  export type Return = Omit<Room, 'password' | 'isPrivate'>;
}
