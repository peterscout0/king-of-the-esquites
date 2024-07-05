import { Injectable } from '@angular/core';
import { SwiperCard } from '../models/swiper-card.model';

@Injectable({
  providedIn: 'root'
})
export class EsquitesService {

  getEsquitesOriginalCards(): SwiperCard[] {
    return [
      new SwiperCard('/assets/images/esquites/original-esquite.png', '', 'El Mamado'),
      new SwiperCard('/assets/images/esquites/original-esquite2.png', '', 'El Chiquito'),
      new SwiperCard('/assets/images/esquites/lotinacho.png', '', 'LoTinacho'),
      new SwiperCard('/assets/images/esquites/original-no-picante.png', '', 'El sin Chile'),
      new SwiperCard('/assets/images/esquites/colocha.png', '', 'La Colocha'),
    ];
  }

  getEsquitesTortrixCards(): SwiperCard[] {
    return [
      new SwiperCard('/assets/images/esquites/tortrix/tortrix-barbacoa.png', 'Tortrix Hot', 'Qué calidá'),
      new SwiperCard('/assets/images/esquites/tortrix/tortrix-detodito2.png', 'Tortrix Classic', 'Patoj@ Chilero'),
      new SwiperCard('/assets/images/esquites/doritos/dorito-rojo1.png', 'Tortrix Hot', 'El Atrevido'),
      new SwiperCard('/assets/images/esquites/tortrix/tortrix-detodito3.png', 'Tortrix Hot', 'Chilero esto va'),
      new SwiperCard('/assets/images/esquites/tortrix/tortrix-jala-chapi.png', 'Tortrix Hot', 'Ahísta ve'),
      new SwiperCard('/assets/images/esquites/tortrix/tortrix-barbacoa.png', 'Tortrix Hot', 'Ponete las pilas'),
    ];
  }

  getEsquitesDianaCards(): SwiperCard[] {
    return [
      new SwiperCard('/assets/images/esquites/diana/tozteca.png', 'Diana Delight', 'Más sobre Diana Delight'),
      new SwiperCard('/assets/images/esquites/diana/nacho-diana.png', 'Diana Delight', 'Más sobre Diana Delight'),
      new SwiperCard('/assets/images/esquites/diana/jalapeno-diana.png', 'Diana Delight', 'Más sobre Diana Delight'),
      new SwiperCard('/assets/images/esquites/diana/quesitos-diana.png', 'Diana Delight', 'Más sobre Diana Delight'),
      new SwiperCard('/assets/images/esquites/diana/tozteca-original-diana.png', 'Diana Delight', 'Más sobre Diana Delight'),
      new SwiperCard('/assets/images/esquites/diana/tozteca-fire-spots-diana.png', 'Diana Delight', 'Más sobre Diana Delight'),
      new SwiperCard('/assets/images/esquites/diana/tozteca-fire-pops-diana.png', 'Diana Delight', 'Más sobre Diana Delight'),
    ];
  }
}
