import {
  Component
} from 'angular2/core';

import {KeyListenerDirective} from './key/key_listener_directive.js';
import {SignalCmp} from './signal/signal_cmp.js';
import {StatsCmp} from './stats/stats_cmp.js';

@Component({
  selector: 'app',
  template: `
    <div key-listener>
      <stats-cmp></stats-cmp>
      <signal-cmp></signal-cmp>
    </div>
  `,
  directives: [KeyListenerDirective, SignalCmp, StatsCmp]
})
export class App {

}
