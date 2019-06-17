import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marco',
  templateUrl: './marco.page.html',
  styleUrls: ['./marco.page.scss'],
})
export class MarcoPage implements OnInit {
  public listamarco=[
    {dia:'04',desc:'Suspenção de Atividades'},
    {dia:'05',desc:'Feriado Nacional - Carnaval'},
    {dia:'06',desc:'Fim Solicitação de Aproveitamentos <p class="texto"> 1º Semestre - Semestral </p>'},
    {dia:'06',desc:'Fim Solicitação de Aproveitamentos <p class="texto"> 1º Semestre - Anual </p>'},
    {dia:'06',desc:'Suspensão de Atividades - <p class="texto"> Quarta-Feira de Cinzas </p>'},
    {dia:'07',desc:'Fim Entrega do PTD - <p class="texto"> Anual </p>'},
    {dia:'07',desc:'Fim Entrega do PTD 1º Semestre - <p class="texto"> Semestral </p>'},
    {dia:'07',desc:'Data Final de entrega de PTD'},
    {dia:'07',desc:'Reuniões de Curso'},
    {dia:'08',desc:'Reunião Pedagógica'},
    {dia:'11',desc:'Reunião da Direção com Equipe Pedagógico-Administrativo - <p class="texto"> Equipe Gestora, Coordenação, Auxiliares Docentes e Orientação Educacional </p>'},
    {dia:'15',desc:'Assembleia Geral Ordinaria da<p class="texto"> Associação de Pais e Mestre'},
    {dia:'18',desc:'Suspensão de Atividades'},
    {dia:'19',desc:'Feriado Municipal'},
    {dia:'25',desc:'Reunião da Direção com Equipe Pedagógico-Administrativo - <p class="texto"> Equipe Gestora, Coordenação, Auxiliares Docentes e Orientação Educacional </p>'},
    {dia:'26',desc:'Reunião com a equipe responsavel<p class="texto"> por procedimento de segurança</p>'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
