import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-generaQR',
  templateUrl: './generaQR.page.html',
  styleUrls: ['./generaQR.page.scss'],
})
export class GeneraQRPage implements OnInit {

  qrCodeString= 'Clase'; 
  scannedResult:any;

  constructor(private menuController: MenuController
    , public navController: NavController) { }

    usuariop={
      nombre:'',
    }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  generarQR(){
    this.qrCodeString= this.usuariop.nombre;
  }

  verQR(){
    this.scannedResult=this.qrCodeString;
  }
}
