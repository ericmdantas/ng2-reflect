import {
  Directive
} from 'angular2/core';

@Directive({
  selector: '[key-listener]',
  host: {
    '(window:keyup)': 'alo()'
  }
})
export class KeyListenerDirective {
  public alo() {
    console.log('yo!');
  }
}
