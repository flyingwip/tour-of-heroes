import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';

// HttpClientModule is needed when HttpClient is provided
// see hero-service.ts
import { HttpClientModule } from '@angular/common/http';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // HttpClientModule is needed when HttpClient is provided
      providers: [HeroService]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
