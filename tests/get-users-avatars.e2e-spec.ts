import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { GetUsersAvatarsController } from 'src/useCases/user/getUsersAvatars/get-users-avatars.controller';

describe('GetUsersAvatarsController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [GetUsersAvatarsController],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should return avatars', () => {
    return request(app.getHttpServer())
      .get('/users/avatars')
      .expect(200)
      .expect((response) => {
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body).toHaveLength(6);
        response.body.forEach((avatar) => {
          expect(avatar).toHaveProperty('id');
          expect(avatar).toHaveProperty('image');
        });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
