import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./loading-page/loading-page.module').then( m => m.LoadingPagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'redefine',
    loadChildren: () => import('./redefine/redefine.module').then( m => m.RedefinePageModule)
  },

  //Acessa somente a tab1
  {
    path: 'tab1', loadChildren: ('./tab1/tab1.module#TabsPageModule')
  },

  //Botao funcionando
  {
    path: 'registrar', loadChildren: ('./registrar/registrar')
  },

  {
    path: 'redefine', loadChildren: ('./redefine/redefine')
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
