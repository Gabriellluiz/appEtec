import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-noticia',
  templateUrl: './cadastro-noticia.page.html',
  styleUrls: ['./cadastro-noticia.page.scss'],
})
export class CadastroNoticiaPage implements OnInit {
  activeMenu: string;
  public menu: MenuController;

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ngAfterContentInit() { }

  ionViewWillEnter() { this.menuCtrl.enable(false); }
}
