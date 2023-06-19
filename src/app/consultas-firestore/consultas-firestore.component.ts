import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreApiService } from '../firebase-api.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas-firestore',
  templateUrl: './consultas-firestore.component.html',
  styleUrls: ['./consultas-firestore.component.css']
})
export class ConsultasFirestoreComponent implements OnInit {
  resultados!: any[];

  constructor(private firestore: AngularFirestore, private firestoreApiService: FirestoreApiService,private userService:UserService, private router: Router) { }

  ngOnInit() {
    // Realizar una consulta a la base de datos de Cloud Firestore
    this.firestore.collection('reservaciones').valueChanges().subscribe(data => {
      this.resultados = data;
    });
  }



  fetchDataFromFirestore(collection: string) {
    this.firestoreApiService.getFirestoreData(collection)
      .subscribe(
        data => {
          console.log('Datos obtenidos de Cloud Firestore:', data);
          this.sendDataToApi(data);
        },
        error => {
          console.error('Error al obtener los datos de Cloud Firestore:', error);
          // Maneja el error de acuerdo a tus necesidades
        }
      );
  }

  sendDataToApi(data: any) {
    this.firestoreApiService.sendDataToApi(data)
      .subscribe(
        response => {
          console.log('Datos enviados a la API con éxito:', response);
          // Realiza cualquier otra acción necesaria con la respuesta de la API
        },
        error => {
          console.error('Error al enviar los datos a la API:', error);
          // Maneja el error de acuerdo a tus necesidades
        }
      );
  }

  onClick() {
    this.userService
      .logout()
      .then(() => {
        this.router.navigate(['/register']);
      })
      .catch((error) => console.log(error));
  }
}
