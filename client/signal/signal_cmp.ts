import {
  Component,
  OnInit
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

  ngOnInit() {
    setTimeout(() => {
      this.name = 'go!'
    }, 1234);
  }
}
