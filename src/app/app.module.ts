import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
// import { ErrorComponent } from './components/error/error.component';
// import { UnderConstructionComponent } from './under-construction/under-construction.component';
// import { ProductsComponent } from './components/products/products.component';
import { SharedModuleModule } from '../app/shared-module.module';
import { routes } from './app.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LazyLoadDirective } from './directives/lazy-load.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    // ErrorComponent,
    // UnderConstructionComponent,
    // ProductsComponent,
    LazyLoadDirective
  ],
  imports: [
    BrowserModule,
    SharedModuleModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
