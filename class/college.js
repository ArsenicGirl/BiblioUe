class College {
    constructor(coll_id, coll_name, coll_logo) {
      this.coll_id = coll_id;
      this.coll_name = coll_name;
      this.coll_logo = coll_logo;
      this.estudiantes = []; // Array para almacenar estudiantes
    }
  
    agregarEstudiante(estudiante) {
      this.estudiantes.push(estudiante);
    }
  
    eliminarEstudiante(estudiante) {
      const index = this.estudiantes.indexOf(estudiante);
      if (index !== -1) {
        this.estudiantes.splice(index, 1);
      }
    }
  
    setNombre(coll_name) {
      this.coll_name = coll_name;
    }
  
    setLogo(coll_logo) {
      this.coll_logo = coll_logo;
    }
  
    getNombre() {
      return this.coll_name;
    }
  
    getLogo() {
      return this.coll_logo;
    }
  }
  
  export default College;
  