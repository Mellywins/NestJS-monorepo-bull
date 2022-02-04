import { Module } from '@nestjs/common';
import { DummyServiceController } from './dummy-service.controller';
import { DummyServiceService } from './dummy-service.service';

@Module({
  imports: [],
  controllers: [DummyServiceController],
  providers: [DummyServiceService],
})
export class DummyServiceModule {}
