import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroService } from '../hero.service';
import { RouterTestingModule } from '@angular/router/testing';

// HttpClientModule is needed when HttpClient is provided
// see hero-service.ts
import { HttpClientModule } from '@angular/common/http';


describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent, HeroDetailComponent ],
      imports: [FormsModule, RouterTestingModule, HttpClientModule],
      providers:[HeroService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have the hero name text equal to Windstorm', () => {

  //   expect(component.hero.name).toBe('Windstorm');

  // });
});
