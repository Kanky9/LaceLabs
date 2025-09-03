import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  // Ajusta rutas de imagen y CV según tu /assets
  profiles = [
    {
      name: 'Joaquín Bello',
      role: 'Diseñador UI/UX · Frontend Developer · Soporte IT',
      img: '../../../assets/img/about-us/joaco.jpeg',
      cv: '../../../pdf/CVJoaBello.pdf',
      desc: 'Diseño y adapto interfaces en Figma a experiencias visuales modernas y funcionales en Angular e Ionic.'
    },
    {
      name: 'Santino Bournot',
      role: 'Frontend Developer · Firebase Integration · Soporte IT',
      img: '../../../assets/img/about-us/kanky.jpg',
      cv: '../../../pdf/CV-Bournot-Santino.pdf',
      desc: 'Desarrollo aplicaciones web y móviles con Angular/Ionic integradas a Firebase, uniendo diseño, lógica y datos en un solo flujo.'
    }
  ];
}
