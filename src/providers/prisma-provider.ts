import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class PrismaProvider {
  readonly client: PrismaClient;
  constructor() {
    this.client = new PrismaClient();
  }
}
