import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  description: string;

  image: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems = [
    {
      name: 'Carne D,Roja',
      description: 'Orden para tres personas de exquisita carne deshebrada frita con cebolla al estilo de Mochomos',

      image: '../../assets/img/comida1.jpg'
    },
    {
      name: 'TACOS DE MARLIN CON PULPO',
      description: 'Tacos semidorados de maíz rellenos de marlin y pulpo, aderezados con salsa de semillas de pepitas. ',
      image: '../../assets/img/comida.jpg'
    },
    {
      name: 'ENSALADA ROYAL',
      description: 'Deliciosa ensalada de espinaca aderezada con vinagreta balsámica y suprema de mandarina.  ',

      image: '../../assets/img/comida2.jpg'
    },
    {
      name: 'ESPECIAL DE MARISCOS',
      description: 'Delicioso platillo de pulpo, camarón y callo fresco con la receta original de la casa basada en salsas negras. ',

      image: '../../assets/img/comida3.jpg'
    },
    {
      name: 'RIB EYE A LA TABLA ',
      description: 'El mejor corte de rib eye de nuestra región. Asado a la parrilla servido en una tabla de mezquite con mantequilla.',

      image: '../../assets/img/comida4.jpg'
    },
    {
      name: 'COLIFROL ALMENDRADA',
      description: 'Colifrol salteada en jugo especial de la casa, espolvoreada con almendra tostada y calabaza asada. ',

      image: '../../assets/img/comida5.jpg'
    },



  ];

  constructor() { }

  addMenuItem(name: string, description: string, image: string) {
    this.menuItems.push({ name, description, image });
  }
}


