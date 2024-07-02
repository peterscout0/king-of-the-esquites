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
}
