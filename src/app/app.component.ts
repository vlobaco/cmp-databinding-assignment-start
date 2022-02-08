import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numbers: Array<number> = [];

  onNewEvent (event: number) {
    this.numbers.push(event);
  }
}
