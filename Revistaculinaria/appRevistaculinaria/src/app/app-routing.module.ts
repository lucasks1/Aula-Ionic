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
    path: 'descricao',
    loadChildren: () => import('./page/descricao/descricao.module').then( m => m.DescricaoPageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./page/categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'ingredientes',
    loadChildren: () => import('./page/ingredientes/ingredientes.module').then( m => m.IngredientesPageModule)
  },
  {
    path: 'preparo',
    loadChildren: () => import('./page/preparo/preparo.module').then( m => m.PreparoPageModule)
  },
  {
    path: 'cheff',
    loadChildren: () => import('./page/cheff/cheff.module').then( m => m.CheffPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
