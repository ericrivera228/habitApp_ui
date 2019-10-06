// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Page module imports
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
	],
	declarations: [
		LandingComponent,
		NotFoundComponent
	],
	exports: [
		LandingComponent,
		NotFoundComponent
	]
})
export class RoutesModule { }

// Export components that belong to this module
export { NotFoundComponent } from './not-found/not-found.component';
export { LandingComponent } from './landing/landing.component';
