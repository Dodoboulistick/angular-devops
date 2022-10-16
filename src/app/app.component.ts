import { Component } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'hello-world';

  constructor() {
    this.getNextPause();
  }

  public multiplyFunction(a: number, b: number): number {
    return a * b;
  }

  public getNextPause() {
    let now = new Date().getSeconds();
    console.log(now);
  }
}
