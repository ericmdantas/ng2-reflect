import {
  Component
} from 'angular2/core';

import {KeyListenerDirective} from './key/key_listener_directive.js';
import {SignalCmp} from './signal/signal_cmp.js';
import {StatsCmp} from './stats/stats_cmp.js';
import {Stats} from './stats/stats.js';

@Component({
  selector: 'app',
  template: `
    <div key-listener (keyOk)="stat.add(signal.time, $event); signal.reInitHandler();">
      <stats-cmp #stat></stats-cmp>
      <signal-cmp #signal ></signal-cmp>
    </div>
  `,
  providers: [Stats],
  directives: [KeyListenerDirective, SignalCmp, StatsCmp]
})
export class App {

}
