import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agosto',
  templateUrl: './agosto.page.html',
  styleUrls: ['./agosto.page.scss'],
})
export class AgostoPage implements OnInit {

  public listaAgosto=[
  {dia:'01',desc:'Reunião da Direção com Servidor - <p class="texto">Administrativo</p>'},
  {dia:'12',desc:'Reunião da Direção com Equipe<p class="texto">Pedagogico-Administrativo</p>'},
  {dia:'13',desc:'Reunião da Direção com <p class="texto">Representante Discente</p>'},
  {dia:'16',desc:'Reuniões do Conselho de Escola'},
  {dia:'16',desc:'Assembleia Geral Ordinária da<p class="texto">Associação de Pais e Mestre</p>'},
  {dia:'17',desc:'Reunião Pedagógica'},
  {dia:'19',desc:'Reunião com equipe responsável<p class="texto">por procedimentos de seguraça</p>'},
  {dia:'22',desc:'Fim Solicitação de <p class="texto">Aproveitamentos 2º Semestre</p>'},
  {dia:'23',desc:'Fim Entrega do PTD<p class="texto">2º Semestre</p>'},
  {dia:'26',desc:'Reunião da Direção com Equipe<p class="texto">Pedagogico-Administrativo</p>'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
