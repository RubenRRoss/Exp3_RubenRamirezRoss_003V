import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegistrodeprofesoresService } from '../../services/registrodeprofesores.service';


@Component({
  selector: 'app-perfilprofe',
  templateUrl: './perfilprofe.page.html',
  styleUrls: ['./perfilprofe.page.scss'],
})
export class PerfilprofePage implements OnInit {


  

  constructor(private navController: NavController, private usuario : RegistrodeprofesoresService){
     
  }
   ngOnInit() {
     
   }
  

    CerrarSesion() {

      localStorage.removeItem('ingresado');
      this.navController.navigateRoot('inicio');


  }

}
