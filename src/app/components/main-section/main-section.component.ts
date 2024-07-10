import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges, OnDestroy} from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],
})
export class MainSectionComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() title: string = 'HELADO';
  @Input() subtitle: string = 'Artesanal';
  @Input() imageUrl: string = '';
  @Input() buttonTitle: string = 'Botón';
  @Input() backgroundColor: string = 'rgba(8, 255, 239, 0.911)';
  @Input() buttonMarginLeft: string = '';
  @Input() imageWidth: string = '80%';
  @Input() imageHeight: string = 'auto';
  @Input() useBackgroundImage: boolean = false;
  @Input() backgroundImageUrl: string = '';
  @Input() parallax: boolean = false;
  @Input() imageFilter: string = '';
  @Input() titleColor: string = '#fff';
  @Input() subtitleColor: string = '#fff';
  @Input() titleTextShadow: string = 'none';
  @Input() subtitleTextShadow: string = 'none';
  @Output() buttonClick = new EventEmitter<void>();
  
  
  @ViewChild('title', { static: false }) titleEl!: ElementRef<HTMLHeadingElement>;
  @ViewChild('subtitle', { static: false }) subtitleEl!: ElementRef<HTMLHeadingElement>;
  @ViewChild('image', { static: false }) imageEl?: ElementRef<HTMLImageElement>;
  @ViewChild('buttonContainer', { static: false }) buttonContainerEl!: ElementRef<HTMLDivElement>;
  @ViewChild('mainSection', { static: false }) mainSectionEl!: ElementRef<HTMLDivElement>;

  observer: IntersectionObserver | null = null;
  isAnimating: boolean = false;
  isMobile: boolean = false;
  hasAnimated: boolean = false; // Para saber si la animación ya se ejecutó

  ngAfterViewInit() {
    this.isMobile = window.innerWidth <= 768;
    this.verifyElementReferences();
    if (!this.isMobile) {
      this.setupIntersectionObserver();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title'] || changes['subtitle'] || changes['imageUrl'] || changes['buttonTitle']) {
      this.updateDynamicContent();
    }
  }

  ngOnDestroy() {
    if (this.observer && this.mainSectionEl) {
      this.observer.unobserve(this.mainSectionEl.nativeElement);
    }
  }

  verifyElementReferences() {
    if (this.titleEl && this.subtitleEl && (this.imageEl || !this.imageUrl) && this.buttonContainerEl) {
      this.updateDynamicContent();
    } else {
      console.error('Element references are not initialized correctly.');
    }
  }

  updateDynamicContent() {
    if (this.titleEl && this.subtitleEl) {
      this.titleEl.nativeElement.textContent = this.title;
      this.subtitleEl.nativeElement.textContent = this.subtitle;
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
        if (entry.isIntersecting && !this.isAnimating && !this.hasAnimated) {
          this.resetStyles();
          this.animateContent();
        }
      });
    }, options);

    if (this.mainSectionEl) {
      this.observer.observe(this.mainSectionEl.nativeElement);
    }
  }

  resetStyles() {
    if (this.imageEl) {
      gsap.set(this.imageEl.nativeElement, { clearProps: 'all' });
    }
    gsap.set(this.buttonContainerEl.nativeElement, { clearProps: 'all' });
  }

  animateContent() {
    this.isAnimating = true;

    const timeline = gsap.timeline({
      onComplete: () => { 
        this.isAnimating = false;
        this.hasAnimated = true; // Set the flag to true once the animation completes
        if (this.observer && this.mainSectionEl) {
          this.observer.unobserve(this.mainSectionEl.nativeElement); // Disconnect the observer
        }
      }
    });

    if (this.imageEl) {
      timeline.from(this.imageEl.nativeElement, {
        duration: 1.5,
        opacity: 0,
        x: -100,
        ease: 'power2.out',
      });
    }

    timeline.from(this.subtitleEl.nativeElement, {
      duration: 1.5,
      opacity: 0,
      x: -100,
      ease: 'power2.out'
    }, this.imageEl ? '-=1' : '+=0');

    timeline.from(this.titleEl.nativeElement, {
      duration: 1.5,
      opacity: 0,
      x: -100,
      ease: 'power2.out'
    }, '-=1');

    timeline.from(this.buttonContainerEl.nativeElement, {
      duration: 1.5,
      opacity: 0,
      x: -100,
      ease: 'power2.out'
    }, '-=1');
  }

  get backgroundStyle() {
    return {
      '--background-color': this.backgroundColor,
      '--background-image': this.useBackgroundImage ? `url(${this.backgroundImageUrl})` : 'none',
      '--background-attachment': this.parallax ? 'fixed' : 'scroll',
      '--background-filter': this.imageFilter,
    };
  }

  get imageStyle() {
    return {
      'width': this.imageWidth,
      'height': this.imageHeight,
      'max-width': '100%',
      'max-height': '100%',
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
}
