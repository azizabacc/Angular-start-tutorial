

# Quick Start
npm install -g @angular/cli
ng new my-first-project
cd my-first-project
ng serve

# Create a component 
ng g c componentName

# Create a service 
ng g s serviceName

# Angular Forms 


DEMO : 
in app.module.ts import the FormsModule :
```ts
import { FormsModule } from '@angular/forms';
```
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

# Angular Services

features of Angular services :

- An Angular service is a class
- Decorated with `@injectibe` 
- services can share the same piece of code 
- services can inject other services as dependencies
- can be used to interact with the backend
- can be used to share data amoung componenents
- they are singletons : only a single instance of a service gets created and the same instance is used by each and every building block in the application
- a service can be registred as a part of a module or a part of a component

```sh
ng g service data
```

# Bootstrap

two ways of embedding :

1. CDN
2. Bootstrap NPM

for 2 : 
 ```sh
 npm i bootstrap
 npm i jquery
 ```
add the relative paths in scripts in `angular.json` :
 ```json
 {
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "my-first-project": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss"
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/my-first-project",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": [
              "my-first-project/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
              "my-first-project/node_modules/jquery/dist/jquery.min.js"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "browserTarget": "my-first-project:build:production"
            },
            "development": {
              "browserTarget": "my-first-project:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "my-first-project:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          }
        }
      }
    }
  },
  "cli": {
    "analytics": "48e15cf3-d64b-45e3-81f3-9e8ee66a10df"
  }
}
 
 ```
# Routing

insure that the `base` tag is in `index.html` file :
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>MyFirstProject</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>


```

Insure to have `AppRoutingModule` module imported in `app.modules.ts` :

```ts
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ]
```

define the paths and relative component in `app-routing-module.ts` :

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

Bind the route to a specifique tag in our case in `navbar.component.html` :

```html 
<li class="nav-item"><a class="nav-link" href="#!" routerLink="/login" routerLinkActive="active">Login</a></li>

```

choose where the component have to be displayed afeter clicking on the links. This coulb be done the Router outlet directive `<router-outlet></router-outlet>` in our case in the app.componenent.html : 
```html

```