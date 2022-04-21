import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'capital-managment',
    loadChildren: () => import('./capital-managment/capital-managment.module').then( m => m.CapitalManagmentModule )
  },
  {
    path: '**',
    redirectTo: 'capital-managment'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
