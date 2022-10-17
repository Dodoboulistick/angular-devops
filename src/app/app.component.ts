import { Component } from '@angular/core';
import { compareDesc, startOfTomorrow } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'hello-world';
  isBusinessDay: boolean;
  timer: string = '';

  constructor() {
    let date = new Date();
    this.isBusinessDay = date.getDay() !== 0 && date.getDay() !== 6;
    this.countdown();
  }

  /**
   *
   * @param a first number to multiply
   * @param b second number to multiply
   * @returns multiplication of a and b
   */
  public multiplyFunction(a: number, b: number): number {
    return a * b;
  }

  public getNextPause() {
    let now = new Date();
    let firstpause = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      10,
      30,
      0
    );
    let lastpause = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      15,
      30,
      0
    );
    let secondsUntilPause = 0;
    let isPause = false;
    let cpt = compareDesc(now, firstpause) + compareDesc(now, lastpause);
    switch (cpt) {
      case 2:
        secondsUntilPause = firstpause.getTime() - now.getTime();
        console.log('2');
        break;
      case 0:
        secondsUntilPause = lastpause.getTime() - now.getTime();
        console.log('0');
        break;
      case -2:
        secondsUntilPause =
          startOfTomorrow().getTime() - now.getTime() + 37800000;
        console.log('-2');
        break;
      default:
        isPause = true;
        break;
    }

    return secondsUntilPause;
  }

  public countdown() {
    const x = setInterval(() => {
      const distance = Math.abs(this.getNextPause());
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.timer = hours + 'h ' + minutes + 'm ' + seconds + 's ';

      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  }
}
