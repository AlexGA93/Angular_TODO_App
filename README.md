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

## Creating an event and event emitter output

## Mock Tasks and Task Interface

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