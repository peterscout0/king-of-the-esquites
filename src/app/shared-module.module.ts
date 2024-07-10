// Todos los componentes que se usarán en múltiples 
// lugares de tu aplicación deben declararse y exportarse en el SharedModule.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { SwiperModule } from 'swiper/angular';
import { MatCardModule } from '@angular/material/card';
import { LoadingComponent } from './loading/loading.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { MenuButtonComponent } from './components/buttons/menu-button/menu-button.component';
import { ImageSectionComponent } from './components/image-section/image-section.component';
import { CarouselSectionComponent } from './components/carousel-section/carousel-section.component';
import { FeatureSectionComponent } from './components/feature-section/feature-section.component';
import { SeparatorSectionComponent } from './components/separator-section/separator-section.component';
import { SwiperSectionComponent } from './components/swiper-section/swiper-section.component';

@NgModule({
  declarations: [
    LoadingComponent,
    MainSectionComponent,
    MenuButtonComponent,
    ImageSectionComponent,
    CarouselSectionComponent,
    FeatureSectionComponent,
    SeparatorSectionComponent,
    SwiperSectionComponent,
    // Añade aquí cualquier otro componente
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
    LoadingComponent,
    MainSectionComponent,
    MenuButtonComponent,
    ImageSectionComponent,
    CarouselSectionComponent,
    FeatureSectionComponent,
    SeparatorSectionComponent,
    SwiperSectionComponent,
    // Asegúrate de exportar lo que otros módulos necesitarán
  ]
})
export class SharedModuleModule { }
