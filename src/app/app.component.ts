import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { SwiperCard } from './models/swiper-card.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
    { iconPrefix: 'fab', iconName: 'facebook-f' },
    { iconPrefix: 'fab', iconName: 'instagram' },
    { iconPrefix: 'fab', iconName: 'twitter' },
    { iconPrefix: 'fab', iconName: 'tiktok' }
  ];
  

  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebookF, faInstagram, faTwitter, faTiktok);
  }

  // cards Swiper Esquites

  esquitesOriginalCards: SwiperCard[] = [
    new SwiperCard('/assets/images/esquites/original-esquite.png', '', 'El Chiquito'),
    new SwiperCard('/assets/images/esquites/original-esquite2.png', '', 'El Mamado'),
    new SwiperCard('/assets/images/esquites/lotinacho.png', '', 'LoTinacho'),
    new SwiperCard('/assets/images/esquites/original-no-picante.png', '', 'El sin Chile'),
    new SwiperCard('/assets/images/esquites/colocha.png', '', 'La Colocha'),
  ];

  esquitesTortrixCards: SwiperCard[] = [
    new SwiperCard('/assets/images/esquites/tortrix/tortrix-detodito2.png', 'Tortrix Classic', 'Patoj@ Chilero'),
    new SwiperCard('/assets/images/esquites/tortrix/tortrix-barbacoa.png', 'Tortrix Hot', 'Qué calidá'),
    new SwiperCard('/assets/images/esquites/tortrix/tortrix-detodito3.png', 'Tortrix Hot', 'Chilero esto va'),
    new SwiperCard('/assets/images/esquites/tortrix/tortrix-jala-chapi.png', 'Tortrix Hot', 'Ahísta ve'),
    new SwiperCard('/assets/images/esquites/tortrix/tortrix-barbacoa.png', 'Tortrix Hot', 'Ponete las pilas')
  ];

  esquitesDianaCards: SwiperCard[] = [
    new SwiperCard('/assets/images/esquites/diana/tozteca.png', 'Diana Delight', 'Más sobre Diana Delight'),
    new SwiperCard('/assets/images/esquites/diana/tozteca.png', 'Diana Delight', 'Más sobre Diana Delight'),
    new SwiperCard('/assets/images/esquites/diana/tozteca.png', 'Diana Delight', 'Más sobre Diana Delight'),
    new SwiperCard('/assets/images/esquites/diana/tozteca.png', 'Diana Delight', 'Más sobre Diana Delight'),
    new SwiperCard('/assets/images/esquites/diana/tozteca.png', 'Diana Delight', 'Más sobre Diana Delight'),
  ];

}
