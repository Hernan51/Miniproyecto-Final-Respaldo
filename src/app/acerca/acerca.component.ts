
import { Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-acercade',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  video='cSvLambSquw?rel=0&amp;autoplay=1cd';
}

export interface PeriodicElement {
  name: string;
  position: number;
  edad: number;
  pais: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 8, name: 'Hernan Cortes Arechiga', edad: 20, pais: 'Mexico'},
  {position: 6, name: 'Alberto Campos Terrones', edad: 20, pais: 'Mexico'},
  {position: 7, name: 'Andrea Candelario', edad: 20, pais: 'Mexico'},
  {position: 9, name: 'Estefania Diaz Rojas', edad: 20, pais: 'Mexico'},
  {position: 5, name: 'Alain Ducasse', edad: 20, pais: 'Francia'},


];



