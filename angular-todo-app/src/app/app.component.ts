import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // exporting a title variable in case that we want to use it in our html template
  title: string = 'Welcome to my first Angular TO-DO App';
}
