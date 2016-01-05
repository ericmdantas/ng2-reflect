import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from 'angular2/core';

@Component({
  selector: 'signal-cmp',
  template: `
    <h1>{{name}}</h1>
  `,
  styles: [
    `
      h1 {
        text-align: center;
        font-size: 150px;
      }
    `
  ]
})
export class SignalCmp implements OnInit {
  name: string = '';
  time: number = 0;
  ready: boolean = false;

  @Output('signalReady') signalReady: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.reInitHandler();
  }

  reInitHandler() {
    this.name = '...';
    this.ready = false;

    let _id = setTimeout(() => {
      this.name = 'go!'
      this.ready = true;
      this.time = Date.now();
      this.signalReady.next(this.time);
      clearTimeout(_id);
    }, ~~(Math.random() * 5000));
  }
}
