import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sobre',
    loadChildren: () => import('./page/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'vacinacao',
    loadChildren: () => import('./page/vacinacao/vacinacao.module').then( m => m.VacinacaoPageModule)
  },
  {
    path: 'outras',
    loadChildren: () => import('./page/outras/outras.module').then( m => m.OutrasPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./page/contato/contato.module').then( m => m.ContatoPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
