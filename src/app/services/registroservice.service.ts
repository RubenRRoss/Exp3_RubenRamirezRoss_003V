import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuario{
  nomUsuario: string;
  correoUsuario: string;
  passUsuario:string; 
  repassUsuario:string;
}

const USERS_KEY = 'usuarios_alumnos';

@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {

  private _storage!: Storage;

  constructor(private storage: Storage) {
    this.init();
   }

  //creamos el storage
  async init(){
    const storage = await this.storage.create();
    this._storage = storage; 
  }

  //creamos un usuario en el storage 
  async addUsuario(dato: Usuario):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos:Usuario[])=>{ 
      if(datos){
        datos.push(dato);
        return this.storage.set(USERS_KEY,datos);
      }
      else{
        return this.storage.set(USERS_KEY, [dato]);
      }
    })
  }


  async getUsuarios():Promise<Usuario[]>{
    return this.storage.get(USERS_KEY);
  }


}