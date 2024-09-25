import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [  
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }, 
  {
    path: 'auth',
    loadChildren: () =>
      import(
        './ui/features/auth/auth.module'
      ).then((m) => m.AuthModule),
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./ui/navigation/navigation.module').then((m) => m.NavigationModule),
  },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}