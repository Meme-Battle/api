import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Room } from 'src/domain/entities/room';
import { IRoomRepository } from 'src/domain/repositories/room-repository';
import { PrismaProvider } from 'src/providers/prisma-provider';

@Injectable()
export class RoomRepository implements IRoomRepository {
  client: PrismaClient;

  constructor(
    @Inject(PrismaProvider) private readonly prismaProvider: PrismaProvider,
  ) {
    this.client = prismaProvider.client;
  }

  async save(room: Room): Promise<void> {
    const { hash, id, isPrivate, title, password, Users } = room;
    await this.client.room.create({
      data: {
        id,
        isPrivate,
        title,
        password,
        hash,
        Users: {
          create: {
            ...Users[0],
          },
        },
      },
    });
  }
}
