import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TaskListComponent } from './componentes/task-list/task-list.component';

export const routes: Routes = [
    {
        path: 'login', component:LoginComponent
    },
    {
        path: '', redirectTo:'login', pathMatch:'full'
    },
    {
        path: 'registro', component:RegistroComponent
    },

    {
      path: 'tasks', component:TaskListComponent
  }
];
