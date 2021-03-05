import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {StudentsComponent} from './pages/students/students.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent
    // loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule)
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
