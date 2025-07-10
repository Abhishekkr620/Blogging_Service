import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
    ){}

    createUser (dto: CreateUserDto){
        const user = this.userRepo.create(dto);
        return this.userRepo.save(user);
    }

    getUser(id :number){
        return this.userRepo.findOneBy({id});
    }
}
