//importar/tomar los datos desde la clase person en otro archivo
import Person from './person';

class Admin extends Person {
  constructor(admi_id, admi_firstName, admi_lastName, admi_email, admi_password, libr_id, role_id, firstName, lastName, email, password) {
    super(firstName, lastName, email, password); // Llamada al constructor de la clase padre (Person)
    this.admi_id = admi_id;
    this.admi_firstName = admi_firstName;
    this.admi_lastName = admi_lastName;
    this.admi_email = admi_email;
    this.admi_password = admi_password;
    this.libr_id = libr_id;
    this.role_id = role_id;
  }

  // Métodos setters y getters específicos de Admin
  setAdmiId(admi_id) {
    this.admi_id = admi_id;
  }

  getAdmiId() {
    return this.admi_id;
  }

  setAdmiFirstName(admi_firstName) {
    this.admi_firstName = admi_firstName;
  }

  getAdmiFirstName() {
    return this.admi_firstName;
  }

  setAdmiLastName(admi_lastName) {
    this.admi_lastName = admi_lastName;
  }

  getAdmiLastName() {
    return this.admi_lastName;
  }

  setAdmiEmail(admi_email) {
    this.admi_email = admi_email;
  }

  getAdmiEmail() {
    return this.admi_email;
  }

  setAdmiPassword(admi_password) {
    this.admi_password = admi_password;
  }

  getAdmiPassword() {
    return this.admi_password;
  }

  setLibrId(libr_id) {
    this.libr_id = libr_id;
  }

  getLibrId() {
    return this.libr_id;
  }

  setRoleId(role_id) {
    this.role_id = role_id;
  }

  getRoleId() {
    return this.role_id;
  }

  
//metodos propios del admin
  crearPrestamoManual() {
    // Lógica para crear préstamo manual
  }

  eliminarPrestamoManual() {
    // Lógica para eliminar préstamo manual
  }
}


export default Admin;


/*class Admin {
    constructor(admi_id, admi_firstName, admi_lastName, admi_email, admi_password, libr_id, role_id) {
      this.admi_id = admi_id;
      this.admi_firstName = admi_firstName;
      this.admi_lastName = admi_lastName;
      this.admi_email = admi_email;
      this.admi_password = admi_password;
      this.libr_id = libr_id;
      this.role_id = role_id;
    }
  
    // Setters
    setAdmiId(admi_id) {
      this.admi_id = admi_id;
    }
  
    setAdmiFirstName(admi_firstName) {
      this.admi_firstName = admi_firstName;
    }
  
    setAdmiLastName(admi_lastName) {
      this.admi_lastName = admi_lastName;
    }
  
    setAdmiEmail(admi_email) {
      this.admi_email = admi_email;
    }
  
    setAdmiPassword(admi_password) {
      this.admi_password = admi_password;
    }
  
    setLibrId(libr_id) {
      this.libr_id = libr_id;
    }
  
    setRoleId(role_id) {
      this.role_id = role_id;
    }
  
    // Getters
    getAdmiId() {
      return this.admi_id;
    }
  
    getAdmiFirstName() {
      return this.admi_firstName;
    }
  
    getAdmiLastName() {
      return this.admi_lastName;
    }
  
    getAdmiEmail() {
      return this.admi_email;
    }
  
    getAdmiPassword() {
      return this.admi_password;
    }
  
    getLibrId() {
      return this.libr_id;
    }
  
    getRoleId() {
      return this.role_id;
    }
  }*/
  