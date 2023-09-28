//Importar la librería
const express = require("express");
const mysql = require("mysql");
//const mysqlConexion = require ("./conexion");
const cors = require ('cors');
const { json } = require ('express');
const session = require('express-session');
const database = require("mime-db");

//crear el objeto para llamar los metodos de express
const app = express();

//setar urlencoded para capturar los datos del formulario del login 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//app.use(express.static('styles'));
app.use(cors());

const dotenv = require('dotenv');
dotenv.config({path: './env/.env'});

//estableceer parametros de concexion ala base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'biblioue'
})

//configurar el html para usar el ejs
//app.set("view engine", "ejs");

//conexion a la base de datos
connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Conexion existosa");
    }
})

//todo lo que sea recursos, son mis archivos de estilo en public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

//invocar al bcryptjs
const bcryptjs = require('bcryptjs');

//variables de session
app.use(session({
    secret:'secret',
    resave: true,
    saveUnitialized: true
}))



//links a las paginas para usar en los botones y linkearlas entre sí

//**INDEX**/
app.get("/", function(req,res){
    res.render(__dirname + '/views/index.ejs')
})

//**USERS**
app.get("/library", function(req, res) {
    res.render(__dirname + '/views/user/libraryCategory.ejs'); 
});

app.get("/studentProfile", function(req,res){
    res.render(__dirname + '/views/user/userProfile.ejs')
})
app.get("/libro1", function(req,res){
    res.render(__dirname + '/views/user/libro1.ejs')
})
app.get("/libro2", function(req,res){
    res.render(__dirname + '/views/user/libro2.ejs')
})
app.get("/libro3", function(req,res){
    res.render(__dirname + '/views/user/libro3.ejs')
})

//**ADMIN** 
app.get("/addBook", function(req,res){
    res.render(__dirname + '/views/admin/add.ejs')
})
app.get("/indexAdmin", function(req,res){
    res.render(__dirname + '/views/admin/indexAdmin.ejs')
})
app.get("/studentList", function(req,res){
    res.render(__dirname + '/views/admin/studentsList.ejs')
})
app.get("/adminProfile", function(req,res){
    res.render(__dirname + '/views/admin/adminProfile.ejs')
})




//Motor de vistas (para que se vean los estilos y así
app.set("view engine", "ejs");


//autenticacion login

app.post('/auth', async (req, res) => {
    const loginEmail = req.body.stud_email;
    const loginPassword = req.body.stud_password;

    if (loginEmail && loginPassword) {
        connection.query('SELECT * FROM student WHERE stud_email = ?', [loginEmail], async (error, results) => {
            if (error) {
                console.error('Error en la consulta SQL:', error);
                res.status(500).json({ message: 'Error interno del servidor' + results});
            } else if (results.length === 0) {  
                res.status(401).json({ message: 'El Correo electrónico no ha sido registrado' });
            } else {
                if(results[0].stud_email == loginEmail && results[0].stud_password == loginPassword){
                    res.status(200).json({ message: 'confirmacion :D'});
                }
                else{
                    res.status(500)//.json({ message: 'Contraseña o Correo incorrecto' });
                }
                // Utiliza bcryptjs.compare para comparar la contraseña proporcionada con el hash almacenado
            /*    bcryptjs.compare(loginPassword, storedPassword, async (err, passwordMatch) => {
                    if (err) {
                        console.error('Error al comparar contraseñas:', err);
                        res.status(500).json({ message: 'Error interno del servidor' });
                    } else if (passwordMatch) {
                        // Las contraseñas coinciden, el inicio de sesión es exitoso
                        res.status(200).json({ message: 'Inicio de sesión exitoso' });
                    } else {
                        res.status(401).json({ message: 'Contraseña incorrecta' });
                    }
                });*/
            }
        });
    } else {
        res.status(400).json({ message: 'Datos de inicio de sesión incompletos' });
    }
});



//consultas
/********TABLA STUDENT***********/
// Ruta para obtener y mostrar datos de una tabla
app.get("/api/student", function(req, res) {
 // Consulta SQL para seleccionar/mostrar TODOS los registros de una tabla (por ejemplo, 'mi_tabla')
    connection.query('SELECT * FROM student', function(error, results) {
     /*   if (!datos.stud_firstName || !datos.stud_lastName || !datos.stud_email || !datos.stud_password || !datos.stud_carnet) {
            return res.status(400).send("Todos los campos son obligatorios.");
          }*/
        if (error) {
        throw error;
      }else{
        res.send(results);
      }
   
    });
  });

