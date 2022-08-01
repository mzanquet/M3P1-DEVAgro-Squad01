import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styleUrls: ['./empresa-cadastro.component.css']
})
export class EmpresaCadastroComponent implements OnInit {
  //a lista de objetos
  lista: Array<Object> = [];

  constructor() {};

  ngOnInit(): void {
    this.listaCadastroArmazenado = JSON.parse(String(localStorage.getItem("listadecadastros"))) || [];
    localStorage.setItem("listadecadastros", JSON.stringify(this.listaCadastroArmazenado));
    console.log(this.listaCadastroArmazenado);
  }

  valor: any;

  listaCadastroArmazenado: Array<Object> = [];

  //Cadastro de empresas novas
  cadastroEmpresaInfo: any = {
    id: 1,
    nomeEmpresarial: "",
    cnpj: "",
    endercoEmpresa: "",
    emailEmpresa: "",
    telefoneEmpresa: "",
    senhaEmpresa: "",
    senhaEmpresaNovamente: ""
  };

  //Salva os textos
  salvarNomeEmpresarial(nomeEmpresarial: string): void {
    this.cadastroEmpresaInfo.nomeEmpresarial = nomeEmpresarial;
  };

  salvarCnpj(cnpj: string): void {
    this.cadastroEmpresaInfo.cnpj = cnpj;
  };

  salvarEndercoEmpresa(endercoEmpresa: string): void {
    this.cadastroEmpresaInfo.endercoEmpresa = endercoEmpresa;
  };

  salvarEmailEmpresa(emailEmpresa: string): void {
    this.cadastroEmpresaInfo.emailEmpresa = emailEmpresa;
  };

  salvarTelefoneEmpresa(telefoneEmpresa: string): void {
    this.cadastroEmpresaInfo.telefoneEmpresa = telefoneEmpresa;
  };

  salvarSenhaEmpresa(senhaEmpresa: string): void {
    this.cadastroEmpresaInfo.senhaEmpresa = senhaEmpresa;
  };

  salvarSenhaEmpresaNovamente(senhaEmpresaNovamente: string): void {
    this.cadastroEmpresaInfo.senhaEmpresaNovamente = senhaEmpresaNovamente;
  };


  // Função para cadastrar
  clickLogin(): void {
    let id = Number(localStorage.getItem("quantidadeEmpresasCadastradas"));
    if(id == null) {
      this.cadastroEmpresaInfo.id = 1;
    }
    else {
      this.cadastroEmpresaInfo.id = id;
    };


    //empresa
    let cadastroEmpresaJson: string = JSON.stringify(this.cadastroEmpresaInfo);
  
    //Inserindo O Objeto Grão á lista
    this.listaCadastroArmazenado.push(cadastroEmpresaJson);
  
    //Referenciando o LocaStorage á lista
    localStorage.setItem("listaCadastroEmpresa", JSON.stringify(this.listaCadastroArmazenado));
    console.log(this.listaCadastroArmazenado);
  
    ///Cria LocalStorage e o grão referenciados
    localStorage.setItem("empresa_" + String(id), cadastroEmpresaJson);
    localStorage.setItem("quantidadeEmpresasCadastradas", String(id + 1));
  
    ///Evento 
    console.log(cadastroEmpresaJson);
    console.log(this.cadastroEmpresaInfo);
  
  }
  
  selecionarEmpresa(id: Number): any {
    return JSON.parse(String(localStorage.getItem("empresa_" + String(id))));
  }
}