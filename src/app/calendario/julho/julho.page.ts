import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-julho',
  templateUrl: './julho.page.html',
  styleUrls: ['./julho.page.scss'],
})
export class JulhoPage implements OnInit {
  public listajulho=[
    {dia:'01 a 05', desc:'Renovação de Matrícula 1º Semestre<p class="texto">- Semestral</p>'},
    {dia:'01', desc:'Reunião da Direção com Equipe<p class="texto">Pedagogico-Administrativo</p>'},
    {dia:'05 a 09', desc:'Entrega dos Resultados Intermediários<p class="texto">2º Bimestre - Anual</p>'},
    {dia:'08', desc:'Suspensão de Atividades'},
    {dia:'09', desc:'Feriado Nacional - <p class="texto">Revolução Constitucionalista</p>'},
    {dia:'10', desc:'Fim das Aulas 1º Semestre'},
    {dia:'11', desc:'Conselho de Classe Intermediário -<p class="texto">Anual</p>'},
    {dia:'11', desc:'Conselho de Classe Final -<p class="texto">Semestral</p>'},
    {dia:'12', desc:'Divulgação de Resultados do<p class="texto">2º Bimestre - Semestral</p>'},
    {dia:'12', desc:'Divulgação de Resultados do<p class="texto">2º Bimestre - Anual</p>'},
    {dia:'12 a 16', desc:'Período de Solicitação de<p class="texto">Reconsiderações Intermediárias - Anual</p>'},
    {dia:'12 a 22', desc:'Período de Solicitação de<p class="texto">Reconsiderações/Reclassificações Final -  Semestral</p>'},
    {dia:'12', desc:'Atribuição de Aulas - <p class="texto">2º Semestre de 2019</p>'},
    {dia:'13 a 22', desc:'Recesso Escolar'},
    {dia:'15', desc:'Reunião da Direção com Equipe<p class="texto">Pedagogico-Administrativo</p>'},
    {dia:'16 a 22', desc:'Matriculas Iniciais'},
    {dia:'22', desc:'Reunião de Planejamento'},
    {dia:'22', desc:'Inicio das Atividades Escolares<p class="texto">2º Semestre</p>'},
    {dia:'23', desc:'Inicio Solicitação de <p class="texto">Aproveitamentos 2º Semestre</p>'},
    {dia:'23', desc:'Início aulas 2º Semestre'},
    {dia:'23', desc:'Inicio Entrega do PTD <p class="texto">2º Semestre - Semestral</p>'},
    {dia:'25', desc:'Reunião de Curso'},
    {dia:'29', desc:'Reunião da Direção com Equipe<p class="texto">Pedagogico-Administrativo</p>'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
