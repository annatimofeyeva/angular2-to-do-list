import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>My First Angular 2 App</h1>
  <h3>{{currentFocus}}</h3>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
}
