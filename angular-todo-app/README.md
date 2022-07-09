# AngularTodoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# Angular_TODO_App
Simple Angular TO-DO Web application

# Index
[0. Setup](#setup)

[1. Component Structure](#component-structure)

[2. Properties and Interpolation](#properties-and-interpolation)

[3. Global Styles](#global-styles)

[4. Header Component](#header-component)

[5. Button Component](#button-component)

[6. Component Input Data](#component-input-data)

[7. Creating an event and event emitter output](#creating-an-event-and-event-emitter-output)

[8. Mock Tasks and Task Interface](#mock-tasks-and-task-interface)

[9. Tasks Component](#tasks-component)

[10. Looping with ngFor](#looping-with-ngfor)

[11. Task Item Component](#task-item-component)

[12. Angular Font Awesome Setup](#angular-font-awesome-setup)

[13. Create a Task Service](#create-a-task-service)

[14. Creating and Subscribe to Observable](#creating-and-subscribe-to-observable)

[15. JSON-Server Setup](#json-server-setup)

[16. Angular HTTP Client](#angular-http-client)

[17. Fetching Tasks](#fetching-tasks)

[18. Deleting Tasks](#deleting-tasks)

[19. Toggle Reminder](#toggle-reminder)

[20. Add Task Component](#add-task-component)

[21. Forms Module and ngModel](#forms-module-and-ngmodel)

[22. Submit and Create Task](#submit-and-create-task)

[23. Toggle Button and UI Service](#toggle-button-and-ui-service)

[24. Angular Router](#angular-router)

[25. Limit Component to Route](#limit-component-to-route)


-----------------------------------------------------
## Setup
Standard tooling for Angular development.

- Installing Angular client
    ```
    npm install -g @angular/cli
    ```
- Init Angular Project
    ```
    ng new project_name
    ```
- Access to Angular Project
    ```
    cd project_name/
    ```
- RUn dev server
    ```
    ng serve
    ```
**Note**: At the beginning of the project's creation Angular will ask us if we want to add Angular Routing. In this case wi will choose to not install it because we will install and use at the final project's steps.

We've generated a new Angular project that It will be called from a single 'index.html' file as "< app-root></ app-root >":

- **~/angular-todo-app/src/index.html**
    ```
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>AngularTodoApp</title>
                <base href="/">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="icon" type="image/x-icon" href="favicon.ico">
            </head>
            <body>
                <app-root></app-root>
            </body>
        </html>
    ```
- Angular's entry point: **~/angular-todo-app/src/main.ts**
    ```
    import { enableProdMode } from '@angular/core';
    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

    import { AppModule } from './app/app.module';
    import { environment } from './environments/environment';

    if (environment.production) {
    enableProdMode();
    }

    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

    ``` 
## Component Structure
When we create an Angular component we create a new folder with a couple of files that define our project's logicand data:

We're going to use our app's component as an example:

- Angular Modules('app.module.ts')
    ```
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';

    import { AppComponent } from './app.component';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    ```

- Angular components('app.component.ts')

    Defines the logic for the app's father component.
    ```
    import { Component } from '@angular/core';

    // component decoration 
    @Component({
        selector: 'app-root', //<--- Embedded in html file as <app-root></app-root>
        templateUrl: './app.component.html', // Defining html template
        styleUrls: ['./app.component.css'] // Defining stylesheet template
    })
    export class AppComponent {
        // exporting a title variable in case that we want to use it in our html template
        title: string = 'Welcome to my first Angular TO-DO App';
    }

    ```

- Angular templates('app.component.html')
    
    Defines the HTML template associated with the father component. In this case we've substituted the vanilla code for a first-single title.
    ```
    <h1> Hello Angular! </h1>
    <!-- Exported  title from app.component.ts-->
    <h2>{{ title }}</h2>
    ```
    
- Angular styles 
    
    Defines the base CSS stylesheet for the father component.


## Properties And Interpolation
Notify that we need to insert a logic's property in our html template as if we insert simple javascript logic.

The workflow in Angular allows us to work in separate modules and call them with simple instructions.

## Global Styles
We have applied a simple global stylesheet in our app.component.css file for this project.

## Header Component
We're going to create our first custom component called Header:
```
ng generate component components/header
```
We'va specified to Angular to create a folder called 'components' and generate the header component inside a fodler called 'header'. 

The next step is incorporate to our app html template the created component. We can see in the header component's log script that it must be called as '< app-header ></ app-header >'.

- app.component.html
    ```
    <div class="container">
        <app-header></app-header>
    </div>
    ```
- components/header/header.component.html
    ```
    <header>
        <h1> {{title}} </h1>
    </header>
    ```
- components/header/header.component.ts
    ```
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

    }

    ```
- components/header/header.component.css
    ```
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    ```
## Button Component
With the same process that the previous point we're going to create a button component to our app's container:

```
ng generate component components/button
```
We have a simple button configuratio nto a new component.

- button.component.html
    ```
    <button class="btn">Click</button>
    ```
- button.component.ts
    ```
    import { 
        Component, 
        OnInit, 
        Input // This component is an input so we need this module
    } from '@angular/core';

    @Component({
        selector: 'app-button',
        templateUrl: './button.component.html',
        styleUrls: ['./button.component.css']
    })
    export class ButtonComponent implements OnInit {

        constructor() { }

        ngOnInit(): void {
        }

    }

    ```

## Component Input Data
Event Logic
Once we have our button component we need to deal with the Input data. We need to declare an event logic.

## Creating an event and event emitter output
- First of all we press out button element calling the onClick method
    ```
    <button 
        [ngStyle]="{'background-color': color}" 
        (click)="onClick()"
        class="btn">
            {{text}}
    </button>
    ```
- It will toggle the button.component.ts onCLick method that emits an emitter event.

    ```
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
    ```
- When the btnClick event emits angular will call to the header.component.html (btnClick)="toggleAddTask()" method
    ```
        <app-button 
            color="green" 
            text="Add"

            (btnClick)="toggleAddTask()"

        ></app-button>
    ```
- The final step is access to the toggleAddTask method that has been declared in header.component.ts
    ```
    toggleAddTask() {
        console.log('toggle');
    }
    ```

## Mock Tasks and Task Interface
At this point we're going to create a typescript file that exports
a task array to render in our frontend. In the future this functionallity will come from JSON-SERVER.
- app/mock-tasks.ts
    ```
    import {Task} from './Tasks';

    export const Tasks: Task[]= [
        {
            id: 1,
            text: 'Task 1',
            day: '',
            reminder: true,
        },
        {
            id: 2,
            text: 'Task 2',
            day: '',
            reminder: true,
        },
        {
            id: 3,
            text: 'Task 3',
            day: '',
            reminder: true,
        },
        {
            id: 4,
            text: 'Task 4',
            day: '',
            reminder: true,
        },
        {
            id: 5,
            text: 'Task 5',
            day: '',
            reminder: true,
        },
    ];
    ```
- app/Tasks.ts
    ```
    export interface Task {
        id?: number;
        text: string;
        day: string;
        reminder: boolean
    }
    ```
## Tasks Component

## Looping with ngFor

## Task Item Component

## Angular Font Awesome Setup

## Create a Task Service

## Creating and Subscribe to Observable

## JSON-Server Setup

## Angular HTTP Client

## Fetching Tasks

## Deleting Tasks

## Toggle Reminder

## Add Task Component

## Forms Module and ngModel

## Submit and Create Task

## Toggle Button and UI Service

## Angular Router

## Limit Component to Route