import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/core/services/auth.service';

import { FazendaCadastroComponent } from './fazenda-cadastro.component';

describe('FazendaCadastroComponent', () => {
  let component: FazendaCadastroComponent;
  let fixture: ComponentFixture<FazendaCadastroComponent>;
  let authService: jasmine.SpyObj<AuthService>

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      declarations: [ FazendaCadastroComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FazendaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return error if form is invalid', () => {
    expect(() => component.onSubmit()).toThrow;
  })
  
  it("should validate 'toBeFalsy' matcher use for fazendaInfo object", () => {
    expect(component.fazendaInfo).not.toBeFalsy();
  });

  it("should validate 'toMatch' matcher use for ultimaColheita date", () => {
    expect(component.fazendaInfo.ultimaColheita).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
  })
  
  it("should validate 'toBeDefined' to use for object format", function() {
    expect(component.fazendaInfo).toBeDefined();
    });



});


  
