import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[lazyLoad]'
})
export class LazyLoadDirective implements OnInit {
  @Input() src: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.loadImage();
  }

  loadImage() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.setAttribute(this.el.nativeElement, 'src', this.src);
          observer.disconnect();
        }
      });
    });
    observer.observe(this.el.nativeElement);
  }
}
