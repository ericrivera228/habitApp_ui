// Angular Imports
import { NgModule } from '@angular/core';

// Shared module imports
import { MaterialDesignModule } from '@shared';

// UI module imports
import { LoaderComponent } from './loader/loader.component';

@NgModule({
	imports: [

	],
	declarations: [
		LoaderComponent
	],
	exports: [
		LoaderComponent
	]
})
export class UiModule { }

// Export components that belong to this module
export { LoaderComponent } from './loader/loader.component';
