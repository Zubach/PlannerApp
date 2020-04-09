import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { RequirementEditComponent } from './requirements/requirement-edit/requirement-edit.component';
import { EventsComponent } from './events/events.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { EventStartComponent } from './events/event-start/event-start.component';
import { Page404Component } from './page404/page404.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { AddRequirementComponent } from './requirements/add-requirement/add-requirement.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RequirementEditComponent,
    RequirementsComponent,
    EventsComponent,
    EventItemComponent,
    EventListComponent,
    AddEventComponent,
    EventStartComponent,
    Page404Component,
    EditEventComponent,
    AddRequirementComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
