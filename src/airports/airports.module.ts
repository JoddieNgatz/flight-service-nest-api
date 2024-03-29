import { Module } from '@nestjs/common';
import { AirportsController } from './airports.controller';
import { AirportsService } from './airports.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Airports } from './airports.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Airports])],

  controllers: [AirportsController],
  providers: [AirportsService]
})
export class AirportsModule { }

