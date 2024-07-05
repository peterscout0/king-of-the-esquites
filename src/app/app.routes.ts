// import { Routes } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ErrorComponent } from './components/error/error.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, },
  { path: 'productos', component: ProductsComponent },
  { path: 'productos/:categoria', component: ProductsComponent },
  { path: 'eventos', component: UnderConstructionComponent },
  { path: 'sucursales', component: UnderConstructionComponent },
  { path: 'sobrenosotros', component: UnderConstructionComponent },
  { path: '**', component: ErrorComponent },
];
