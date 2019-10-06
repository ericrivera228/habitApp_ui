// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HabitAppRoutingModule } from './habit-app-routing.module';
import { HabitAppComponent } from './habit-app/habit-app.component';
import { RoutesModule } from '@routes';


@NgModule({
  declarations: [
    HabitAppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    HabitAppRoutingModule
  ],
  providers: [],
  bootstrap: [ HabitAppComponent ]
})
export class AppModule { }
