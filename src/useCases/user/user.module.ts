import { Module } from '@nestjs/common';
import { GetUsersAvatarsController } from './getUsersAvatars/get-users-avatars.controller';

@Module({
  controllers: [GetUsersAvatarsController],
  providers: [],
  imports: [],
})
export class UserModule {}
