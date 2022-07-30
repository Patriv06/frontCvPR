import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hobbies } from './hobbies';
import { HobbiesService } from './hobbies.service';

@Component({
  selector: 'app-datos-hobbies',
  templateUrl: './datos-hobbies.component.html',
  styleUrls: ['./datos-hobbies.component.css']
})
export class DatosHobbiesComponent implements OnInit {

  hob!: Hobbies[];
  public permiso: any;  
  constructor(private hobbiesServicio:HobbiesService) { }

  ngOnInit(): void {
     this.traerHobbies();
  
 }
 
 private traerHobbies(){
   this.hobbiesServicio.obtenerHobbie().subscribe(dato =>{this.hob = dato})
   
    console.log(this.hob);
    }
    ngAfterViewChecked() {   

      this.permiso =localStorage.getItem('permiso');
      console.log(this.permiso);
      console.log("ngAfterViewChecked");
      return this.permiso
  
    }
  
  
 }


