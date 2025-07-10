import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @ApiProperty({example:'Aniket Kumar'})
    name: string;

    @IsEmail()
    @ApiProperty({example:'Aniket@gmail.com'})
    email: string;
}