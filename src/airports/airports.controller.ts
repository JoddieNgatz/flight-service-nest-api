import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { AirportsService } from './airports.service';
import { Airports } from './airports.entity';


@Controller('airports')
export class AirportsController {

    constructor(private readonly airportsService: AirportsService) { }

    //get all airports
    @Get()
    async findAll(): Promise<Airports[]> {
        return this.airportsService.findAll();
    }

    //get airports by id
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Airports> {
        const airports = await this.airportsService.findOne(id);
        if (!airports) {
            throw new NotFoundException('airports does not exist!');
        } else {
            return airports;
        }
    }

    //create airports
    @Post()
    async create(@Body() airports: Airports): Promise<Airports> {
        return this.airportsService.create(airports);
    }

    //update airports
    @Put(':id')
    async update(@Param('id') id: number, @Body() airports: Airports): Promise<any> {
        return this.airportsService.update(id, airports);
    }

    //delete airports
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        //handle error if airports does not exist
        const airports = await this.airportsService.findOne(id);
        if (!airports) {
            throw new NotFoundException('airports does not exist!');
        }
        return this.airportsService.delete(id);
    }

}
