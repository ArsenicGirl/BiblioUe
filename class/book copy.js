const { response } = require("express")

const url ='http://localhost:3000/api/book'
const contenedor = document.querySelector ('tbody')
let results = ''

const formArticulos = document.querySelector('form')  
const book_title = document.getElementById('titulo')
const book_author = document.getElementById('autor')
const book_category = document.getElementById('categoria')
const book_publishYear= document.getElementById('categoria')
const book_description = document.getElementById('descripcion')
let opcion = ''

//eliminar los datos del formularoi cuando se cree un registro
formArticulos.addEventListener('submit',()=>{
  opcion = cleanForm(document.getElementById("addBook_form").reset())

})

//funcion para mostrar los datos
const mostrar = (book) =>{
  book.forEach(books =>{
      results +=
                <tr>
                  <td>${book.book_id}</td>
                  <td>${book.book_title}</td>
                  <td>${book.book_author}</td>
                  <td>${book.book_category}</td>
                  <td>${book.book_publishYear}</td>
                  <td>${book.book_description}</td>
                  <td class= "text-center">
                    <a class="btn-edit button is-danger is-light">Editar</a><a class="btn-delete button is-success is-light">Eliminar</a>
                  </td>
                </tr>
  })
  contenedor.innerHTML = results
}
mostrar(data)
//meotdo para mostrar los datos (la url se definió arriba: 'http://localhost:3000/api/book )
/*fetch(url)
  .then(response => response.json())
  .then(data => )
  .catch(error => console.log(error))*/


  