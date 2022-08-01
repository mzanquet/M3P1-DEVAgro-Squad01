import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-grao-cadastro',
  templateUrl: './grao-cadastro.component.html',
  styleUrls: ['./grao-cadastro.component.css'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .5em;
  }
  `]
})
 
export class GraoCadastroComponent implements OnInit {
  
  formGrao: FormGroup;

  constructor(private router: Router, private primengConfig: PrimeNGConfig, private formBuilder: FormBuilder) { 
    this.formGrao = this.formBuilder.group({
      nome: "",
      fazenda: "",
      colheita:"",
      informacoes: ""
    })
  }

  @Input() public titulo: string = "Cadastro grãos"

  ngOnInit(): void {
    this.listaGraosArmazenamento = JSON.parse(String(localStorage.getItem("listaGraos"))) || [];
    localStorage.setItem("listaGraos",JSON.stringify(this.listaGraosArmazenamento));
     console.log(this.listaGraosArmazenamento);
  };

  listaGraosArmazenamento :Array<Object> = [];

  //Grão Lista
  graoInfo:any = {
    id: 0,
    nome: "",
    fazenda: "",
    colheita: "",
    informacoes: "",
  };

  alterarNome(nome: string): void {
    this.graoInfo.nome = nome;
  };

  alterarFazenda(fazenda: string): void {
    this.graoInfo.fazenda = fazenda;
  };

  alterarColheita(colheita: string): void {
    this.graoInfo.colheita = colheita;
  };

  alterarInformacoes(informacoes: string): void {
    this.graoInfo.informacoes = informacoes;
  };

  //Função cadastrar 

  clickCadastrar(): void {
    let id = Number(localStorage.getItem("QuantidadeGrao")) + 1;
    
    if(id == null) {
      this.graoInfo.id = 0
    } else {
      this.graoInfo.id = id
    };


    //Grão
    let graoInfoJson: string = JSON.stringify(this.graoInfo);

    //Inserindo O Objeto Grão á lista
    this.listaGraosArmazenamento.push(graoInfoJson);

    //Referenciando o LocaStorage á lista
    localStorage.setItem("listaGraos", JSON.stringify(this.listaGraosArmazenamento));
    console.log(this.listaGraosArmazenamento);

    ///Cria LocalStorage e o grão referenciados
    localStorage.setItem("grao_" + String(id),graoInfoJson);

    localStorage.setItem("QuantidadeGrao",String(id));
  }

  pegar_grao(id: Number): any {
    return JSON.parse(String(localStorage.getItem("grao_" + String(id))));
  }

  btnClick = () => {
    
    this.router.navigateByUrl('/admin/graos');
  };

}
