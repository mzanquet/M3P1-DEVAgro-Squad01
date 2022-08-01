import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-funcionario-cadastro',
  templateUrl: './funcionario-cadastro.component.html',
  styleUrls: ['./funcionario-cadastro.component.css'],
  styles: [`
      :host ::ng-deep button {
          margin-right: .5em;
      }
    `]
})

export class FuncionarioCadastroComponent implements OnInit {

  formCadastroFuncionario: FormGroup;

  lista:Array<Object> = [];

  constructor(private primengConfig: PrimeNGConfig, private formBuilder: FormBuilder) { 
    this.formCadastroFuncionario = this.formBuilder.group({
      nome: "",
      fazenda: "",
      cpf: "",
      telefone: "",
      funcaoPrincipal: "",
      ativo: ""
    });
  };

  ngOnInit(): void {
    ///preenche a lista  com os objetos armazenado no localStorage sempre que a tela inicia
    
    this.listaFuncionariosArmazenamento = JSON.parse(String(localStorage.getItem("listaFuncionarios"))) || [];
    //Array( JSON.parse(String(localStorage.getItem("listaFuncionarios"))))
    localStorage.setItem("listaFuncionarios",JSON.stringify(this.listaFuncionariosArmazenamento)); 
    console.log(this.listaFuncionariosArmazenamento);
  };

  Constructor() { };

  valor: any;
  //|| JSON.parse(String(localStorage.getItem("listaFuncionarios")))
  listaFuncionariosArmazenamento: Array<Object> = []; 

  funcionarioInfo:any = {
    id: 0,
    nome: "",
    fazenda: "",
    cpf: "",
    telefone: "",
    funcaoPrincipal: "",
    ativo: ""
  };

  alterarNome(nome: string): void {
    this.funcionarioInfo.nome = nome;
  };

  alterarFazenda(fazenda: string): void {
    this.funcionarioInfo.fazenda = fazenda;
  };

  alterarCpf(cpf: string): void {
    this.funcionarioInfo.cpf = cpf;
  };

  alterarTelefone(telefone: string): void {
    this.funcionarioInfo.telefone = telefone;
  };

  alterarFuncaoPrincipal(funcaoPrincipal: string): void {
    this.funcionarioInfo.funcaoPrincipal = funcaoPrincipal;
  };

  alterarAtivo(ativo: boolean): void {
    this.funcionarioInfo.ativo = ativo;
  };

  clickCadastrar(): void {
    let id = Number(localStorage.getItem("QuantidadeFuncionarios"));
    if(id == null) {
      this.funcionarioInfo.id = 0;
    } else {
      this.funcionarioInfo.id = id;
    };

    //Tranforma objeto em String
    let funcionarioInfoJson: string = JSON.stringify(this.funcionarioInfo);

    //Add objeto a lista
    this.listaFuncionariosArmazenamento.push(funcionarioInfoJson);

    //Referencia o localStorage a lista
    localStorage.setItem("listaFuncionarios", JSON.stringify(this.listaFuncionariosArmazenamento));
    console.log(this.listaFuncionariosArmazenamento);

    //Adiciona funcionário e localStorage
    localStorage.setItem("funcionario_" + String(id), funcionarioInfoJson);
    localStorage.setItem("QuantidadeFuncionarios",String(id + 1));

    ///Event emitter
    console.log(funcionarioInfoJson);
    console.log(this.funcionarioInfo);
  };

  selecionafuncionario(id: Number): any {
    return JSON.parse(String(localStorage.getItem("funcionario_" + String(id))));
  };

}
