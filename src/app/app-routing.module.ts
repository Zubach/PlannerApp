import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { EventStartComponent } from './events/event-start/event-start.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Page404Component } from './page404/page404.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { AddRequirementComponent } from './requirements/add-requirement/add-requirement.component';



const routes: Routes = [{path: 'events', component: EventsComponent, children:
[
  {path: '', component: EventStartComponent},
  {path: ':id', component: EventDetailsComponent},

]},
{path: 'add-event', component: AddEventComponent},
{path: 'edit-event/:id', component: EditEventComponent},
{path: 'requirements', component: RequirementsComponent},
{path: 'add-requirements', component: AddRequirementComponent},
{path: '', redirectTo: '/events', pathMatch: 'full'},
{path: '**', component: Page404Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
