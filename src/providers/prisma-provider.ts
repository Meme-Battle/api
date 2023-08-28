import { PrismaClient } from '@prisma/client';

export class PrismaProvider {
  readonly client: PrismaClient;
  constructor() {
    this.client = new PrismaClient();
  }
}
