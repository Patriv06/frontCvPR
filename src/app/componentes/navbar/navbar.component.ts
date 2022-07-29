import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/servicio/auth.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public permiso: any;  
  ngOnInit(): void {
    
  }
  ngAfterViewChecked() {   

    this.permiso =localStorage.getItem('permiso');
    console.log(this.permiso);
    console.log("ngAfterViewChecked");
    return this.permiso

  }

 logout(){
  window.localStorage.setItem('permiso', 'log');
  window.location.reload();
 }
 login(){
  RouterLink
    
 }
 
  }
    

 
