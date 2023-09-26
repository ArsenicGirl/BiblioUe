// URL de la API
const apiUrl = 'URL_DE_TU_API';

/*// Datos de conexión a la base de datos (si es necesario)
const dbCredentials = {
  username: 'TU_USUARIO',
  password: 'TU_CONTRASEÑA'
};*/

// Configuración para la solicitud Fetch
const fetchOptions = {
  method: 'GET', // Método de la solicitud (GET, POST, etc.)
  headers: {
    'Content-Type': 'application/json',
    // Si necesitas autenticación, puedes incluir las credenciales en los headers
    // 'Authorization': `Basic ${btoa(`${dbCredentials.username}:${dbCredentials.password}`)}`
  }
};

// Función para hacer una solicitud a la base de datos
async function fetchData(endpoint) {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`, fetchOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al hacer la solicitud:', error);
    return null;
  }
}

// Exportar la función para su uso en otros archivos
export { fetchData };