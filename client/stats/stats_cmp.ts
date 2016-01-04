import {
  Component,
  Inject
} from 'angular2/core';

import {Stats} from './stats.js';

@Component({
  selector: 'stats-cmp',
  template: `
    <h4>fastest reactions</h4>
    <ul>
      <li *ngFor="#s of stats.fastest;">{{s}}</li>
    </ul>
  `,
  providers: [Stats]
})
export class StatsCmp {
  constructor(@Inject(Stats) public stats: Stats) {

  }
}
