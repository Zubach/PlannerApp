import { Injectable,EventEmitter } from '@angular/core';
import { Requirement } from './requirement.model';

@Injectable({
  providedIn: 'root'
})
export class RequirementServiceService {

  requirementUpdate = new EventEmitter<Requirement[]>();

  private requirements: Requirement[] = [
    new Requirement("112313213","12312132131"),
    new Requirement("112313213","12312132131"),
    new Requirement("112313213","12312132131")
  ];

  constructor() { }

  getRequirements(): Requirement[]{
    return this.requirements.slice();
  }

  addRequirements(requirement: Requirement): void{
    this.requirements.push(requirement);
    this.requirementUpdate.emit(this.requirements);

  }
}

