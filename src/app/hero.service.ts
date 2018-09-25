import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';


// Dependency injection (DI), is an important application design pattern
/*
* Dependencies are services or objects that a class needs to perform its function.
* DI is a coding pattern in which a class asks for dependencies from external sources rather than creating them itself.
* https://angular.io/guide/dependency-injection
*/

/*
* You must make the HeroService available to the dependency injection system before Angular can inject it 
* into the HeroesComponent, as you will do below. You do this by registering a provider. 
*/

@Injectable()
export class HeroService {

  constructor() { }

 //  getHeroes(): Hero[] {
	// return HEROES;
 //  }  

	getHeroes(): Observable<Hero[]> {
  		return of(HEROES);
	}

	getHero(id: number): Observable<Hero> {
  	// TODO: send the message _after_ fetching the hero
  		return of(HEROES.find(hero => hero.id === id));
	}	

}
