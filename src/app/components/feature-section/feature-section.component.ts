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
  @Input() reverseOrder: boolean = false;
  @Input() esquitesDianaCards: SwiperCard[] = [];
  @Input() esquitesTortrixCards: SwiperCard[] = [];
}
