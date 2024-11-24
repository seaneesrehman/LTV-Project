import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
export declare class AppService {
    private readonly httpService;
    private readonly configService;
    constructor(httpService: HttpService, configService: ConfigService);
    getHello(): string;
    fetchData(): Promise<any>;
}
