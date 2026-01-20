import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CustomParseIntPipe } from 'src/common/pipes/custom-parse-int.pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import * as authenticateRequest from 'src/auth/types/authenticate-request';

@Controller('users')
export class UserController {
    constructor(

        private readonly userService: UserService,
    ) { }
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Req() req: authenticateRequest.AuthenticateRequest, @Param(
        'id', CustomParseIntPipe) id: string) {
        return `Eu sou o #${id}`;
    }
    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto);
    }
}
