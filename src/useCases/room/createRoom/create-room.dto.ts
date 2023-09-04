import { IsString, Length, IsIn } from 'class-validator';

const avatars = [
  'red.png',
  'aqua.png',
  'blue.png',
  'gray.png',
  'green.png',
  'orange.png',
];

export class CreateRoomDTO {
  @IsString()
  @Length(3, 16)
  nickname: string;

  @IsString()
  @IsIn(avatars, { message: 'Avatar is not a valid option' })
  avatar: string;
}
