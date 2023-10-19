import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'signUp',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpPageModule),
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sginIn',
    loadChildren: () => import('./sgin-in/sgin-in.module').then( m => m.SginInPageModule)
  },
  {
    path: 'acceul',
    loadChildren: () => import('./acceul/acceul.module').then( m => m.AcceulPageModule)
  },

  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
