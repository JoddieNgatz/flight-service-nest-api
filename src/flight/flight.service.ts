import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Flight} from './flight.entity';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>,
  ) {}

  async findAll(): Promise<Flight[]> {
    return this.flightRepository.find();
  }

  async findOne(id: number): Promise<Flight> {
    return this.flightRepository.findOne({ where: { id } });
  }

  async create(flight: Partial<Flight>): Promise<Flight> {
    const newflight= this.flightRepository.create(flight);
    return this.flightRepository.save(flight);
  }

  async update(id: number, flight: Partial<Flight>): Promise<Flight> {
    await this.flightRepository.update(id, flight);
    return this.flightRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.flightRepository.delete(id);
  }
}



/*     We are using the decorator @Injectable() to tell NestJS that this is a service

    We are using the decorator @InjectRepository(User) to tell NestJS that we want to inject the repository of the User entity

    We are using the decorator @Repository(User) to tell NestJS that we want to inject the repository of the User entity

    We are creating a UserService with 5 methods: findAll, findOne, create, update and delete */
