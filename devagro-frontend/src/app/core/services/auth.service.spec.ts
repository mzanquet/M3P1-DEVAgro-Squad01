import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AuthService, HttpClient ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ]
    });
    service = TestBed.inject(AuthService);  
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
