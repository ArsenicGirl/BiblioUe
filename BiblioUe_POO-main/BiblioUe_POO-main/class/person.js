//Clase
class Person {
  //Constructor y atributos
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }


  //metodos setters y getters
  setFirstName(firstName) {
    this.firstName = firstName;
  }

  getFirstfirstName() {
    return this.firstName;
  }
  setLastName(lastName) {
    this.lastName = lastName;
  }

  getLastName() {
    return this.lastName;
  }

  setEmail(email) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  setPassword(password) {
    this.email = password;
  }

  getPassword() {
    return this.password;
  }
}

//para exportar datos y hacer la herencia
export default Person;