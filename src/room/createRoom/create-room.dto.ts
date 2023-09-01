import { IsString, Length, IsNotEmpty } from 'class-validator';
export class CreateRoomDTO {
  @IsString()
  @Length(3, 16)
  nickname: string;
  @IsString()
  @IsNotEmpty()
  avatar: string;
}
