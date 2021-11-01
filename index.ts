//Este es el archivo que arranca todo
import app from "./app";
import { startConnection } from './database';

//Primero inicia la coneccion
startConnection();
//Después inicia el servidor
app.listen(3000)
console.log('server en el puerto 3000');