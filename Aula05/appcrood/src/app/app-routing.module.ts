import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  },

  {
    path: 'usuarios',
    loadChildren: () => import('./pagina/usuarios/usuarios.module').then(m => m.UsuariosPageModule)
  },
  {
    path: 'produtoss',
    loadChildren: () => import('./pagina/produtoss/produtoss.module').then( m => m.ProdutossPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
