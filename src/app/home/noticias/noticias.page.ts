import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicoNoticiaService } from 'src/app/servico/servico-noticia.service';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  public descricao= {};
  public numeroNoticia = null;

  constructor(private rota:ActivatedRoute, private dadosService: ServicoNoticiaService) { }

  ngOnInit() {
    this.numeroNoticia = this.rota.snapshot.paramMap.get("numero");
    this.descricao = this.dadosService.getDados('listaConteudo');
  }

}
