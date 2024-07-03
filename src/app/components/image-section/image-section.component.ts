import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-image-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-section.component.html',
  styleUrls: ['./image-section.component.css'],
})
export class ImageSectionComponent implements AfterViewInit, OnDestroy {
  @Input() images: { src: string, alt: string }[] = [];
  @Input() imageWidth: string = '';
  @Input() imageHeight: string = '';
  @Input() gap: string = '';
  @Input() backgroundImage: string = '';
  @Input() backgroundColor: string = '#fff';
  @Input() title: string = '';
  @Input() titleColor: string = '#fff';
  @Input() titleShadow: string = '';
  @Input() footerBackgroundColor: string = '#fff';
  @Input() paddingBottom: string = '50px';
  @Input() parallax: boolean = false;
  @Input() applyFilter: boolean = false;
  @Input() filterValue: string = 'blur(5px)';

  @ViewChild('imagesContainer', { static: false }) imagesContainerEl!: ElementRef<HTMLDivElement>;
  @ViewChild('sectionFooter', { static: false }) sectionFooterEl!: ElementRef<HTMLDivElement>;

  isMobile: boolean = false;
  observer: IntersectionObserver | null = null;
  isAnimatingImages: boolean = false;
  isAnimatingFooter: boolean = false;

  ngAfterViewInit() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      if (this.imagesContainerEl) {
        this.observer.unobserve(this.imagesContainerEl.nativeElement);
      }
      if (this.sectionFooterEl) {
        this.observer.unobserve(this.sectionFooterEl.nativeElement);
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
          if (entry.target === this.imagesContainerEl.nativeElement && !this.isAnimatingImages) {
            this.animateImagesContainer();
          }
          if (entry.target === this.sectionFooterEl.nativeElement && !this.isAnimatingFooter) {
            this.animateSectionFooter();
          }
        }
      });
    }, options);

    if (this.imagesContainerEl) {
      this.observer.observe(this.imagesContainerEl.nativeElement);
    }
    if (this.sectionFooterEl) {
      this.observer.observe(this.sectionFooterEl.nativeElement);
    }
  }

  animateImagesContainer() {
    this.isAnimatingImages = true;
    gsap.from(this.imagesContainerEl.nativeElement, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: 'power2.out',
      onComplete: () => { 
        this.isAnimatingImages = false; // Reset the flag when animation completes
      }
    });
  }

  animateSectionFooter() {
    this.isAnimatingFooter = true;
    gsap.from(this.sectionFooterEl.nativeElement, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: 'power2.out',
      onComplete: () => { 
        this.isAnimatingFooter = false; // Reset the flag when animation completes
      }
    });
  }

  get backgroundStyle() {
    return {
      '--background-color': this.backgroundColor,
      '--padding-bottom': this.paddingBottom,
      '--background-image': `url(${this.backgroundImage})`,
      '--background-filter': this.applyFilter ? this.filterValue : 'none',
      '--background-attachment': this.parallax ? 'fixed' : 'scroll',
      'background-size': 'cover',
      'background-position': 'center',
    };
  }

  get filterStyle() {
    return {
      ...(this.applyFilter && { 'filter': this.filterValue }),
    };
  }

  get imageStyle() {
    return {
      'width': this.imageWidth,
      'height': this.imageHeight,
    };
  }

  get titleStyle() {
    return {
      'color': this.titleColor,
      'text-shadow': this.titleShadow,
    };
  }
}
