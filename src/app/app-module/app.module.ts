import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HabitAppRoutingModule } from './habit-app-routing.module';
import { HabitAppComponent } from './habit-app/habit-app.component';

@NgModule({
  declarations: [
    HabitAppComponent
  ],
  imports: [
    BrowserModule,
    HabitAppRoutingModule
  ],
  providers: [],
  bootstrap: [HabitAppComponent]
})
export class AppModule { }
