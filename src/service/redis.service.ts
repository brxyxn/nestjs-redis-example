import { Injectable } from '@nestjs/common';
import Redis, { RedisOptions } from 'ioredis';

@Injectable()
export class RedisService {
  private readonly client: Redis;

  constructor() {
    this.client = new Redis({
      port: 6379,
      host: 'localhost',
    } as RedisOptions);
  }

  getClient(): Redis {
    return this.client;
  }

  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  async set(key: string, value: string): Promise<void> {
    await this.client.set(key, value);
  }

  async setGreeting(): Promise<void> {
    await this.client.set('greeting', 'Hello World2!');
  }

  async getGreeting(): Promise<string> {
    return this.client.get('greeting');
  }
}
