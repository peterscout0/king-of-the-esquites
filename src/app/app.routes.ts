// import { Routes } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, },
  { path: 'productos', component: ProductsComponent },
  { path: 'productos/:categoria', component: ProductsComponent },
];
