import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fevereiro',
  templateUrl: './fevereiro.page.html',
  styleUrls: ['./fevereiro.page.scss'],
})
export class FevereiroPage implements OnInit {

  public listafevereiro=[
    {dia:'01', desc:'Inicio das atividades Escolares- <p class="texto"> 1º Semestre </p>',},
    {dia:'01 a 02', desc:'Reunião de Planejamento',},
    {dia:'04', desc:'Inicio Solicitação de Aproveitamentos 1º semestre - <p class="texto"> Semestral </p>',},
    {dia:'04', desc:'Inicio Entrega do PTD - <p class="texto"> Anual </p>',},
    {dia:'04', desc:'Inicio das Aulas 1º Semestre',},
    {dia:'04', desc:'Inicio entrega do PTD 1º Semestre - <p class="texto"> Semestral </p>',},
    {dia:'04', desc:'Inicio Solicitação de Aproveitamentos 1º Semestre - <p class="texto"> anual </p>',},
    {dia:'11', desc:'Reunião da Direção com Equipe Pedagógicos-Adiministrativo - <p class="texto"> Equipe Gestora, Coordenação, Auxiliares Docentes e Orientação Educacional </p>',},
    {dia:'25', desc:'Reunião da Direção com Equipe Pedagógicos-Adiministrativo - <p class="texto"> Equipe Gestora, Coordenação, Auxiliares Docentes e Orientação Educacional </p>',}
  ];

  constructor() { }

  ngOnInit() {
  }

}
