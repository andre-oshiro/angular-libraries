import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lazy-image',
    loadChildren: () =>
      import('./card-list/card-list.module').then(
        (module) => module.CardListModule
      )
  },
  {
    path: '**',
    redirectTo: 'lazy-image'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
