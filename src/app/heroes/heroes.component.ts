import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


// @Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  // The CLI generated three metadata properties:
  selector: 'app-heroes', // The CSS element selector, 'app-heroes', matches the name of the HTML
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
// Always export the component class so you can import it elsewhere ... like in the AppModule.
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero: Hero;
  

  constructor() {}

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }  

}
