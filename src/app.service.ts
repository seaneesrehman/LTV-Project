import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }
  async fetchData(): Promise<any> {
    const url = this.configService.get<string>('FETCH_NUMBER_URL');
    try {
      const response = await lastValueFrom(this.httpService.get(url));
      return response.data; // Axios automatically parses JSON
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }
}
