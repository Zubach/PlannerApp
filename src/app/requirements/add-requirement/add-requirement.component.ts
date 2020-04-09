import { Component, OnInit } from '@angular/core';
import { RequirementServiceService } from '../requirement-service.service';
import { Requirement } from '../requirement.model';

@Component({
  selector: 'app-add-requirement',
  templateUrl: './add-requirement.component.html',
  styleUrls: ['./add-requirement.component.css']
})
export class AddRequirementComponent implements OnInit {

  constructor(private requirementService: RequirementServiceService) { }
  myTitle: string;
  myDescription: string;

  ngOnInit(): void {
  }

  createRequirement(){
    this.requirementService.addRequirements(new Requirement(this.myTitle, this.myDescription));
  }

}
