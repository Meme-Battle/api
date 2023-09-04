import { Inject, Injectable } from '@nestjs/common';
import { Room } from 'src/domain/entities/room';
import { User } from 'src/domain/entities/user';
import { IRoomRepository } from 'src/domain/repositories/room-repository';
import { ICreateRoom } from 'src/domain/services/create-room';

@Injectable()
export class CreateRoomService implements ICreateRoom {
  constructor(
    @Inject('IRoomRepository') private readonly roomRepository: IRoomRepository,
  ) {}
  async create(params: ICreateRoom.Params): Promise<ICreateRoom.Return> {
    const { avatar, nickname } = params.user;
    const { isPrivate, title, password } = params.room;

    const user = new User(nickname, avatar, '');
    const room = new Room(title, isPrivate, [user], password);
    await this.roomRepository.save(room);

    return {
      id: room.id,
      title: room.title,
      hash: room.hash,
      Users: room.Users,
    };
  }
}
