import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis:{
        host:'localhost',
        port:6379
      }
    }),
    BullModule.registerQueue({
      name: 'queue1',
      processors: [
        {
          path: join(
            __dirname,
            'processor/test.processor.js',
          ),
        },
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
