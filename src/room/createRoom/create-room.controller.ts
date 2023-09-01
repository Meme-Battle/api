import {
  Body,
  Controller,
  Inject,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateRoomDTO } from './create-room.dto';
import { ICreateRoom } from 'src/domain/services/create-room';

@Controller('rooms')
export class CreateRoomController {
  constructor(
    @Inject('ICreateRoom') private readonly createRoomService: ICreateRoom,
  ) {}
  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createRoomDto: CreateRoomDTO) {
    const { avatar, nickname } = createRoomDto;
    return this.createRoomService.create({
      user: { avatar, nickname },
      room: { isPrivate: false, title: `Sala de ${nickname}` },
    });
  }
}
