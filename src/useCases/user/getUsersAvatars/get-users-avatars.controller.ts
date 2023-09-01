import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class GetUsersAvatarsController {
  @Get('avatars')
  getAvatars() {
    const baseAvatarsUrl = process.env.BASE_URL + '/avatars';
    const avatars = [
      'red.png',
      'aqua.png',
      'blue.png',
      'gray.png',
      'green.png',
      'orange.png',
    ];
    return avatars.map((avatar, id: number) => {
      return { id: id + 1, image: `${baseAvatarsUrl}/${avatar} ` };
    });
  }
}
