import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent }, // The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
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