// Consulta SQL para mostrar SOLO un registro de la tabla 
app.get("/api/student/", function(req, res) {
       connection.query('SELECT * FROM student WHERE stud_id = ?', [req.params.stud_id], function(error, results) {
        if (error) {
           throw error;
        }else{
           res.send(results);
           //res.send(results[0].stud_firstName);
        }
      
    });
});
   
//crear un registro
app.post("/api/student", function(req, res) {
    let data = {stud_firstName:req.body.stud_firstName, stud_lastName:req.body.stud_lastName, stud_email:req.body.stud_email, stud_password:req.body.stud_password, stud_carnet:req.body.stud_carnet}
    let sql = "INSERT INTO student SET ?";
    connection.query(sql, data, function(error, results){
        if (error) {
            throw error;
         }else{
            console.log(results);
         }
    });
});

//editar un registro
app.put("/api/student/:stud_id", function(req, res) {
    const stud_id = req.params.stud_id;
    let stud_firstName = req.body.stud_firstName;
    let stud_lastName = req.body.stud_lastName;
    let stud_email = req.body.stud_email;
    let stud_password = req.body.stud_password;
    let stud_carnet = req.body.stud_carnet;
    let sql = "UPDATE student SET stud_firstName = ?, stud_lastName = ?, stud_email = ?, stud_password = ?, stud_carnet  = ? WHERE stud_id = ?";
    connection.query(sql, [stud_firstName, stud_lastName, stud_email, stud_password, stud_carnet, stud_id], function(error, results){
        if (error) {
            throw error;
         }else{
            res.send(results);
         }
    });
});

// Consulta SQL para mostrar SOLO un registro de la tabla 


//eliminar registro
app.delete("/api/student/:stud_id", function(req,res) {
    connection.query('DELETE FROM student WHERE stud_id = ?', [req.params.stud_id], function(error, results){
        if (error) {
            throw error;
         }else{
            res.send(results);
         }
    });
});


/********TABLA BOOK ******/
app.get("/api/book", function(req, res) {
    // Consulta SQL para seleccionar/mostrar TODOS los registros de una tabla (por ejemplo, 'mi_tabla')
       connection.query('SELECT * FROM book', function(error, results) {
         if (error) {
           throw error;
         }else{
           res.send(results);
         }
      
       });
     });
   
   // Consulta SQL para mostrar SOLO un registro de la tabla 
   app.get("/api/book/:book_id", function(req, res) {
          connection.query('SELECT * FROM book WHERE book_id = ?', [req.params.book_id], function(error, results) {
           if (error) {
              throw error;
           }else{
              res.send(results);
              //res.send(results[0].book_title);
           }
         
       });
   });
      
   //crear un registro
   app.post("/api/book", function(req, res) {
        
       let data = {book_title:req.body.book_title, book_description:req.body.book_description, book_author:req.body.book_author, book_publishYear:req.body.book_publishYear, cate_id:req.body.cate_id}
       
       let sql = "INSERT INTO book SET ?";
       connection.query(sql, data, function(error, results){
           if (error) {
                
               throw error;
            }else{
               res.send(results);
            }
       });
   });
   
   //editar un registro
   app.put("/api/book/:book_id", function(req, res) {
       const book_id = req.params.book_id;
       let book_title = req.body.book_title;
       let book_description = req.body.book_description;
       let book_author = req.body.book_author;
       let book_publishYear = req.body.book_publishYear;
       let book_frontPage = req.body.book_frontPag;
       let cate_id = req.body.cate_id;
       let sql = "UPDATE book SET book_title = ?, book_description = ?, book_author = ?, book_publishYear = ?, book_frontPage = ?, cate_id = ? WHERE book_id = ?";
       connection.query(sql, [book_title, book_description, book_author, book_publishYear, book_frontPage, cate_id, book_id], function(error, results){
           if (error) {
               throw error;
            }else{
               res.send(results);
            }
       });
   });
   
   // Consulta SQL para mostrar SOLO un registro de la tabla 
   
   
   //eliminar registro
   app.delete("/api/book/:book_id", function(req,res) {
       connection.query('DELETE FROM book WHERE book_id = ?', [req.params.book_id], function(error, results){
           if (error) {
               throw error;
            }else{
               res.send(results);
            }
       });
   });

//configurar el puerto usado para el servidor local
app.listen(3000,function() {
    console.log("Servidor creado http://localhost:3000");
})

//Recordar, siempre que se quiera ver, despues de hacer cambios
//hay que ecribir en el terminar "node index.js" y luego
//copiar la ruta del localhost en el buscador google