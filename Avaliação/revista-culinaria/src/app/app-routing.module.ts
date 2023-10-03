import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'receitas',
    loadChildren: () => import('./page/receitas/receitas.module').then( m => m.ReceitasPageModule)
  },
  {
    path: 'refeicao',
    loadChildren: () => import('./categoria/refeicao/refeicao.module').then( m => m.RefeicaoPageModule)
  },
  {
    path: 'sobremesa',
    loadChildren: () => import('./categoria/sobremesa/sobremesa.module').then( m => m.SobremesaPageModule)
  },
  {
    path: 'lanche',
    loadChildren: () => import('./categoria/lanche/lanche.module').then( m => m.LanchePageModule)
  },
  {
    path: 'sopa',
    loadChildren: () => import('./categoria/sopa/sopa.module').then( m => m.SopaPageModule)
  },
  {
    path: 'chef',
    loadChildren: () => import('./page/chef/chef.module').then( m => m.ChefPageModule)
  },
  {
    path: 'addreceita',
    loadChildren: () => import('./page/addreceita/addreceita.module').then( m => m.AddreceitaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
