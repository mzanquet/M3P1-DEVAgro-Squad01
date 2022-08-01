import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-fazenda-cadastro',
  templateUrl: './fazenda-cadastro.component.html',
  styleUrls: ['./fazenda-cadastro.component.css'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .5em;
  }
  `]
})

export class FazendaCadastroComponent implements OnInit {

  formFazenda: FormGroup;

  constructor(private router: Router, private primengConfig: PrimeNGConfig, private formBuilder: FormBuilder) {
    this.formFazenda = this.formBuilder.group({
      nome: "",
      grao: "",
      ultimaColheita:"",
      localizacao: ""
    })
  };

  @Input() public titulo: string = "Cadastro de fazendas";

  ngOnInit(): void {
    this.listaFazendasArmazenamento = JSON.parse(String(localStorage.getItem("ListaFazendas"))) || [];
    localStorage.setItem("ListaFazendas", JSON.stringify(this.listaFazendasArmazenamento));
    console.log(this.listaFazendasArmazenamento);
  };

  listaFazendasArmazenamento: Array<Object> = [];

fazendaInfo:any = {
    id:0,
    nome: "",
    grao: "",
    ultimaColheita: "",
    localizacao: ""
  };

  alterarNome(nome: string): void {
    this.fazendaInfo.nome = nome;
  };

  alterarGrao(grao: string): void {
    this.fazendaInfo.grao = grao;
  };

  alterarUltimaColheita(ultimaColheita: string): void {
    this.fazendaInfo.ultimaColheita = ultimaColheita;
  };

  alterarLocalizacao(localizacao: string): void {
    this.fazendaInfo.localizacao = localizacao;
  };

  onSubmit() {
    let id = Number(localStorage.getItem("QuantidadeFazendas"));
    if(id == null) {
      this.fazendaInfo.id = 0;
    }
    else {
      this.fazendaInfo.id = id;
    };

    //Adiciona objeto na lista
    this.listaFazendasArmazenamento.push(this.fazendaInfo);
    
    //Referencia o localStorage a lista
    localStorage.setItem("ListaFazendas", JSON.stringify(this.listaFazendasArmazenamento));
    localStorage.setItem("QuantidadeFazendas", String(id + 1));
    this.router.navigateByUrl('/admin/fazendas');
  };

}
