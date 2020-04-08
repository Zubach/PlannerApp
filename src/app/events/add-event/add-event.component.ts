import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event.model';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private eventService: EventService) { }
  myTitle: string;
  myDescription: string;
  myImage: string;




  ngOnInit(): void {
  }

  createEvent(): void{
    this.eventService.addEvent(new Event(this.myTitle, this.myDescription, this.myImage));
  }
}
