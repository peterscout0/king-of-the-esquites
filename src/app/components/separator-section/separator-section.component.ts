import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-separator-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './separator-section.component.html',
  styleUrls: ['./separator-section.component.css']
})
export class SeparatorSectionComponent {
  @Input() height: string = '150px';
  @Input() backgroundColor: string = '';
  @Input() backgroundImageUrl: string = '';
  @Input() useBackgroundImage: boolean = false;
  @Input() parallax: boolean = false;

  get separatorStyle() {
    return {
      'height': this.height,
      'background-color': this.backgroundColor,
      'background-image': this.useBackgroundImage ? `url(${this.backgroundImageUrl})` : 'none',
      'background-size': this.useBackgroundImage ? 'cover' : 'initial',
      'background-position': this.useBackgroundImage ? 'center' : 'initial',
      'background-attachment': this.parallax ? 'fixed' : 'scroll',
    };
  }
}
