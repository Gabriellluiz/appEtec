import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  activeMenu: string;
  public menu: MenuController;

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() { }  

  ngAfterContentInit() { }

  ionViewWillEnter() { this.menuCtrl.enable(false); }


}
