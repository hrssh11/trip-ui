import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TripHeaderModel } from '../event/event.component';

@Injectable({
  providedIn: 'root'
})
export class EventDetailService {
  // getEventData(): TripHeaderModel {
  //   throw new Error('Method not implemented.');
  // }

  constructor() { }
  @Injectable()
  private eventData = new BehaviorSubject<TripHeaderModel | null>(null);
  eventData$ = this.eventData.asObservable();

  setEventData(event: TripHeaderModel) {
    this.eventData.next(event);
  }

  getEventData(eventId): TripHeaderModel | null {
    return this.eventData.getValue();
  }
}
