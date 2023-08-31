import { Module } from '@nestjs/common';
import { ProvidersModule } from 'src/providers/providers.module';
import { RoomRepository } from './room.repository';

@Module({
  providers: [
    {
      useClass: RoomRepository,
      provide: 'IRoomRepository',
    },
  ],
  imports: [ProvidersModule],
  exports: [
    {
      useClass: RoomRepository,
      provide: 'IRoomRepository',
    },
  ],
})
export class RepositoryModule {}
