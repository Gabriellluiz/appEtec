import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abril',
  templateUrl: './abril.page.html',
  styleUrls: ['./abril.page.scss'],
})
export class AbrilPage implements OnInit {

  public listaAbril=[
{dia:'02', desc:'Reunião da Direção com Representante Discente'},
{dia:'08', desc:'Reunião da Direção com Equipe Pedagógico-Administrativo - <p class="texto"> Equipe Gestora, Coordenação, Auxiliares Docentes e Orientação Educacional </p>', img:"assets/img/abril.jpg"},
{dia:'12', desc:'Reunião de Cursos', img:"assets/img/abril.jpg"},
{dia:'18 a 22', desc:' Entrega dos Resultados  <p class="texto">Intermediarios 1º Bimestre - Anual'},
{dia:'18 a 22', desc:' Entrega dos Resultados  <p class="texto">Intermediarios 1º Bimestre - Semestral'},
{dia:'19', desc:'Feriado Nacional - Paixão de Cristo <p class="texto"> </p>', img:"assets/img/abril.jpg"},
{dia:'22', desc:'Reunião da Direção com Equipe Pedagógico Administrativo  - <p class="texto"> Equipe Gestora, Coordenação, Auxiliares Docentes e Orientação Educacional</p>'},
{dia:'24', desc:' Encerramento do 1º Bimestre - <p class="texto"> Semestral</p>'},
{dia:'24', desc:'Encerramento de 1º Bimestre - <p class="texto"> Anual</p>'},
{dia:'25 e 26', desc:' Conselho de Classe Intermediario - <p class="texto"> Semestral</p>'},
{dia:'26', desc:' Conselho de Classe Intermediario - <p class="texto"> Anual</p>'},
{dia:'29', desc:'Divulgação dos Resultados do <p class="texto">Conselho de Classe Intermediarias -  Semestral</p>'},
{dia:'29', desc:'Divulgação de Resultado do 1º bimestre - <p class="texto"> Semestral</p>'},
{dia:'29', desc:'Divulgação de Resultado do 1º bimestre - <p class="texto"> Anual</p>'},
{dia:'29', desc:'Inicio Periodo de Solicitação de <p class="texto">Reconsiderações Intermediarias - Anual</p>'},
{dia:'29', desc:'Inicio Periodo de Solicitação de  <p class="texto">Reconsiderações Intermediarias - Semestral</p>'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
