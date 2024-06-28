import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-section.component.html',
  styleUrls: ['./image-section.component.css'],
})
export class ImageSectionComponent {
  @Input() images: { src: string, alt: string }[] = [];
  @Input() imageWidth: string = '150px';
  @Input() imageHeight: string = '150px';
  @Input() gap: string = '20px';
  @Input() backgroundImage: string = '';
  @Input() backgroundColor: string = '#fff';
  @Input() title: string = '';
  @Input() paddingBottom: string = '50px';
  @Input() parallax: boolean = false;

  get backgroundStyle() {
    return {
      '--background-color': this.backgroundColor,
      '--padding-bottom': this.paddingBottom,
      'background-image': `url(${this.backgroundImage})`,
      // 'background-attachment': 'fixed',
      'background-size': 'cover',
      'background-position': 'center',
      ...(this.parallax && { 'background-attachment': 'fixed' }),
    };
  }
}
