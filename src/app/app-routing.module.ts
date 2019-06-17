import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
  { path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioPageModule' },
  { path: 'historia', loadChildren: './historia/historia.module#HistoriaPageModule' },
  { path: 'historia', loadChildren: './historia/historia.module#HistoriaPageModule' },
  { path: 'janeiro', loadChildren: './calendario/janeiro/janeiro.module#JaneiroPageModule' },
  { path: 'fevereiro', loadChildren: './calendario/fevereiro/fevereiro.module#FevereiroPageModule' },
  { path: 'marco', loadChildren: './calendario/marco/marco.module#MarcoPageModule' },
  { path: 'abril', loadChildren: './calendario/abril/abril.module#AbrilPageModule' },
  { path: 'maio', loadChildren: './calendario/maio/maio.module#MaioPageModule' },
  { path: 'junho', loadChildren: './calendario/junho/junho.module#JunhoPageModule' },
  { path: 'julho', loadChildren: './calendario/julho/julho.module#JulhoPageModule' },
  { path: 'agosto', loadChildren: './calendario/agosto/agosto.module#AgostoPageModule' },
  { path: 'setembro', loadChildren: './calendario/setembro/setembro.module#SetembroPageModule' },
  { path: 'outubro', loadChildren: './calendario/outubro/outubro.module#OutubroPageModule' },
  { path: 'novembro', loadChildren: './calendario/novembro/novembro.module#NovembroPageModule' },
  { path: 'dezembro', loadChildren: './calendario/dezembro/dezembro.module#DezembroPageModule' },
  { path: 'legenda', loadChildren: './calendario/legenda/legenda.module#LegendaPageModule' },
  { path: 'cursos', loadChildren: './cursos/cursos.module#CursosPageModule' },
  { path: 'adm', loadChildren: './cursos/adm/adm.module#AdmPageModule' },
  { path: 'contabilidade', loadChildren: './cursos/contabilidade/contabilidade.module#ContabilidadePageModule' },
  { path: 'ds', loadChildren: './cursos/ds/ds.module#DsPageModule' },
  { path: 'info', loadChildren: './cursos/info/info.module#InfoPageModule' },
  { path: 'info-net', loadChildren: './cursos/info-net/info-net.module#InfoNetPageModule' },
  { path: 'logistica', loadChildren: './cursos/logistica/logistica.module#LogisticaPageModule' },
  { path: 'marketing', loadChildren: './cursos/marketing/marketing.module#MarketingPageModule' },
  { path: 'secretariado', loadChildren: './cursos/secretariado/secretariado.module#SecretariadoPageModule' },
  { path: 'not1', loadChildren: './home/not1/not1.module#Not1PageModule' },
  { path: 'not2', loadChildren: './home/not2/not2.module#Not2PageModule' },
  { path: 'not3', loadChildren: './home/not3/not3.module#Not3PageModule' },
  { path: 'not4', loadChildren: './home/not4/not4.module#Not4PageModule' },
  { path: 'not5', loadChildren: './home/not5/not5.module#Not5PageModule' },
  { path: 'not6', loadChildren: './home/not6/not6.module#Not6PageModule' },
  { path: 'not7', loadChildren: './home/not7/not7.module#Not7PageModule' },
  { path: 'ensino-medio', loadChildren: './ensino-medio/ensino-medio.module#EnsinoMedioPageModule' },
  { path: 'ensino-integrado', loadChildren: './ensino-integrado/ensino-integrado.module#EnsinoIntegradoPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro-noticia', loadChildren: './cadastro-noticia/cadastro-noticia.module#CadastroNoticiaPageModule' },
  { path: 'noticias', loadChildren: './home/noticias/noticias.module#NoticiasPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
