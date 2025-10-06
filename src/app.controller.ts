import { Controller, UseGuards, Get , Request } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
@Controller()
export class AppController {

  constructor(){}

  @Get('/app')
  @UseGuards(AuthGuard('local'))
  getHello(@Request() req): string{
    return req.user
  }


  







 
}
