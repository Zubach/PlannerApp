import { Injectable,EventEmitter } from '@angular/core';
import { Event } from './event.model';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventSelected = new EventEmitter<Event>();
  eventUpdate = new EventEmitter<Event[]>();


  private events: Event[] = [
    new Event('Course JS','Promise and fetch','https://hsto.org/web/645/36f/4d8/64536f4d83ce437db0c90970723f04b0.jpg'),
    new Event('HTML + CSS','link in HTML','https://o7planning.org/ru/11983/cache/images/i/21723546.png'),
    new Event('React','Routing','https://repository-images.githubusercontent.com/19872456/05dca500-f010-11e9-9588-a96554294e4e')
  ];

  getEvents(): Event[]{
    return this.events.slice();
  }

  addEvent(event: Event): void{
    this.events.push(event);
    this.eventUpdate.emit(this.events);

  }
  deleteEvent(event: Event): void{


    const index: any = this.events.indexOf(event);

    this.events.splice(index, 1);
    this.eventUpdate.emit(this.events);

    console.log(this.events);
  }

  getEventById(index: number): Event{

    return this.events[index];
  }

  editEvent(index: number, newEvent: Event): void{
    this.events[index] = newEvent;
    this.eventUpdate.emit(this.events);
  }

  constructor() { }
}
