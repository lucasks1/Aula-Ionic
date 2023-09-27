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
    path: 'usuario',
    loadChildren: () => import('./page/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'receita',
    loadChildren: () => import('./page/receita/receita.module').then( m => m.ReceitaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
