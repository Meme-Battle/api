import { Module } from '@nestjs/common';
import { RoomModule } from './useCases/room/room.module';
import { RepositoryModule } from './repositories/repository.module';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { UserModule } from './useCases/user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    RoomModule,
    UserModule,
    RepositoryModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'avatars'),
      serveRoot: '/avatars',
    }),
    ConfigModule.forRoot(),
  ],
  providers: [],
})
export class AppModule {}
