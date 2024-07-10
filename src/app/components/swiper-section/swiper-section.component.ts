import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { SwiperCard } from '../../models/swiper-card.model';

@Component({
  selector: 'app-swiper-section',
  templateUrl: './swiper-section.component.html',
  styleUrls: ['./swiper-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwiperSectionComponent {
  @Input() title: string = '';
  @Input() cards: SwiperCard[] = [];
  @Input() hoverText: string = 'Ver completo';

  @Input() titleColor: string = '#fff';
  @Input() titleTextShadow: string = 'none';
  @Input() navButtonColor: string = '#c20808';
  @Input() cardBackgroundColor: string = '#333333c5';
  @Input() indicatorBackgroundColor: string = '#ccc';
  @Input() activeIndicatorBorderColor: string = '#e8d379';

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

  get titleStyle() {
    return {
      'color': this.titleColor,
      'text-shadow': this.titleTextShadow,
    };
  }
}

