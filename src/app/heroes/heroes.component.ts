import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


// @Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  // The CLI generated three metadata properties:
  selector: 'app-heroes', // The CSS element selector, 'app-heroes', matches the name of the HTML
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
// Always export the component class so you can import it elsewhere ... like in the AppModule.
export class HeroesComponent implements OnInit {

  heroes:Hero[];

  selectedHero: Hero;
  

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }  

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }  

}
