import { Module } from '@nestjs/common';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [ProvidersModule],
  providers: [],
})
export class AppModule {}
