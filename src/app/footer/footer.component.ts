import { Component, Input, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgFor } from '@angular/common';
import { gsap } from 'gsap'; 

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit {
  @Input() addresses!: any[];
  @Input() contacts!: any[];
  @Input() operatingHours!: any[];
  @Input() socialLinks!: any[];
  @Input() whatsappNumber!: string;

  @ViewChildren('animateItem') animateItems!: QueryList<ElementRef>;

  private observer: IntersectionObserver | null = null;
  isMobile: boolean = false;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.isMobile = window.innerWidth <= 768;

    if (!this.isMobile) {
      this.setupIntersectionObserver();
    }
  }

  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateFooterItems();
          if (this.observer) {
            this.observer.disconnect();
          }
        }
      });
    }, options);

    if (this.elementRef.nativeElement) {
      this.observer.observe(this.elementRef.nativeElement);
    }
  }

  animateFooterItems() {
    const itemsArray = this.animateItems.toArray().map(item => item.nativeElement);

    gsap.from(itemsArray, {
      duration: 1,
      opacity: 0,
      x: -100,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }

  handleContactClick(info: string, phone: string) {
    let url: string;
    if (info.toLowerCase().includes('whatsapp')) {
      url = `https://wa.me/${phone.replace(/[-\s]/g, '')}`;
    } else {
      url = `tel:${phone}`;
    }
    window.open(url, '_blank');
  }

  handleSocialLinkClick(event: Event, link: any) {
    event.preventDefault();
    let url: string;
    if (link.iconName === 'whatsapp') {
      url = `https://wa.me/${this.whatsappNumber}`;
    } else {
      url = link.url;
    }
    window.open(url, '_blank');
  }
}
