import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgFor } from '@angular/common'; 

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() addresses!: any[];
  @Input() contacts!: any[];
  @Input() operatingHours!: any[];
  @Input() socialLinks!: any[];
}
