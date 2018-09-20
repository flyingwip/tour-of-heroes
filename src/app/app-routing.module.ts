import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];


/*
* Add RouterModule to the @NgModule.imports array and configure it with the routes in one step by calling 
* RouterModule.forRoot() within the imports array, like this:
*/
@NgModule({
   imports: [ RouterModule.forRoot(routes) ],	
   exports: [ RouterModule ]
 })
export class AppRoutingModule { }
