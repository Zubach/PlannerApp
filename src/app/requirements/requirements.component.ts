import { Component, OnInit, Input } from '@angular/core';
import {Requirement} from './requirement.model'

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

 

  requirements: Requirement[] = [
    new Requirement("112313213","12312132131"),
    new Requirement("112313213","12312132131"),
    new Requirement("112313213","12312132131")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
