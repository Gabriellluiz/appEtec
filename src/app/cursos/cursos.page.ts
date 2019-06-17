import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {
  public listaCurso=[
    {nome:'Administração', link:"/adm"},
    {nome:'Contabilidade', link:"/contabilidade"},
    {nome:'Desenvolvimento de Sistemas', link:"/ds"},
    {nome:'Informática', link:"/info"},
    {nome:'Informática para Internet', link:"/info-net"},
    {nome:'Logística', link:"/logistica"},
    {nome:'Marketing', link:"/marketing"},
    {nome:'Secretariado', link:"/secretariado"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
