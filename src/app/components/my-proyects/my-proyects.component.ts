import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProyectItem } from '../../interfaces/proyectItem.interfaces';

@Component({
  selector: 'app-my-proyects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-proyects.component.html',
  styleUrl: './my-proyects.component.scss',
})
export class MyProyectsComponent {

  websItem: ProyectItem[] = [
    {
      title: 'Melosa Bar',
      description:
        'Carta digital para Melosa Bar. La carta permite a los clientes ver el menú completo, incluyendo bebidas y comidas, con descripciones y precios detallados. Además, cuenta con un pánel administrador para que los dueños administren los productos.',
      image: '../../../assets/img/proyects/webs/melosaBar.png',
      link: 'https://melosa-77d77.web.app',
    },

    {
      title: 'World AI',
      description:
        'World AI es una plataforma web que ofrece una variedad de herramientas y recursos impulsados por inteligencia artificial para facilitar diversas tareas y mejorar la productividad de los usuarios.',
      image: '../../../assets/img/proyects/webs/worldAi.png',
      link: 'https://world-ai.vercel.app',
    },

    {
      title: 'Kanky Store',
      description:
        'En Kanky Store vas a encontrar un catálogo de ropa, con informacion y precio del producto, tambien cuenta con filtros, buscador y un redireccionamiento a WhatsApp con el nombre del producto que le interese al usuario.',
      image: '../../../assets/img/proyects/webs/kankyStore.png',
      link: 'https://kanky-store.vercel.app',
    },

    {
      title: 'Del Lauti',
      description:
        'Del Lauti es una página web que presenta toda la información sobre el peluquero y supeluquería, con un turnero online agregado que permite a los clientes reservar sus turnos de forma rápida y sencilla para sus servicios.',
      image: '../../../assets/img/proyects/webs/peluDelLauti.png',
      link: 'https://dellauti-5413f.web.app/home',
    },

    {
      title: 'Fix',
      description:
        'Fix es una aplicación multiplataforma diseñada para ofrecer información de manera rápida y accesible sobre temas de interés como salud, alimentos, compras, y más. Con un enfoque en simplificar el acceso a datos útiles, actualmente opera en la zona de Venado Tuerto.',
      image: '../../../assets/img/proyects/webs/fix.png',
      link: 'https://fixvt.app/home',
    },
  ];

  figmaItem: ProyectItem[] = [
    {
      title: 'Sitio Web de Viajes',
      description:
        'Diseño web. Podemos programar su página web con el diseño que desee.',
      image: '../../../assets/img/proyects/figma/travelWebsite.png',
      link: 'https://www.instagram.com/reel/DG0t43PMrJw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },

  ];
}
