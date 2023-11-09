import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RedisService } from './service/redis.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly redisService: RedisService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/set-greeting')
  async setGreeting(): Promise<void> {
    return await this.redisService.setGreeting();
  }

  @Get('/get-greeting')
  async getGreeting(): Promise<string | null> {
    return await this.redisService.getGreeting();
  }
}
