// import { Routes } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// export const routes: Routes = [
//   { path: '', component: HomeComponent, },
//   { path: 'productos', component: ProductsComponent },
//   { path: 'productos/:categoria', component: ProductsComponent },
//   { path: 'eventos', component: UnderConstructionComponent },
//   { path: 'sucursales', component: UnderConstructionComponent },
//   { path: 'sobrenosotros', component: UnderConstructionComponent },
//   { path: 'equipo', component: UnderConstructionComponent },
//   { path: '**', component: ErrorComponent },
// ];

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) },
  { path: 'eventos', loadChildren: () => import('./under-construction/under-construction.module').then(m => m.UnderConstructionModule) },
  { path: 'sucursales', loadChildren: () => import('./under-construction/under-construction.module').then(m => m.UnderConstructionModule) },
  { path: 'sobrenosotros', loadChildren: () => import('./under-construction/under-construction.module').then(m => m.UnderConstructionModule) },
  { path: 'equipo', loadChildren: () => import('./under-construction/under-construction.module').then(m => m.UnderConstructionModule) },
  { path: '**', loadChildren: () => import('./components/error/error.module').then(m => m.ErrorModule) },
];
