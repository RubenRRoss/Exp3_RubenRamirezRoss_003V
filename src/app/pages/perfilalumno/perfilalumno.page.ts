import { Component, OnInit } from '@angular/core';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-perfilalumno',
  templateUrl: './perfilalumno.page.html',
  styleUrls: ['./perfilalumno.page.scss'],
})
export class PerfilalumnoPage implements OnInit {

  usuarios: Usuario[]=[];
  

  constructor(private navController: NavController, private usuario : RegistroserviceService){
     
  }
   ngOnInit() {
     
   }
  

    CerrarSesion() {

      localStorage.removeItem('ingresado');
      this.navController.navigateRoot('inicio');


  }

}
