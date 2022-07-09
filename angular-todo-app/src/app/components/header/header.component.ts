import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //We've cut this string from app.component.ts to incorporate in the header
  title: string = 'Angular TO-DO App';

  constructor() { }

  // Life cycle method
  ngOnInit(): void {
  }

  // method that do someting when angular calls the event emitter
  toggleAddTask() {
    console.log('toggle');
    
  }

}
