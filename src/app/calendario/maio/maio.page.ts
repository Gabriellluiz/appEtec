import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maio',
  templateUrl: './maio.page.html',
  styleUrls: ['./maio.page.scss'],
})
export class MaioPage implements OnInit {
  public listamaio=[
   {dia:'01',desc:'Feriado Nacional - <p class="texto"> Dia do trabalho </p>'}, 
   {dia:'03',desc:'Fim Periodo de Solicitação de Reconsiderações Intermediaria - <p class="texto"> Semestral </p>'}, 
   {dia:'03',desc:'Fim Periodo de Solicitação de Reconsiderações Intermediaria - <p class="texto"> anual </p>'}, 
   {dia:'06',desc:' Reunião da Direção com Equipe<p class="texto">Pedagogico-Administrativo</p>'}, 
   {dia:'06 a 10',desc:' Semana Paulo Freire'}, 
   {dia:'08',desc:'Dia da Escola-Família'}, 
   {dia:'17',desc:'Reunião do Conselho de Escola'}, 
   {dia:'17',desc:'Assembleia Geral Ordinária da<p class="texto">Associação de Pais e Mestres</p>'}, 
   {dia:'18',desc:'Reunião Pedagógica'}, 
   {dia:'20',desc:'Reunião da Direção com Equipe<p class="texto">Pedagogico-Administrativo</p>'}, 

  ];

  constructor() { }

  ngOnInit() {
  }

}
