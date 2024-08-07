import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuButtonComponent {
  @Input() menutitle: string = "Menú";
  @Input() width: string = '331px';
  @Input() height: string = '84px';
  @Input() marginLeft: string = '230px';
  @Input() lineWidth: string = '75px';
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
