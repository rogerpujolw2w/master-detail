import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { User } from '../../shared/classes/user';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
export class MyformComponent implements OnInit {

  id: string;
  dni: string;
  nombre: string;
  user: User;

//  @Input() errorDetected = false;
//  @Input() recordSaved = false;

  //@Output() enviarUsuario = new EventEmitter<User>();

  constructor(private servicio: ServicioService) {
      this.id = '';
      this.dni = '';
      this.nombre = '';
/*       this.errorDetected = false;
      this.recordSaved = false;
 */   }

   saveRecord() {
     this.user = new User(this.dni, this.nombre);
     this.servicio.recibir(this.user);
     //this.enviarUsuario.emit(this.user);
     this.dni = '';
     this.nombre = '';
   }

   clearNotice() {
/*   this.errorDetected = false;
  this.recordSaved = false;
 */}

  ngOnInit() {
  }

}
