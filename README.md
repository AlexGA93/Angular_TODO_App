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

## Properties And Interpolation

## Global Styles

## Header Component

## Button Component

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