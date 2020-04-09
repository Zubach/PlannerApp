import { Component, OnInit, Input } from '@angular/core';
import { Event} from '../../event.model';

import { EventService } from '../../event.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {



  @Input()event: Event;
  @Input()index: number;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }



  onDelete(){
    this.eventService.deleteEvent(this.event);
  }


}
