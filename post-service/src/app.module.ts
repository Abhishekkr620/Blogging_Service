import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,
  }),
  
    TypeOrmModule.forRootAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory: (configService:ConfigService)=>({
      type:'mysql',
      host:configService.get('DB_HOST'),
      port:+(configService.get('DB_PORT')||'3306'),
      username:configService.get('DB_USERNAME'),
      password:configService.get('DB_PASSWORD'),
      database:configService.get('DB_NAME'),
      synchronize:true,
      autoLoadEntities:true
    })
  }),PostModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


