import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-carousel-section',
  templateUrl: './carousel-section.component.html',
  styleUrls: ['./carousel-section.component.css'],
})
export class CarouselSectionComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() images: { src: string, alt: string }[] = [];
  @Input() imageWidth: string = '85%';
  @Input() imageHeight: string = 'auto';
  @Input() backgroundColor: string = '#000';
  @Input() backgroundImage: string = '';
  @Input() showBackgroundImage: boolean = false;
  @Input() title: string = '';
  @Input() titleColor: string = '#fff';
  @Input() titleBackgroundColor: string = 'rgba(0, 0, 0, 0.5)';
  @Input() titleTextShadow: string = '2px 2px 4px #000';
  @Input() parallax: boolean = false;
  @Input() transitionDuration: number = 5000;
  @Input() imageFilter: string = '';

  @ViewChild('imageContainer', { static: false }) imageContainerEl!: ElementRef<HTMLDivElement>;
  @ViewChild('sectionTitle', { static: false }) sectionTitleEl!: ElementRef<HTMLHeadingElement>;

  currentIndex: number = 0;
  isMobile: boolean = false;
  observer: IntersectionObserver | null = null;
  hasAnimatedImage: boolean = false;
  hasAnimatedTitle: boolean = false;

  ngOnInit() {
    this.isMobile = window.innerWidth <= 768;
    this.startAutoSlide();
  }

  ngAfterViewInit() {
    if (!this.isMobile) {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      if (this.imageContainerEl) {
        this.observer.unobserve(this.imageContainerEl.nativeElement);
      }
      if (this.sectionTitleEl) {
        this.observer.unobserve(this.sectionTitleEl.nativeElement);
      }
    }
  }

  startAutoSlide() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, this.transitionDuration);
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
          if (entry.target === this.imageContainerEl.nativeElement && !this.hasAnimatedImage) {
            this.animateImageContainer();
          }
          if (entry.target === this.sectionTitleEl.nativeElement && !this.hasAnimatedTitle) {
            this.animateSectionTitle();
          }
        }
      });
    }, options);

    if (this.imageContainerEl) {
      this.observer.observe(this.imageContainerEl.nativeElement);
    }
    if (this.sectionTitleEl) {
      this.observer.observe(this.sectionTitleEl.nativeElement);
    }
  }

  animateImageContainer() {
    this.hasAnimatedImage = true; // Set the flag to true to prevent re-animation
    gsap.from(this.imageContainerEl.nativeElement, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: 'power2.out',
      onComplete: () => { 
        if (this.observer) {
          this.observer.unobserve(this.imageContainerEl.nativeElement); // Disconnect observer
        }
      }
    });
  }

  animateSectionTitle() {
    this.hasAnimatedTitle = true; // Set the flag to true to prevent re-animation
    gsap.from(this.sectionTitleEl.nativeElement, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: 'power2.out',
      onComplete: () => { 
        if (this.observer) {
          this.observer.unobserve(this.sectionTitleEl.nativeElement); // Disconnect observer
        }
      }
    });
  }


  get backgroundStyle() {
    return {
      '--background-color': this.backgroundColor,
      '--background-image': this.showBackgroundImage ? `url(${this.backgroundImage})` : 'none',
      ...(this.parallax && { 'background-attachment': 'fixed' }),
    };
  }

  get imageStyle() {
    return {
      'width': this.imageWidth,
      'height': this.imageHeight,
      'filter': this.imageFilter,
    };
  }

  get titleStyle() {
    return {
      'color': this.titleColor,
      'background-color': this.titleBackgroundColor,
      'text-shadow': this.titleTextShadow,
    };
  }
}
