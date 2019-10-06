// Angular Imports
import { NgModule } from '@angular/core';

// Shared module imports
import { MaterialDesignModule } from '@shared';

// UI module imports
import { LogoComponent } from './logo/logo.component';

@NgModule({
	imports: [

	],
	declarations: [
		LogoComponent
	],
	exports: [
		LogoComponent
	]
})
export class UiModule { }

// Export components that belong to this module
export { LogoComponent } from './logo/logo.component';