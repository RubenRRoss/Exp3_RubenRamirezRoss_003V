import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { RegistrodeprofesoresService, Usuariop } from '../../services/registrodeprofesores.service';
import { FormGroup, FormControl, Validators,FormBuilder} 
from '@angular/forms';

@Component({
  selector: 'app-loginProfe',
  templateUrl: './loginProfe.page.html',
  styleUrls: ['./loginProfe.page.scss'],
})
export class LoginProfePage implements OnInit {

  formularioLogin : FormGroup;
  usuariosp : Usuariop[] = []; 

  constructor(private alertController: AlertController, 
              private navController: NavController,
              private menuController: MenuController,
              private registrodeprofesoresService: RegistrodeprofesoresService, 
              private fb: FormBuilder) {
                this.formularioLogin = fb.group({ 
                  'correo': new FormControl("", Validators.required), 
                  'password': new FormControl("", Validators.required)
                 })
               }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async Ingresarp(){
    var f = this.formularioLogin.value; 
    var a = 0;
    this.registrodeprofesoresService.getUsuariosp().then(datos=>{
      if(datos!=null){
      
      

      for(let obj of datos){
        
        if(obj.correoUsuariop===f.correo && obj.passUsuariop===f.password){
            a=1;
            console.log('ingresado');
            localStorage.setItem('ingresado', 'true');
            this.navController.navigateRoot('perfilprofe');
        }
        
      }
    }
      if(a==0){
        this.alertMsg();
      }
    });
  }


  async alertMsg(){
    const alert = await this.alertController.create({ 
      header: 'Error..',
      message: 'Correo o Contraseña Invalidos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }
}