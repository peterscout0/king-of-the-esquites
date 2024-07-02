import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.css'
})
export class MenuButtonComponent {
  @Input() menutitle: string = "Menú";
  @Input() width: string = '331px';
  @Input() height: string = '84px';
  @Input() marginLeft: string = '230px';
  @Input() lineWidth: string = '75px';
}

