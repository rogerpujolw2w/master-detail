export class User {

  id: string;
  nombre: string;
  dni: string;

  constructor(dni, nombre) {
    this.id = this.uniqueId();
    this.nombre = nombre;
    this.dni = dni;
  }



  private uniqueId() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.',thisMS.toString());
    return unique;
  }

}
