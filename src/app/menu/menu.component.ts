import { Component } from '@angular/core';
import * as QRCode from 'qrcode';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

export interface MenuItem {
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

  constructor(private userService: UserService, private router: Router) {}
  showSearch: boolean = false;
  searchText: string = '';

  onClick() {
    this.userService
      .logout()
      .then(() => {
        this.router.navigate(['/register']);
      })
      .catch((error) => console.log(error));
  }
  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  get filteredMenuItems(): MenuItem[] {
    if (!this.searchText || this.searchText.trim() === '') {
      return this.menuItems;
    }

    const searchTerm = this.searchText.toLowerCase();
    return this.menuItems.filter(item => item.name.toLowerCase().includes(searchTerm));
  }

  addMenuItem(name: string, description: string, image: string) {
    this.menuItems.push({ name, description, image });
  }

  public qrCodeText: string = '';
  public qrCodeImageUrl: string = '';

  dataObjects = [
    { name: 'Tacos de Marlin con Pulpo', Precio: '$230', Porcion: '3' },
    { name: 'Rib Eye a la tabla', Precio: '$440', Porcion: '1' },
    { name: 'Especial de mariscos', Precio: '$319', Porcion: '220gr' },
    { name: 'Flat Iron Steak', Precio: '$379', Porcion: '250gr' },
    { name: 'Paquete Carne Asada', Precio: '$310', Porcion: '643gr/total' },
    { name: 'Filete en su jugo', Precio: '$240', Porcion: '300gr' },
  ];

  generateQRCode() {
    const randomIndex = Math.floor(Math.random() * this.dataObjects.length);
    const randomObject = this.dataObjects[randomIndex];
    const qrCodeText = JSON.stringify(randomObject);

    QRCode.toDataURL(qrCodeText)
      .then((url) => {
        this.qrCodeImageUrl = url;
      })
      .catch((err) => {
        console.error(err);
      });
  }
}


