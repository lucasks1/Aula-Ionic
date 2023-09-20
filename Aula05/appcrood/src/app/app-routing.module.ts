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
    path: 'addusuario',
    loadChildren: () => import('./pagina/addusuario/addusuario.module').then( m => m.AddusuarioPageModule)
  },  {
    path: 'produtos',
    loadChildren: () => import('./pagina/produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'add-produto',
    loadChildren: () => import('./pagina/add-produto/add-produto.module').then( m => m.AddProdutoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
