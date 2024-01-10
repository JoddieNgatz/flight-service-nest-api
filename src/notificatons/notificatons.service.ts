import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { NewFlightEvent } from '../events/new.flight.event'
@Injectable()
export class NotificationsService {
    @OnEvent('new.flight')
    async notifyUser(payload: NewFlightEvent) {
        console.log(`Hello, ${payload.name} has been added to our flights. Enjoy.`)
    }
}