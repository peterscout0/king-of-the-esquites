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
  @Input() imageWidth: string = '200px';
  @Input() imageHeight: string = '200px';
  @Input() gap: string = '30px';
  @Input() backgroundImage: string = '';
  @Input() backgroundColor: string = '#fff';
  @Input() title: string = '';
  @Input() titleColor: string = '#fff';
  @Input() footerBackgroundColor: string = '#fff';
  @Input() paddingBottom: string = '50px';
  @Input() parallax: boolean = false;
  @Input() applyFilter: boolean = false;
  @Input() filterValue: string = 'blur(5px)';

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
}
