import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BicycleSchema } from '../../entity/bicycle.schema';
import { BicycleService } from './bicycle.service';
import { BicycleController } from './bicycle.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Bicycle', schema: BicycleSchema }]),
  ],
  providers: [BicycleService],
  controllers: [BicycleController],
})
export class BicycleModule { }
