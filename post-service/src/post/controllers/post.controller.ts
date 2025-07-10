import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { CreatePostDto } from '../dtos/create-post.dto';

@Controller('post')
export class PostController {
    constructor(private postService:PostService){ }

    @Post()
    create(@Body() dto:CreatePostDto){
        return this.postService.createPost(dto);
    }

    @Get(':id')
    get(@Param('id') id:string){
        return this.postService.getPost(+id);
    }

    @Get('user/:userId')
    getByUser(@Param('userId') userId: string){
        return this.postService.getPostsByUser(+userId);
    }

}
