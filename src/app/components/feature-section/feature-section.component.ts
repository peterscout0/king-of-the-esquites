import { Component, Input, Output, ViewChild, ElementRef, AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';
import { MenuButtonComponent } from '../buttons/menu-button/menu-button.component';
import { SwiperSectionComponent } from '../swiper-section/swiper-section.component';
import { SwiperCard } from '../../models/swiper-card.model';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '../../shared-module.module';
import { gsap } from 'gsap';

@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [CommonModule, MenuButtonComponent, SwiperSectionComponent, SharedModuleModule],
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.css',
})
export class FeatureSectionComponent implements AfterViewInit, OnDestroy {
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

  @Output() buttonClick = new EventEmitter<void>()

  @ViewChild('swiperContainer', { static: false }) swiperContainerEl!: ElementRef<HTMLDivElement>;
  @ViewChild('contentSection', { static: false }) contentSectionEl!: ElementRef<HTMLDivElement>;

  isMobile: boolean = false;
  observer: IntersectionObserver | null = null;
  isAnimatingSwiper: boolean = false;
  isAnimatingContent: boolean = false;

  ngAfterViewInit() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      if (this.swiperContainerEl) {
        this.observer.unobserve(this.swiperContainerEl.nativeElement);
      }
      if (this.contentSectionEl) {
        this.observer.unobserve(this.contentSectionEl.nativeElement);
      }
    }
  }

  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Start animation when 50% of the element is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === this.swiperContainerEl.nativeElement && !this.isAnimatingSwiper) {
            this.animateSwiperContainer();
          }
          if (entry.target === this.contentSectionEl.nativeElement && !this.isAnimatingContent) {
            this.animateContentSection();
          }
        }
      });
    }, options);

    if (this.swiperContainerEl) {
      this.observer.observe(this.swiperContainerEl.nativeElement);
    }
    if (this.contentSectionEl) {
      this.observer.observe(this.contentSectionEl.nativeElement);
    }
  }

  animateSwiperContainer() {
    this.isAnimatingSwiper = true;
    gsap.from(this.swiperContainerEl.nativeElement, {
      duration: 1.5,
      opacity: 0,
      x: -100,
      ease: 'power2.out',
      onComplete: () => { 
        this.isAnimatingSwiper = false; // Reset the flag when animation completes
      }
    });
  }

  animateContentSection() {
    this.isAnimatingContent = true;
    gsap.from(this.contentSectionEl.nativeElement, {
      duration: 1.5,
      opacity: 0,
      x: 100,
      ease: 'power2.out',
      onComplete: () => { 
        this.isAnimatingContent = false; // Reset the flag when animation completes
      }
    });
  }

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

  buttonClicked() {
    this.buttonClick.emit();
  }
}
