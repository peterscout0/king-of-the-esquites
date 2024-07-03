import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { SwiperModule } from 'swiper/angular';
import { MatCardModule } from '@angular/material/card';
// import { MainSectionComponent } from './components/main-section/main-section.component';
// import { MenuButtonComponent } from './components/buttons/menu-button/menu-button.component';
// import { ImageSectionComponent } from './components/image-section/image-section.component';
// import { CarouselSectionComponent } from './components/carousel-section/carousel-section.component';
@NgModule({
  declarations: [
    // Añade aquí cualquier otro componente
    // MainSectionComponent,
    // MenuButtonComponent
    // CarouselSectionComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SwiperModule,
    MatCardModule,
    // Otros módulos de terceros o Angular comunes
    // ImageSectionComponent
  ],
  exports: [
    CommonModule,
    CarouselModule,
    SwiperModule,
    MatCardModule,
    // Asegúrate de exportar lo que otros módulos necesitarán
    // MainSectionComponent,
    // MenuButtonComponent
    // ImageSectionComponent
    // CarouselSectionComponent
  ]
})
export class SharedModuleModule { }
