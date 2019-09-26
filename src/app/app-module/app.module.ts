import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HabitAppRoutingModule } from './habit-app-routing.module';
import { HabitAppComponent } from './habit-app/habit-app.component';

import { MaterialDesignModule } from '../shared-module/shared.module';

@NgModule({
  declarations: [
    HabitAppComponent
  ],
  imports: [
    BrowserModule,
    HabitAppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [HabitAppComponent]
})
export class AppModule { }
