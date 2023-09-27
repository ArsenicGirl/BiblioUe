const url ='http://localhost:3000/api/'

//Crear una clase
class Libro{
    //constructor y atributos
    constructor(titulo, autor, categoria, fecha, desc){
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.fecha = fecha;
        this.desc = desc;
    }
    //aquí irían los metodos si decidiera ponerlos
    async save() {
        
        await fetch(url+'book')
                    .then(response => response.json())
                    .then(data => {
                        return data
                    })
                    .catch(error => console.log(error))
    }
}

class Biblioteca{
    //metodos

    //metodo pára añadir libro
    agregarLibro(libro){
       const bookList = document.getElementById("books-list");
       const element = document.createElement("div");
       element.innerHTML = `

            <div class="box">
            <strong>Titulo</strong>: ${libro.titulo}
            <strong>Autor</strong>: ${libro.autor}
            <strong>Categoria</strong>: ${libro.categoria}
            <strong>Fecha</strong>: ${libro.fecha}
            <strong>Desc</strong>: ${libro.desc}
            <a href="#" class="button is-danger is-light" name="eliminar">Delete</a>
            </div>
            <br>
       `;
       bookList.appendChild(element);
       //this.cleanForm();
    }

    //metodo para limpiar el formulario una vez se registró el libro
    cleanForm(){
        document.getElementById("addBook_form").reset();
    }

    //metodo para eliminar un objeto de libro creado
    eliminarLibro(element){
        if(element.name === "eliminar");
            element.parentElement.parentElement.remove();
            this.notificacion("El libro ha sido borrado satisfactoriamente", "danger");
    }

    //metodo para mostrar un mensaje una vez que se elimine un libro agregado
   notificacion(mensaje, estilo){
    const div = document.createElement("div");
        div.className = `notification is-${estilo}`;
        div.appendChild(document.createTextNode(mensaje));

        //mostrar
        const container = document.querySelector(".container");
        const registerBooks = document.querySelector("#register-books");
        container.insertBefore(div, registerBooks);//esto es para que la alerta se ponga sobre el contenedor pero antes del formulario y las repsuestas

        setTimeout(() => {
            div.remove();
        }, 3000); // El mensaje desaparecerá después de 3 segundos
    }
}

//DOM Events (eventos del HTML)

//Capturar los datos del formulario
document.getElementById("addBook_form").addEventListener("submit", function(e){
    e.preventDefault();

const titulo = document.getElementById("titulo").value;
const autor = document.getElementById("autor").value;
const categoria = document.getElementById("categoria").value;
const fecha = document.getElementById("fecha").value;
const desc = document.getElementById("desc").value;

//console.log(document.getElementById("titulo").value)
console.log(titulo, autor, categoria, fecha, desc);

const libro = new Libro (titulo, autor, categoria, fecha, desc);

const biblioteca = new Biblioteca();
if(titulo === "" || autor === "" || fecha === "" || desc === ""){
    return biblioteca.notificacion("Tiene que llenar todos los campos", "danger");
}
biblioteca.agregarLibro(libro);
biblioteca.cleanForm();
biblioteca.notificacion("El libro ha sido agregado", "success");


})
//es para realizar el evento de borrar un libro cuando se haga el evento de click en delete
document.getElementById("books-list").addEventListener("click", function(e){
    const biblioteca = new Biblioteca();
    biblioteca.eliminarLibro(e.target);
})

/*
//Crear una clase
    class Libro{

        //atributos
        constructor(titulo, autor, categoria, fecha, desc){
            this.titulo = titulo;
            this.autor = autor;
            this.categoria = categoria;
            this.fecha = fecha;
            this.desc = desc;
        }
        //aquí irían los metodos si decidiera ponerlos

    }

    class UI{
        //metodos

        //metodo pára añadir libro
        añadirLibro(libro){
           const bookList = document.getElementById("books-list");
           const element = document.createElement("div");
           element.innerHTML = `

                <div class="box">
                <strong>Titulo</strong>: ${libro.titulo}
                <strong>Autor</strong>: ${libro.autor}
                <strong>Categoria</strong>: ${libro.categoria}
                <strong>Fecha</strong>: ${libro.fecha}
                <strong>Desc</strong>: ${libro.desc}
                <a href="#" class="button is-danger is-light" name="eliminar">Delete</a>
                </div>
                <br>
           `;
           bookList.appendChild(element);
           //this.cleanForm();
        }

        //metodo para limpiar el formulario una vez se registró el libro
        cleanForm(){
            document.getElementById("addBook_form").reset();
        }

        //metodo para eliminar un objeto de libro creado
        eliminarLibro(element){
            if(element.name === "eliminar");
                element.parentElement.parentElement.remove();
                this.notificacion("El producto ha sido borrado satisfactoriamente", "danger");
        }

        //metodo para mostrar un mensaje una vez que se elimine un libro agregado
       notificacion(mensaje, estilo){
        const div = document.createElement("div");
            div.className = `notification is-${estilo}`;
            div.appendChild(document.createTextNode(mensaje));

            //mostrar
            const container = document.querySelector(".container");
            const registerBooks = document.querySelector("#register-books");
            container.insertBefore(div, registerBooks);//esto es para que la alerta se ponga sobre el contenedor pero antes del formulario y las repsuestas

            setTimeout(() => {
                div.remove();
            }, 3000); // El mensaje desaparecerá después de 3 segundos
        }
    }

    //DOM Events (eventos del HTML)

    //Capturar los datos del formulario
    document.getElementById("addBook_form").addEventListener("submit", function(e){
        e.preventDefault();
    
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const categoria = document.getElementById("categoria").value;
    const fecha = document.getElementById("fecha").value;
    const desc = document.getElementById("desc").value;

    //console.log(document.getElementById("titulo").value)
    console.log(titulo, autor, categoria, fecha, desc);

    const libro = new Libro (titulo, autor, categoria, fecha, desc);
    
    const ui = new UI();
    if(titulo === "" || autor === "" || fecha === "" || desc === ""){
        return ui.notificacion("Tiene que llenar todos los campos", "danger");
    }
    ui.añadirLibro(libro);
    ui.cleanForm();
    ui.notificacion("El libro ha sido agregado", "success");
    

    })
    //es para realizar el evento de borrar un libro cuando se haga el evento de click en delete
    document.getElementById("books-list").addEventListener("click", function(e){
        const ui = new UI();
        ui.eliminarLibro(e.target);
    })
    */