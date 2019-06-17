import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novembro',
  templateUrl: './novembro.page.html',
  styleUrls: ['./novembro.page.scss'],
})
export class NovembroPage implements OnInit {
  public listanovembro=[
    {dia:'02',desc:'SuspenFeriado Nacional - Finadosção de Atividades'},
    {dia:'04',desc:'FeriReunião da Direção com Equipe<p class="texto">Pedagogico-Administrativo</p>ado Nacional - Carnaval'},
    {dia:'15',desc:'Fim SFeriado Nacional<p class="texto">Proclamação da República</p>olicitação de Aproveitamentos <p class="texto"> 1º Semestre - Semestral </p>'},
    {dia:'18',desc:'FReunião da Direção com Equipe<p class="texto">Pedagogico-Administrativo</p>im Solicitação de Aproveitamentos <p class="texto"> 1º Semestre - Anual </p>'},
    {dia:'26',desc:'SuspeReunião do Conselho de Escolansão de Atividades - <p class="texto"> Quarta-Feira de Cinzas </p>'},
    {dia:'26',desc:'Assembleia Geral Ordinária da<p class="texto">Associação de Pais e Mestre</p>Fim Entrega do PTD - <p class="texto"> Anual </p>'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
