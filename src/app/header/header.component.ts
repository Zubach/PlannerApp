import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() eventState = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onSelect(state:string):void{    
    this.eventState.emit(state);
    
  }

}
