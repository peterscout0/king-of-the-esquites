import { Component, OnInit, Input } from '@angular/core';
import { FeatureSectionComponent } from '../components/feature-section/feature-section.component';
import { MainSectionComponent } from '../components/main-section/main-section.component';
import { MenuButtonComponent } from '../components/buttons/menu-button/menu-button.component';
import { SwiperCard } from '../models/swiper-card.model';
import { ImageSectionComponent } from '../components/image-section/image-section.component';
import { CarouselSectionComponent } from '../components/carousel-section/carousel-section.component';
import { SeparatorSectionComponent } from '../components/separator-section/separator-section.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuButtonComponent, FeatureSectionComponent, MainSectionComponent, ImageSectionComponent, CarouselSectionComponent, SeparatorSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  @Input() esquitesTortrixCards: SwiperCard[] = [];
  @Input() esquitesDianaCards: SwiperCard[] = [];
  @Input() esquitesOriginalCards: SwiperCard[] = [];

  constructor() {}

  ngOnInit() {
    // No se necesita inicialización específica en este momento
  }
}
