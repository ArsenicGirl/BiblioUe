import Book from './book'; // Ajusta la ruta según la ubicación real del archivo Book.js
import Student from './student'; // Ajusta la ruta según la ubicación real del archivo Student.js

class Lending {
  constructor(lend_id, lend_startDate, lend_returnDate, lend_state, lend_nRenovations, /*book, student*/) {
    this.lend_id = lend_id;
    this.lend_startDate = lend_startDate;
    this.lend_returnDate = lend_returnDate;
    this.lend_state = lend_state;
    this.lend_nRenovations = lend_nRenovations;
    /*this.book = book;
    this.student = student;*/
  }

  //metodo para notificar la fecha de devolución
  notifyReturnDate() {
    // Lógica para notificar la fecha de devolución
  }


  //metodo para notofocar un retraso en la devolucion
  notifyDelay() {
    // Lógica para notificar el retraso en la devolución
  }

  renew() {
    this.lend_nRenovations++;
    // Actualizar la fecha de retorno en función de la renovación (si es necesario)
  }

  // Setters y getters para atributos propios de Lending
  setLend_id(lend_id) {
    this.lend_id = lend_id;
  }

  getLend_id() {
    return this.lend_id;
  }

  setLend_startDate(lend_startDate) {
    this.lend_startDate = lend_startDate;
  }

  getLend_startDate() {
    return this.lend_startDate;
  }

  setLend_returnDate(lend_returnDate) {
    this.lend_returnDate = lend_returnDate;
  }

  getLend_returnDate() {
    return this.lend_returnDate;
  }

  setLend_state(lend_state) {
    this.lend_state = lend_state;
  }

  getLend_state() {
    return this.lend_state;
  }

  setLend_nRenovations(lend_nRenovations) {
    this.lend_nRenovations = lend_nRenovations;
  }

  getLend_nRenovations() {
    return this.lend_nRenovations;
  }

  // Setters y getters para relaciones con Book y Student
  setBook(book) {
    this.book = book;
  }

  getBook() {
    return this.book;
  }

  setStudent(student) {
    this.student = student;
  }

  getStudent() {
    return this.student;
  }
}

export default Lending;
