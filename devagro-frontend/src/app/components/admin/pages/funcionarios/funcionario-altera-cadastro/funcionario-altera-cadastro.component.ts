import { JsonpClientBackend } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-funcionario-altera-cadastro',
  templateUrl: './funcionario-altera-cadastro.component.html',
  styles: [`
      :host ::ng-deep button {
          margin-right: .5em;
      }
    `]
})

export class FuncionarioAlteraCadastroComponent implements OnInit {

  formFuncionario: FormGroup;

  constructor(private primengConfig: PrimeNGConfig, private formBuilder: FormBuilder) {
    this.formFuncionario = this.formBuilder.group({
      nome:"",
      fazenda:"",
      funcaoPrincipal:""
    })
  };

  funcionarioInfoResumo = {
    nome:"",
    fazenda:"",
    funcaoPrincipal:""
  };

  funcionarioInfo = {
    id: 0,
    nome: "",
    fazenda: "",
    cpf: "",
    telefone: "",
    funcaoPrincipal: "",
    ativo: true
  };

  funcionarioAtualizado = {
    id: 0,
    nome: "",
    fazenda: "",
    cpf: "",
    telefone: "",
    funcaoPrincipal: "",
    ativo: true
  };

  nome: string= "";
  id: number= 0;
  fazenda: string= "";
  cpf: string= "";
  telefone: string= "";
  funcaoPrincipal: string= "";
  ativo: boolean= true;


  ngOnInit(): void {
    this.constroiListaObjeto();
    console.log(this.listLocalStorage);
    this.primengConfig.ripple = true;
  };

  listLocalStorage: Array<String> = Object(JSON.parse(String(localStorage.getItem("ListaFuncionarios"))));
  listaLocalStorageObject: Array<Object> = [];
  listaAtualizadaComObjetoStringficado: string= "";
  listaString: Array<string> = [];
  valorNome = document.querySelector("#input-nome") as HTMLInputElement;
  valorFazenda = document.querySelector("#input-fazenda") as HTMLInputElement;
  valorFuncao = document.querySelector("#input-funcaoPrincipal") as HTMLInputElement;


  alteraInfo() {
    console.log("xxxxx");
    let valorNome = document.querySelector("#input-nome") as HTMLInputElement;
    let valorFazenda = document.querySelector("#input-fazenda") as HTMLInputElement;
    let valorFuncao = document.querySelector("#input-funcaoPrincipal") as HTMLInputElement;

    this.funcionarioInfoResumo.nome = valorNome.value;
    this.funcionarioInfoResumo.fazenda = valorFazenda.value;
    this.funcionarioInfoResumo.funcaoPrincipal = valorFuncao.value;
    console.log(this.funcionarioInfoResumo.nome);
    console.log(this.funcionarioInfoResumo.fazenda);
    console.log(this.funcionarioInfoResumo.funcaoPrincipal);

    this.encontraFuncionairo(this.funcionarioInfoResumo.nome, this.listaLocalStorageObject,
      this.funcionarioInfoResumo.fazenda,this.funcionarioInfoResumo.funcaoPrincipal);
    this.procuraEDeleta(this.funcionarioInfoResumo.nome,this.listaLocalStorageObject);
    this.setaNovoObj(this.listaLocalStorageObject);
    this.stringficaLsita(this.listaLocalStorageObject);
    this.setaLocalStorage();
  };

  encontraFuncionairo(nome: string, list: Array<Object>, fazenda: string, funcao: string) {
   // list.find(Element.arguments=="nome")
    list.forEach(elemental => {
      //this.constroiListaObjeto()
      Object.entries(elemental).forEach(element => {
        if(element[1]==nome){
          console.log(elemental);
          Object.entries(elemental).forEach(element => {

            if(element[0]=="cpf") {
              console.log(element[1]);
              this.cpf=element[1];
              console.log(this.cpf);
            };

            if(element[0]=="ativo") {
              console.log(element[1]);
              this.ativo=this.setaAtividade();
              console.log(this.ativo);
            };

            if(element[0]=="telefone") {
              console.log(element[1]);
              this.telefone=element[1];
              console.log(this.telefone);
            };

            if(element[0]=="id") {
              console.log(element[1]);
              this.id=element[1];
              console.log(this.id);
            };

            if(element[0]=="funcaoPrincipal") {
              console.log(element[1]);
              this.funcaoPrincipal=this.funcionarioInfoResumo.funcaoPrincipal;
              console.log(this.funcaoPrincipal);
            }

            if(element[0]=="nome") {
              console.log(element[1]);
              this.nome=element[1];
              console.log(this.nome);
            };

            if(element[0]=="fazenda") {
              console.log(element[1]);
              this.fazenda=this.funcionarioInfoResumo.fazenda;
              console.log(this.fazenda);
            };

          });

        };

      });
      console.log(Object.entries(elemental));

    });

  };

  procuraEDeleta(nome: string, list: Array<Object>) {
    console.log(list);
    // list.find(Element.arguments=="nome")
    list.forEach(elemental => {
      //this.constroiListaObjeto()
      Object.entries(elemental).forEach(element=> {
        if(element[1]==nome){
          list.splice(this.id,  1);
          console.log(list);
        };
      });
    });
  };

  setaNovoObj(list:Array<Object>) {
    this.funcionarioAtualizado.cpf=this.cpf;
    this.funcionarioAtualizado.ativo=this.ativo;
    this.funcionarioAtualizado.fazenda=this.fazenda;
    this.funcionarioAtualizado.funcaoPrincipal=this.funcaoPrincipal;
    this.funcionarioAtualizado.id=this.id;
    this.funcionarioAtualizado.nome=this.nome;
    this.funcionarioAtualizado.telefone=this.telefone;
    console.log(list);
    list.splice(this.funcionarioAtualizado.id, 0, this.funcionarioAtualizado);
    console.log(this.funcionarioAtualizado);
    console.log(list);
  };

  stringficaLsita(list:Array<Object>) {
    list.forEach(element => {
      var elementString = JSON.stringify(element)
      this.listaString.push(elementString)
    });
    console.log(this.listaString);
  };

  setaLocalStorage() {
      localStorage.setItem('ListaFuncionarios', JSON.stringify(this.listaString));
  };

  constroiListaObjeto() {
    this.listLocalStorage.forEach(element => {
      console.log(JSON.parse(String(element)));
      this.listaLocalStorageObject.push(JSON.parse(String(element)));
      console.log(this.listaLocalStorageObject);
       console.log(element);
       //console.log(element.isPrototypeOf)
     });
  };

  setaAtividade() {
    var check = document.querySelector('#check') as HTMLInputElement;
    var checkNo= document.querySelector('#check-no') as HTMLInputElement;

    if(checkNo.checked==true) {
      this.ativo=false;
      return false;
    } if(check.checked==true){
      return true;
    } else {
      return false;
    };
  };

};
