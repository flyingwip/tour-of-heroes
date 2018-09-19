import { Blaat } from './blaat';
describe('BlaatClass', () => {

	beforeEach(function() {

	});

  it('should create instance of Blaat class', () => {

  	let blaat = new Blaat('meneertje'); 
  	expect(blaat.sayBlaat()).toBe('Hello, meneertje');
    
  });
});