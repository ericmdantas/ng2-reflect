import {
  Directive,
  Output,
  EventEmitter
} from 'angular2/core';

@Directive({
  selector: '[key-listener]',
  host: {
    '(window:keyup)': 'keyPressedHandler($event)'
  }
})
export class KeyListenerDirective {
  @Output('keyOk') keyOk: EventEmitter<number> = new EventEmitter();

  keyPressedHandler(ev: KeyboardEvent) {
    if (ev.which === 13) {
      this.keyOk.next(Date.now());
    }
  }
}
