import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-janeiro',
  templateUrl: './janeiro.page.html',
  styleUrls: ['./janeiro.page.scss'],
})
export class JaneiroPage implements OnInit {

  public listajaneiro=[
    {dia:'01',desc:'Feriado Nacional -<p class="texto"> Confraternização Universal</p>'},
    {dia:'02 a 31',desc:'Férias '},
    {dia:'17 a 18',desc:'Matriculas iniciais - <p class="texto"> Matriculas da 1ª lista de convocação</p>'},
    {dia:'19',desc:'Reunião da direção com servidor- <p class="texto"> Adiministrativo </p>'},
    {dia:'22 a 23',desc:'Matriculas iniciais - <p class="texto"> Matriculas da 2ª lista de convocação</p>'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
