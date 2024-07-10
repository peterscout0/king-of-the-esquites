import { Component, OnInit, Input } from '@angular/core';
import { SwiperCard } from '../models/swiper-card.model';
import { Router} from '@angular/router';
import { EsquitesService } from '../services/esquites.service';


@Component({
  selector: 'app-home',
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

  navigateToCategory(category: string) {
    this.router.navigate([`/productos/${category}`]);
  }

  navigateToConstruction() {
    this.router.navigate(['/eventos']);
  }
}
