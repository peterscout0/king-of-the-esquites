import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { SwiperCard } from './models/swiper-card.model';
import { ErrorComponent } from './components/error/error.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent, FontAwesomeModule, ErrorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "king-of-the-esquites";

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
    { iconPrefix: 'fab', iconName: 'facebook-f', url: 'https://www.facebook.com/profile.php?id=61550868701305' },
    { iconPrefix: 'fab', iconName: 'instagram', url: 'https://www.instagram.com/king_of_the_esquites/' },
    { iconPrefix: 'fab', iconName: 'twitter', url: 'https://x.com/KingEsquite' },
    { iconPrefix: 'fab', iconName: 'tiktok', url: 'https://www.tiktok.com/@king_of_the_esquites' },
    { iconPrefix: 'fab', iconName: 'whatsapp' }
  ];
  
  whatsappNumber = '12344567';

  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebookF, faInstagram, faTwitter, faTiktok, faWhatsapp);
  }

}
