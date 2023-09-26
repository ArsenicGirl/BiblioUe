//importar/tomar los datos desde la clase person en otro archivo

import Person from './person';

class Student extends Person {
    constructor(stud_id, stud_firstName, stud_lastName, stud_email, stud_password, stud_carnet, coll_id, firstName, lastName, email, password) {
      super(firstName, lastName, email, password);
      this.stud_id = stud_id;
      this.stud_firstName = stud_firstName;
      this.stud_lastName = stud_lastName;
      this.stud_email = stud_email;
      this.stud_password = stud_password;
      this.stud_carnet = stud_carnet;
      this.coll_id = coll_id;
      this.bloqueo = false; // Atributo bloqueo agregado
  }

  // Métodos setters y getters específicos de Student
  setStudId(stud_id) {
    this.stud_id = stud_id;
  }

  getStudId() {
    return this.stud_id;
  }

  setStudFirstName(stud_firstName) {
    this.stud_firstName = stud_firstName;
  }

  getStudFirstName() {
    return this.stud_firstName;
  }

  setStudLastName(stud_lastName) {
    this.stud_lastName = stud_lastName;
  }

  getStudLastName() {
    return this.stud_lastName;
  }

  setStudEmail(stud_email) {
    this.stud_email = stud_email;
  }

  getStudEmail() {
    return this.stud_email;
  }

  setStudPassword(stud_password) {
    this.stud_password = stud_password;
  }

  getStudPassword() {
    return this.stud_password;
  }

  setStudCarnet(stud_carnet) {
    this.stud_carnet = stud_carnet;
  }

  getStudCarnet() {
    return this.stud_carnet;
  }

  setBloqueoEstado(bloqueoEstado) {
    this.bloqueo = bloqueoEstado;
  }
  // Método para obtener el estado de bloqueo del estudiante
  getBloqueoEstado() {
    return this.bloqueo;
  }
}


export default Student;