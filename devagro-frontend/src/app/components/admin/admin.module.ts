import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rotas
import { AdminRoutingModule } from './admin-routing.module';

// Páginas
import { HomeComponent } from './pages/home/home.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { FazendasComponent } from './pages/fazendas/fazendas.component';
import { GraosComponent } from './pages/graos/graos.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { TemplateBodyComponent } from '../template-body/template-body.component';

import { FuncionarioAlteraCadastroComponent } from './pages/funcionarios/funcionario-altera-cadastro/funcionario-altera-cadastro.component';
import { FuncionarioCadastroComponent } from './pages/funcionarios/funcionario-cadastro/funcionario-cadastro.component';
import { FazendaCadastroComponent } from './pages/fazendas/fazenda-cadastro/fazenda-cadastro.component';
import { GraosCadastroComponent } from './pages/graos/graos-cadastro/graos-cadastro.component';

@NgModule({
  declarations: [
    HomeComponent,
    FuncionariosComponent,
    FazendasComponent,
    GraosComponent,
    SidenavComponent,
    TemplateBodyComponent,
    FuncionariosComponent,
    FuncionarioCadastroComponent,
    FuncionarioAlteraCadastroComponent,
    FazendaCadastroComponent,
    GraosCadastroComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
