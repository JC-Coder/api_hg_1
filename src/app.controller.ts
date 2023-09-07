import {Controller, Get, HttpStatus, Query, Res} from '@nestjs/common';
import {AppService} from './app.service';
import {Response} from 'express'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('api')
    api(
        @Query('slack_name') slackName: string,
        @Query('track') track: string,
        @Res() res: Response
    ): object {
        return res.status(HttpStatus.OK).json(this.appService.api(slackName, track))
    }
}
