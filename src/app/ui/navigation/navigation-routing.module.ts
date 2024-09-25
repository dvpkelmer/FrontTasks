import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [      
      {
        path: 'users',
        loadChildren: () =>
          import(
            '../features/users/users.module'
          ).then((m) => m.UsersModule),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import(
            '../features/tasks/tasks.module'
          ).then((m) => m.TasksModule),
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationRoutingModule { }