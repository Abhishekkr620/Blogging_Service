import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entity/post.entity';
import axios from 'axios';
import { CreatePostDto } from '../dtos/create-post.dto';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private postRepo: Repository<Post>){}

    async createPost(dto:CreatePostDto){
        try{
            const response = await axios.get(`http://localhost:3000/user/${dto.userId}`);
            if(!response.data){
                throw new HttpException('User not found',HttpStatus.BAD_REQUEST);
            }
        }catch(err){
            throw new HttpException('User Validation failed ',HttpStatus.BAD_REQUEST);
        }
        const post = this.postRepo.create(dto);
        return this.postRepo.save(post);
    }

    getPost(id: number){
        return this.postRepo.findOneBy({id});
    }

    getPostsByUser(userId: number){
        return this.postRepo.find({where: {userId}})
    }
}
