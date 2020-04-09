import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  id: number;
  event: Event;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.event = this.eventService.getEventById(this.id);
      console.log(this.event);
    });
  }

  editEvent(): void{

    this.eventService.editEvent(this.id, this.event);
  }

}
