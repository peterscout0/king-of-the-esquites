import { Component, OnInit, Input } from '@angular/core';
import { FeatureSectionComponent } from '../components/feature-section/feature-section.component';
import { MainSectionComponent } from '../components/main-section/main-section.component';
import { MenuButtonComponent } from '../components/buttons/menu-button/menu-button.component';
import { ImageSectionComponent } from '../components/image-section/image-section.component';
import { CarouselSectionComponent } from '../components/carousel-section/carousel-section.component';
import { SeparatorSectionComponent } from '../components/separator-section/separator-section.component';
import { SwiperCard } from '../models/swiper-card.model';
import { Router} from '@angular/router';
import { EsquitesService } from '../services/esquites.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuButtonComponent, FeatureSectionComponent, MainSectionComponent, ImageSectionComponent, CarouselSectionComponent, SeparatorSectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  esquitesTortrixCards: SwiperCard[] = [];
  esquitesDianaCards: SwiperCard[] = [];
  esquitesOriginalCards: SwiperCard[] = [];

  constructor(private router: Router, private esquitesService: EsquitesService) {}

  ngOnInit() {
    this.esquitesTortrixCards = this.esquitesService.getEsquitesTortrixCards();
    this.esquitesDianaCards = this.esquitesService.getEsquitesDianaCards();
    this.esquitesOriginalCards = this.esquitesService.getEsquitesOriginalCards();
  }

  navigateToCatalog() {
    this.router.navigate(['/productos']);
  }
}
