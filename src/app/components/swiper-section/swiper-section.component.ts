import { Component, Input} from '@angular/core';
import { SwiperCard } from '../../models/swiper-card.model';
import { SharedModuleModule } from '../../shared-module.module';


@Component({
  selector: 'app-swiper-section',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './swiper-section.component.html',
  styleUrls: ['./swiper-section.component.css']
})
export class SwiperSectionComponent {
  @Input() title: string = '';
  @Input() cards: SwiperCard[] = [];
  @Input() hoverText: string = 'Ver completo';

  currentIndex: number = 0;

  next() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  setIndex(index: number) {
    this.currentIndex = index;
  }
}

