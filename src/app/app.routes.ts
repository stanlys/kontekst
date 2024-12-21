import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product', component: ProductsComponent },
];
