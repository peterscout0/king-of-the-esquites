import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { SwiperModule } from 'swiper/angular';
import { MatCardModule } from '@angular/material/card';
// import { MainSectionComponent } from './components/main-section/main-section.component';
// import { MenuButtonComponent } from './components/buttons/menu-button/menu-button.component';

@NgModule({
  declarations: [
    // Añade aquí cualquier otro componente
    // MainSectionComponent,
    // MenuButtonComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SwiperModule,
    MatCardModule
    // Otros módulos de terceros o Angular comunes
  ],
  exports: [
    CommonModule,
    CarouselModule,
    SwiperModule,
    MatCardModule,
    // Asegúrate de exportar lo que otros módulos necesitarán
    // MainSectionComponent,
    // MenuButtonComponent
  ]
})
export class SharedModuleModule { }
