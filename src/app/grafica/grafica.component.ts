import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit{
  historial: any[] = [];
  constructor(private firestore: AngularFirestore,private userService:UserService,private router: Router) { }

  ngOnInit(): void {
    this.firestore.collection('reservaciones').valueChanges().subscribe(data => {
      this.historial = data as any[];

      // Llama a la función para crear el gráfico pasando los datos
      this.crearGrafica();
    });
  }


  crearGrafica() {
    const ctx = document.getElementById('grafica') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
          label: 'Reservaciones',
          data: [15, 10, 8, 12, 20],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
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









