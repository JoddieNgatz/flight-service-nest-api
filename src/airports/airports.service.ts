import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Airports } from './airports.entity';
import { NewAirportEvent } from '../events/new.airport.event';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class AirportsService {
    constructor(
        @InjectRepository(Airports)
        private airportsRepository: Repository<Airports>,
        private eventEmitter: EventEmitter2,
    ) { }

    async create(airport: Partial<Airports>) {

        this.eventEmitter.emit('new.airport', new NewAirportEvent(airport.name));
        await this.airportsRepository.save(airport); const newAirport = this.airportsRepository.create(airport);
        return newAirport;
    }

    async update(id: number, airport: Partial<Airports>): Promise<Airports> {
        await this.airportsRepository.update(id, airport);
        return this.airportsRepository.findOne({ where: { id } });
    }
    async findAll(): Promise<Airports[]> {
        return this.airportsRepository.find()
    }

    async findOne(id: number): Promise<Airports> {
        return this.airportsRepository.findOne({ where: { id } });
    }

    async delete(id: number): Promise<void> {
        await this.airportsRepository.delete(id);
    }
}