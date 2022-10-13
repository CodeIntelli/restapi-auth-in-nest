import { Body, Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { UserService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { RegisterDTO } from './register.dto';
import { LoginDTO } from 'src/auth/login.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UserService,
        private authService: AuthService) { }

    @Post('register')
    async register(@Body() RegisterDTO: RegisterDTO) {
        const user = await this.usersService.create(RegisterDTO);
        const payload = {

            username: user.username,
        };

        const token = await this.authService.signPayload(payload);
        return { user, token };
    }
    @Post('login')
    async login(@Body() UserDTO: LoginDTO) {
        const user = await this.usersService.findByLogin(UserDTO);
        const payload = {
            username: user.username,
        };
        const token = await this.authService.signPayload(payload);
        return { user, token };
    }
}