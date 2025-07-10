import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

        @Post()
        create(@Body() dto:CreateUserDto){
            return this.userService.createUser(dto);
        }

        @Get(':id')
        get(@Param('id') id: string){
            return this.userService.getUser(+id);
        }
}
