import { Component, Input, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  @Input() showLogo: boolean = true;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.querySelector('#navbarNavDropdown') as HTMLElement;

    navbarCollapse.addEventListener('shown.bs.collapse', () => {
      this.renderer.addClass(navbarToggler, 'rotated');
    });

    navbarCollapse.addEventListener('hidden.bs.collapse', () => {
      this.renderer.removeClass(navbarToggler, 'rotated');
    });
  }
}
