import { Module } from '@nestjs/common';
import { CreateRoomController } from './createRoom/create-room.controller';
import { CreateRoomService } from './createRoom/create-room.service';
import { RepositoryModule } from 'src/repositories/repository.module';

@Module({
  controllers: [CreateRoomController],
  providers: [
    {
      useClass: CreateRoomService,
      provide: 'ICreateRoom',
    },
  ],
  imports: [RepositoryModule],
})
export class RoomModule {}
