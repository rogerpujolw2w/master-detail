import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/classes/user';

@Component({
  selector: 'app-membermanager',
  templateUrl: './membermanager.component.html',
  styleUrls: ['./membermanager.component.scss']
})
export class MembermanagerComponent implements OnInit {

  user: User;
  storedUser: User;
  usersArray: Array<User>;
  registreredUsers = 0;
  usuarioCorrecto = false;
  usuarioErroneo = false;

  constructor() { }

  ngOnInit() {
  }

  recibir(usuario:User) {
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

}
