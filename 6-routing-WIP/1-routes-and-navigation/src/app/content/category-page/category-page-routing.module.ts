import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryPageComponent } from './category-page.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryPageComponent,
  },
  /*{
    path: ':subCategory',
    component: CategoryPageComponent,
  },
   {
    path: ':subCategory/:product',
    // tslint:disable-next-line:typedef
    loadChildren: () =>
      import('../one-product-page/one-product-page.module')
        // tslint:disable-next-line:typedef
        .then((mod) => mod.ProductPageModule),
    data: {
      state: 'product',
    },
  },*/
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryPageRoutingModule {}
