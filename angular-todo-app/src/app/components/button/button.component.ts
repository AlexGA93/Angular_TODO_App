import { 
  Component, 
  OnInit, 
  Input, // This component is an input so we need this module
  
  Output, // We use Output to deal with output event 
  EventEmitter

} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // Dealing with html app-button props
  @Input() text!: string;
  @Input() color!: string;

  //  output event
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  // onCLick method that is linked to Angular (click) event
  onClick() {
    /*
      when button is pressed (click) event calls
     'onClick method', angular emits an output event
    */
    this.btnClick.emit();
  }
}
