import { Component, OnInit } from '@angular/core';
import { Idioma } from './idioma';
import { IdiomaService } from './idioma.service';

@Component({
  selector: 'app-datos-idiomas',
  templateUrl: './datos-idiomas.component.html',
  styleUrls: ['./datos-idiomas.component.css']
})
export class DatosIdiomasComponent implements OnInit {

  idi!: Idioma[];
  public permiso: any;  
  constructor(private idiomaServicio:IdiomaService) { }

  ngOnInit(): void {
     this.traerIdioma();
  
 }
 
 private traerIdioma(){
   this.idiomaServicio.obtenerIdioma().subscribe(dato =>{this.idi = dato})
   
    console.log(this.idi);
    }
    ngAfterViewChecked() {   

      this.permiso =localStorage.getItem('permiso');
      console.log(this.permiso);
      console.log("ngAfterViewChecked");
      return this.permiso
  
    }
  
  
 }



