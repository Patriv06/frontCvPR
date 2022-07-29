import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
 
  usuario ={
    email:" ",
    password:" "
  };
 
  constructor(private authService : AuthService, private router:Router) { }
  
    ngOnInit(): void {
      window.localStorage.setItem('permiso', ' ');// guardo rol de usuario vacío
    
   }
   
   Ingresar() {
    const { email, password } = this.usuario;
   localStorage.setItem('permiso', 'log');
 /*    console.log("email:" + email) */
 /*    console.log("path:" + password) */ 
    this.authService.login(email, password).then(user => {
      console.log("Bienvenido ", user);
     localStorage.setItem('permiso', 'editar');// guardo rol de usuario
      if(!user) {
     localStorage.setItem('permiso', 'log');
        alert("Ingresa como Usuario sin permiso para editar");
        this.router.navigate(['/portfolio'])
        return;
      };
      this.router.navigate(['/portfolio'])
    }).catch(err=>{
      console.log(err)
    })
  }
   
   
   
   
  
  
   
   
   }
  

