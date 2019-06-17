import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-junho',
  templateUrl: './junho.page.html',
  styleUrls: ['./junho.page.scss'],
})
export class JunhoPage implements OnInit {
  public listajunho=[
    {dia:'03',desc:'Reunião da Direção com Equipe<p class="texto">Pedagogico-Administrativo</p>'},
    {dia:'14',desc:'Festa Junina'},
    {dia:'17',desc:'Reunião da Direção com Equipe<p class="texto">Pedagogico-Administrativo</p>'},
    {dia:'20',desc:'Feriado Nacional - Corpus Christi'},
    {dia:'21',desc:'Suspensão de Atividades'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
