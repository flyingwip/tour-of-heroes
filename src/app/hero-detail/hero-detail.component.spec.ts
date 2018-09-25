import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';
import { RouterTestingModule } from '@angular/router/testing';


describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  // You want to inject a fake ActivatedRoute to your component, since you create it yourself in the test, 
  // and the router thus doesn't create it for you and inject an ActivatedRoute. So you can use something like this
  // {ActivatedRoute, useValue: fakeActivatedRoute},
  
  // const fakeActivatedRoute = {
  //     snapshot: { data: { ... } }
  //   } as ActivatedRoute;

  //{ActivatedRoute, useValue: fakeActivatedRoute},
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ],  
      imports: [FormsModule, RouterTestingModule], // RouterTestingModule for routerLink 
      providers: [ Location, HeroService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //console.log(component.hero);
    expect(component).toBeTruthy();
  });
});
