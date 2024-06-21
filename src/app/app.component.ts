import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'king-of-the-esquites';

  addresses = [
    { line1: "Carretera Interamericana zona 4", line2: "Jutiapa, Jutiapa" },
    { line1: "Central del progreso", line2: "El progreso, Jutiapa" },
    { line1: "Centro Comercial de Jalapa", line2: "Jalapa, Jalapa" }
  ];
  
  contacts = [
    { info: "Whatsapp", phone: "1234-4567" },
    { info: "Servicio a Domicilio", phone: "1234-4567" }
  ];
  
  operatingHours = [
    { days: "Lunes a Viernes", time: "8AM-9PM" },
    { days: "Sábados y Domingos", time: "10AM-6PM" }
  ];
  
  socialLinks = [
    { iconPrefix: 'fab', iconName: 'facebook-f' },
    { iconPrefix: 'fab', iconName: 'instagram' },
    { iconPrefix: 'fab', iconName: 'twitter' },
    { iconPrefix: 'fab', iconName: 'tiktok' }
  ];
  

  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebookF, faInstagram, faTwitter, faTiktok);
  }

}
