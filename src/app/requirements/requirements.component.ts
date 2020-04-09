import { Component, OnInit, Input } from '@angular/core';
import {Requirement} from './requirement.model'
import { RequirementServiceService } from './requirement-service.service';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {



  requirements: Requirement[] ;
  constructor(private requirementService: RequirementServiceService) { }

  ngOnInit(): void {

    this.requirements = this.requirementService.getRequirements();

    this.requirementService.requirementUpdate.subscribe((requirements: Requirement[]) => {
      this.requirements = requirements;
    });
  }

}
