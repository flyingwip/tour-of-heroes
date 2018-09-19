import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

//,FormsModule


import { AppComponent } from './app.component';

// Every component must be declared in exactly one NgModule.
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  // The HeroesComponent is declared in the @NgModule.declarations array.
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  // imports array, which contains a list of external modules that the app needs.
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
