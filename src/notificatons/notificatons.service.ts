import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { NewFlightEvent } from '../events/new.flight.event'

import { NewAirportEvent } from '../events/new.airport.event'
@Injectable()
export class NotificationsService {
    @OnEvent('new.flight')
    async notifyUser(payload: NewFlightEvent) {
        console.log(`Hello, ${payload.name} has been added to our flights. Enjoy.`)
    }

    @OnEvent('new.airport')
    async notifyAirport(payload: NewAirportEvent) {
        console.log(`Hello, ${payload.name} has been added to our airport. Enjoy.`)
    }
}