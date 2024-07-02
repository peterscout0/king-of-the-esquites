import { Component, Input } from '@angular/core';
import { MenuButtonComponent } from '../buttons/menu-button/menu-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [CommonModule, MenuButtonComponent],
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent {
  @Input() title: string = 'HELADO';
  @Input() subtitle: string = 'Artesanal';
  @Input() imageUrl: string = '/assets/images/logo.png';
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
