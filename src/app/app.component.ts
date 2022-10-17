import { Component } from '@angular/core';
import { compareAsc, startOfTomorrow } from 'date-fns';

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
    let now = new Date();
    let firstpause = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 30, 0);
    let lastpause = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 30, 0);
    let isBusinessDay = now.getDay() !== 0 && now.getDay() !== 6;
    let secondsUntilPause = 0;
    let isPause = false;
    let cpt = compareAsc(now, firstpause) + compareAsc(now, lastpause);
      switch (cpt) {
        case 2:
          secondsUntilPause = (firstpause.getTime() - now.getTime()) / 1000;
          break;
        case 0:
          secondsUntilPause = (lastpause.getTime() - now.getTime()) / 1000;
          break;
        case -2:
          secondsUntilPause = ((startOfTomorrow().getTime() - now.getTime()) / 1000) +  37800;
          break;
        default:
          isPause = true;
          break;
      }

      console.log(firstpause, lastpause,isBusinessDay);
    }

  public countdown(){
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
  }
  }



