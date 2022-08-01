import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FuncionarioAlteraCadastroComponent } from './funcionario-altera-cadastro.component';

describe('FuncionarioAlteraCadastroComponent', () => {
  let component: FuncionarioAlteraCadastroComponent;
  let fixture: ComponentFixture<FuncionarioAlteraCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioAlteraCadastroComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioAlteraCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
