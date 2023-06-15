import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  name: string | undefined;
  email: string | undefined;
  message: string | undefined;

  onSubmit(value: any){
    console.log('Save: ', value);
}

}
