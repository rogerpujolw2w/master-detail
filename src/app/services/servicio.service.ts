import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/classes/user';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  user: User;
  storedUser: User;
  usersArray: Array<User> = [];
  registreredUsers = 0;
  usuarioCorrecto = false;
  usuarioErroneo = false;

  constructor() { }

  recibir(usuario: User) {
    this.usuarioCorrecto = false;
    this.usuarioErroneo = false;

    if (usuario.dni === '' || usuario.nombre === '') {
      this.usuarioCorrecto = false;
      this.usuarioErroneo = true;
    }

    if (this.usersArray.length > 0) {
        for (this.storedUser of this.usersArray) {
          if (usuario.dni === this.storedUser.dni) {
            this.usuarioCorrecto = false;
            this.usuarioErroneo = true;
          }
        }
    }

    if (this.usuarioErroneo === false) {
      this.usuarioCorrecto = true;
      this.user = usuario;
      this.usersArray.push(this.user);
      this.registreredUsers = this.usersArray.length;
    }

  }

  eraseUserXX(user: User) {
    const index = this.usersArray.indexOf(user);
    this.usersArray.splice(index, 1);
    this.registreredUsers = this.usersArray.length;
  }
}
