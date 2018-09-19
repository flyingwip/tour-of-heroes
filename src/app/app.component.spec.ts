import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
// We want to test HeroesComponent because it is a cutom component
import { HeroesComponent } from './heroes/heroes.component';
//import { FormsModule } from '@angular/forms'; // <-- NgModel lives here



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //likewise to app.module
      declarations: [
        AppComponent,
        HeroesComponent 
        
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Tour of Heroes'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes');
  }));
});
