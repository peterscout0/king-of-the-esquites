import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faXTwitter, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  title = "king-of-the-esquites";

  addresses = [
    { line1: "Carretera Interamericana zona 4", line2: "Jutiapa, Jutiapa" },
    { line1: "Central del progreso", line2: "El progreso, Jutiapa" },
    { line1: "Centro Comercial de Jalapa", line2: "Jalapa, Jalapa" }
  ];
  
  contacts = [
    { info: "Whatsapp", phone: "5571-6314" },
    { info: "Servicio a Domicilio", phone: "5571-6314" }
  ];
  
  operatingHours = [
    { days: "Martes a Viernes", time: "9AM-8PM" },
    { days: "Sábados y Domingos", time: "10AM-5PM" }
  ];
  
  
  socialLinks = [
    { iconPrefix: 'fab', iconName: 'facebook-f', url: 'https://www.facebook.com/profile.php?id=61550868701305' },
    { iconPrefix: 'fab', iconName: 'instagram', url: 'https://www.instagram.com/king_of_the_esquites/' },
    { iconPrefix: 'fab', iconName: 'x-twitter', url: 'https://x.com/KingEsquite' },
    { iconPrefix: 'fab', iconName: 'tiktok', url: 'https://www.tiktok.com/@king_of_the_esquites' },
    { iconPrefix: 'fab', iconName: 'whatsapp' }
  ];
  
  whatsappNumber = '55716314';

  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebookF, faInstagram, faXTwitter, faTiktok, faWhatsapp);
  }

}
