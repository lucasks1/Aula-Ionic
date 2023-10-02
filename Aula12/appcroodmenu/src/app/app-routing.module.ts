import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },  
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pagina/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./pagina/produtos/produtos.module').then( m => m.ProdutosPageModule),
  
  },
  {
    path: 'addusuario',
    loadChildren: () => import('./pagina/addusuario/addusuario.module').then( m => m.AddusuarioPageModule)
  },
  {
    path: 'addproduto',
    loadChildren: () => import('./pagina/addproduto/addproduto.module').then( m => m.AddprodutoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pagina/login/login.module').then( m => m.LoginPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
