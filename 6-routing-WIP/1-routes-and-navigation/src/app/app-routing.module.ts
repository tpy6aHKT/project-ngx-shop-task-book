import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./content/home-page/home-page.module').then(
        (mod) => mod.HomePageModule
      ),
    data: {
      state: 'products',
    },
  },
  //   {
  //     path: 'category',
  //     loadChildren: () =>
  //       import('./content/category/category.module').then(
  //         (mod) => mod.CategoryModule
  //       ),
  //     data: {
  //       state: 'category',
  //     },
  //   },

  {
    path: '**',
    redirectTo: 'products',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
