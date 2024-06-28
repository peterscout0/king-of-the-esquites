import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-section.component.html',
  styleUrls: ['./carousel-section.component.css'],
})
export class CarouselSectionComponent implements OnInit {
  @Input() images: { src: string, alt: string }[] = [];
  @Input() imageWidth: string = '85%'; // Ajustado para ver el fondo
  @Input() imageHeight: string = 'auto';
  @Input() backgroundColor: string = '#000';
  @Input() title: string = '';
  @Input() titleColor: string = '#fff';
  @Input() titleBackgroundColor: string = 'rgba(0, 0, 0, 0.5)';
  @Input() parallax: boolean = false;
  @Input() transitionDuration: number = 5000; // en milisegundos
  @Input() imageFilter: string = '';

  currentIndex: number = 0;

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, this.transitionDuration);
  }

  get backgroundStyle() {
    return {
      '--background-color': this.backgroundColor,
      'filter': this.imageFilter,
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
    };
  }
}