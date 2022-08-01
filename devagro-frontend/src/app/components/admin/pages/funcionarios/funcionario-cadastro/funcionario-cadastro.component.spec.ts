import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { AdminRoutingModule } from '../../../admin-routing.module';
import { RouterModule } from '@angular/router';

import { FuncionarioCadastroComponent } from './funcionario-cadastro.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FuncionarioCadastroComponent', () => {
  let component: FuncionarioCadastroComponent;
  let fixture: ComponentFixture<FuncionarioCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioCadastroComponent ],
      imports: [
        CommonModule,
        AdminRoutingModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        InputTextModule,
        CalendarModule,
        TableModule,
        CheckboxModule,
        SpeedDialModule,
        RouterModule,
        RouterTestingModule
        
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
