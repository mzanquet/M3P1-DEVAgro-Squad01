import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { GraoCadastroComponent } from './grao-cadastro.component';

describe('GraoCadastroComponent', () => {
  let component: GraoCadastroComponent;
  let fixture: ComponentFixture<GraoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraoCadastroComponent ],
      imports: [
        RouterTestingModule, 
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    localStorage.clear();
    fixture = TestBed.createComponent(GraoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add', () => {

    let graoInformacao = {};
    
    graoInformacao = component.graoInfo;
    component.clickCadastrar();
    const qtdElementosCadastrados = Number(localStorage.getItem('TotalGrao'));
    expect(1).toEqual(qtdElementosCadastrados);
  });

  it('should return error if form is invalid', () => {
    expect(() => component.clickCadastrar()).toThrow;
  })
  
  it("should validate 'toBeFalsy' matcher use for fazendaInfo object", () => {
    expect(component.graoInfo).not.toBeFalsy();
  });

  it("should validate 'toMatch' matcher use for ultimaColheita date", () => {
    expect(component.graoInfo.colheita).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
  })
  
  it("should validate 'toBeDefined' to use for object format", function() {
    expect(component.graoInfo).toBeDefined();
    });

  
});
