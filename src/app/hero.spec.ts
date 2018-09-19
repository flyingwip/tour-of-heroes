import { Hero } from './hero';
describe('HeroesClass', () => {

	beforeEach(function() {

	});

  it('should create instance of Hero class', () => {

  	let hero: Hero = {
	    id: 1,
	    name: 'Windstorm'
	  };
	expect(hero instanceof Object).toBe(true);	
    
  });
});