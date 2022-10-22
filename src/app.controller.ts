import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // Prefixo para todas as rotas deste controller
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // resource path
  getHello(): string {
    return this.appService.getHello();
  }
}
