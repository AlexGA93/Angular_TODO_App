import { Component, OnInit } from '@angular/core';

// mock-tasks
import {Task} from '../../Tasks';
import {Tasks} from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //imported mock-tasks and typescript interface
  tasks: Task[] = Tasks;

  constructor() { }

  ngOnInit(): void {
  }

}
