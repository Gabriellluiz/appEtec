import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dezembro',
  templateUrl: './dezembro.page.html',
  styleUrls: ['./dezembro.page.scss'],
})
export class DezembroPage implements OnInit {
  public listadezembro=[
{dia:'02 a 06', desc:'Renovação de Matrícula<p class="texto">2º Semestre</p>'},
{dia:'02', desc:'Reunião da Direção com Equipe<p class="texto">Pedagogico-Administrativo</p>'},
{dia:'07', desc:'Reunião de Planejamento'},
{dia:'09 a 10', desc:'Entrega dos Resultados Finais<p class="texto">2º Bimestre</p>'},
{dia:'09 a 10', desc:'Entrega dos Resultados Finais<p class="texto">4º Bimestre</p>'},
{dia:'09', desc:'Reunião da Direção com Equipe<p class="texto">Pedagogico-Administrativo</p>'},
{dia:'12', desc:'Fim das Aulas 2º Semestre'},
{dia:'13', desc:'Conselho de Classe Final'},
{dia:'14', desc:'Reunião de Planejamento'},
{dia:'16', desc:'Divulgação de Resultados do <p class="texto">4º Bimestre</p>'},
{dia:'16', desc:'Divulgação de Resultados do <p class="texto">2º Bimestre</p>'},
{dia:'16', desc:'Atribuição de Aulas'},
{dia:'16 a 26', desc:'Período de Solicitação de<p class="texto">Reconsiderações/Reclassificações Final </p>'},
{dia:'17 a 31', desc:'Recesso Escolar'},
{dia:'25', desc:'Feriado Nacional - Natal'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
