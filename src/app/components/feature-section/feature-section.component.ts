import { Component, Input } from '@angular/core';
import { MenuButtonComponent } from '../buttons/menu-button/menu-button.component';
import { SwiperSectionComponent } from '../swiper-section/swiper-section.component';
import { SwiperCard } from '../../models/swiper-card.model';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '../../shared-module.module';

@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [CommonModule, MenuButtonComponent, SwiperSectionComponent, SharedModuleModule],
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.css'
})
export class FeatureSectionComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: string;
  @Input() buttonTitle: string = 'Menú';
  @Input() reverseOrder: boolean = false;
  @Input() titleColor: string = '#000';
  @Input() subtitleColor: string = '#000';
  @Input() descriptionColor: string = '#000';
  @Input() titleTextShadow: string = 'none';
  @Input() subtitleTextShadow: string = 'none';
  @Input() descriptionTextShadow: string = 'none';
  @Input() featureBackgroundColor: string = '#e8d379';
  @Input() featureBackgroundImage: string = '';
  @Input() useBackgroundImage: boolean = false;
  @Input() useGradient: boolean = false;
  @Input() gradientBackground: string = '';
  @Input() swiperBackgroundColor: string = '#242424fa';
  @Input() contentBackgroundColor: string = '#fff';

  // cards del carousel esquites y salsas
  @Input() esquitesDianaCards: SwiperCard[] = [];
  @Input() esquitesTortrixCards: SwiperCard[] = [];
  @Input() esquitesOriginalCards: SwiperCard[] = [];

  get backgroundStyle() {
    if (this.useGradient) {
      return { 'background-image': this.gradientBackground };
    }
    return {
      'background-color': this.featureBackgroundColor,
      'background-image': this.useBackgroundImage ? `url(${this.featureBackgroundImage})` : 'none',
      'background-size': this.useBackgroundImage ? 'cover' : 'initial',
      'background-position': this.useBackgroundImage ? 'center' : 'initial',
    };
  }

  get titleStyle() {
    return {
      'color': this.titleColor,
      'text-shadow': this.titleTextShadow,
    };
  }

  get subtitleStyle() {
    return {
      'color': this.subtitleColor,
      'text-shadow': this.subtitleTextShadow,
    };
  }

  get descriptionStyle() {
    return {
      'color': this.descriptionColor,
      'text-shadow': this.descriptionTextShadow,
    };
  }
}
