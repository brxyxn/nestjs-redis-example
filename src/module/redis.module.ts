import { Module } from '@nestjs/common';
import { RedisService } from '../service/redis.service';

@Module({
  providers: [RedisService],
  imports: [],
})
export class RedisModule {}
