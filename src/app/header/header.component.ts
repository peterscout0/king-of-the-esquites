import { Component, Input, AfterViewInit, Renderer2, HostListener, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  @Input() showLogo: boolean = true;
  private lastScrollTop: number = 0;

  isMobile: boolean = false;

  @ViewChildren('navItem') navItems!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.isMobile = window.innerWidth <= 768;

    if (!this.isMobile) {
      this.animateNavItems();
    }
    
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.querySelector('#navbarNavDropdown') as HTMLElement;

    navbarCollapse.addEventListener('shown.bs.collapse', () => {
      this.renderer.addClass(navbarToggler, 'rotated');
    });

    navbarCollapse.addEventListener('hidden.bs.collapse', () => {
      this.renderer.removeClass(navbarToggler, 'rotated');
    });
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('header') as HTMLElement;

    if (currentScroll > this.lastScrollTop) {
      this.renderer.setStyle(header, 'top', '-100px');
    } else {
      this.renderer.setStyle(header, 'top', '0');
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  animateNavItems() {
    const navItemsArray = this.navItems.toArray().map(item => item.nativeElement);

    gsap.from(navItemsArray, {
      duration: 1,
      opacity: 0,
      x: -100,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }
}