import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { FlightService } from './flight.service';
import { Flight } from './flight.entity';


@Controller('flight')
export class FlightController {

  constructor(private readonly flightService: FlightService) { }

  //get all flight
  @Get()
  async findAll(): Promise<Flight[]> {
    return this.flightService.findAll();
  }

  //get flight by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Flight> {
    const flight = await this.flightService.findOne(id);
    if (!flight) {
      throw new NotFoundException('Flight does not exist!');
    } else {
      return flight;
    }
  }

  //create flight
  @Post()
  async create(@Body() flight: Flight): Promise<Flight> {
    console.log(flight);
    return this.flightService.create(flight);
  }

  //update Flight
  @Put(':id')
  async update(@Param('id') id: number, @Body() flight: Flight): Promise<any> {
    return this.flightService.update(id, flight);
  }

  //delete flight
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if flight does not exist
    const flight = await this.flightService.findOne(id);
    if (!flight) {
      throw new NotFoundException('flight does not exist!');
    }
    return this.flightService.delete(id);
  }

}
