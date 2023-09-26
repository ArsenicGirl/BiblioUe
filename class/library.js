class Library {
    constructor(libr_id, coll_id, id, diasAtencion, horaApertura, horaCierre) {
      this.libr_id = libr_id;
      this.coll_id = coll_id;
      this.id = id;
      this.diasAtencion = diasAtencion;
      this.horaApertura = horaApertura;
      this.horaCierre = horaCierre;
      this.administradores = []; // Array para almacenar administradores
      this.libros = []; // Array para almacenar libros
    }
  
    agregarLibro(libro) {
      this.libros.push(libro);
    }
  
    eliminarLibro(libro) {
      const index = this.libros.indexOf(libro);
      if (index !== -1) {
        this.libros.splice(index, 1);
      }
    }
  
    agregarAdministrador(admin) {
      this.administradores.push(admin);
    }
  
    eliminarAdministrador(admin) {
      const index = this.administradores.indexOf(admin);
      if (index !== -1) {
        this.administradores.splice(index, 1);
      }
    }
  
    setId(id) {
      this.id = id;
    }
  
    setDiasAtencion(diasAtencion) {
      this.diasAtencion = diasAtencion;
    }
  
    setHoraApertura(horaApertura) {
      this.horaApertura = horaApertura;
    }
  
    setHoraCierre(horaCierre) {
      this.horaCierre = horaCierre;
    }
  
    getId() {
      return this.id;
    }
  
    getDiasAtencion() {
      return this.diasAtencion;
    }
  
    getHoraApertura() {
      return this.horaApertura;
    }
  
    getHoraCierre() {
      return this.horaCierre;
    }
  }
  
  export default Library;
  