import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicial',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Calendario Escolar',
      url: '/calendario',
      icon: 'calendar'
    },
    {
      title: 'Ensino Médio',
      url: '/ensino-medio',
      icon: 'book'
    },
    {
      title: 'Ensino Integrado',
      url: '/ensino-integrado',
      icon: 'book'
    },
    {
      title: 'Cursos Técnicos',
      url: '/cursos',
      icon: 'book'
    }, 
    {
      title: 'Historia da Escola',
      url: '/historia',
      icon: 'information-circle'
    },
    {
      title: 'Contato',
      url: '/contato',
      icon: 'contact'
    },
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
