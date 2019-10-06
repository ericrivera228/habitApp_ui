// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Page imports
import { LandingComponent } from '@routes';
import { UnknownComponent } from '@routes';

const routes: Routes = [
	{ path: '', component: LandingComponent },
	{ path: '**', component: UnknownComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class HabitAppRoutingModule { }
