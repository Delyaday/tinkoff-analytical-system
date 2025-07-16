import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
})
export class AppComponent {
  title = 'tinkoffclient';

   constructor() {
    const element = document.querySelector('html');

    if (element)
    element.classList.toggle('app-dark');
    
  }

}
