import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto{

    @ApiProperty({example:'Welcome to my first blog'})
    title: string;

    @ApiProperty({example:'This is the content of my first blog.'})
    content: string;

    @ApiProperty({example: 1})
    userId: number;
}