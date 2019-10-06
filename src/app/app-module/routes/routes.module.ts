// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Page module imports
import { UnknownComponent } from './unknown/unknown.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		LandingComponent,
		UnknownComponent
	],
	exports: [
		LandingComponent,
		UnknownComponent
	]
})
export class RoutesModule { }

// Export components that belong to this module
export { UnknownComponent } from './unknown/unknown.component';
export { LandingComponent } from './landing/landing.component';
