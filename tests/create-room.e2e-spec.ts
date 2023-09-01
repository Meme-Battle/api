import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateRoomDTO } from 'src/useCases/room/createRoom/create-room.dto';

describe('RoomsController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should return 400 when nickname length is less than 3', async () => {
    const createRoomDto: CreateRoomDTO = {
      nickname: 'A',
      avatar: 'ValidAvatar',
    };

    const response = await request(app.getHttpServer())
      .post('/rooms')
      .send(createRoomDto);

    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
  });

  it('should return 400 when nickname length is more than 16', async () => {
    const createRoomDto: CreateRoomDTO = {
      nickname: 'ThisIsAVeryLongNickname',
      avatar: 'ValidAvatar',
    };

    const response = await request(app.getHttpServer())
      .post('/rooms')
      .send(createRoomDto);

    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
  });

  it('should return 400 when avatar is empty', async () => {
    const createRoomDto: CreateRoomDTO = {
      nickname: 'ValidNickname',
      avatar: '',
    };

    const response = await request(app.getHttpServer())
      .post('/rooms')
      .send(createRoomDto);

    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
  });

  it('should return 201 when DTO validation passes', async () => {
    const createRoomDto: CreateRoomDTO = {
      nickname: 'ValidNickname',
      avatar: 'ValidAvatar',
    };

    const response = await request(app.getHttpServer())
      .post('/rooms')
      .send(createRoomDto);

    expect(response.status).toBe(HttpStatus.CREATED);
  });

  afterAll(async () => {
    await app.close();
  });
});
