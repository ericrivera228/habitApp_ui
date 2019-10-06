// Angular imports
import { Component, OnInit } from '@angular/core';

// rxjs imports
import { Observable, Subject } from 'rxjs';

// Shared module imports
import { BaseComponent } from '@shared';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent extends BaseComponent implements OnInit {

	dataSubject = new Subject<string[][]>();

	constructor() {
		super();
	}

	ngOnInit() {

	}

}
