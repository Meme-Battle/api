import { Room } from '../entities/room';

export interface IRoomRepository {
  save(room: Room): Promise<void>;
}
