import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/classes/user';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-membermanager',
  templateUrl: './membermanager.component.html',
  styleUrls: ['./membermanager.component.scss']
})
export class MembermanagerComponent implements OnInit {

  usuarioCorrecto = false;
  usuarioErroneo = false;

/*   user: User;
  storedUser: User;
  usersArray: Array<User> = [];
  registreredUsers = 0;
  usuarioCorrecto = false;
  usuarioErroneo = false;
 */
  constructor(private servicio: ServicioService) {

  }

  ngOnInit() {
  }

/*   recibir(usuario: User) {
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
 */

}
