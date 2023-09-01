import { Module } from '@nestjs/common';
import { RoomModule } from './room/room.module';
import { RepositoryModule } from './repositories/repository.module';

@Module({
  imports: [RoomModule, RepositoryModule],
  providers: [],
})
export class AppModule {}
