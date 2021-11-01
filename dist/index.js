"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Este es el archivo que arranca todo
const app_1 = __importDefault(require("./app"));
const database_1 = require("./database");
//Primero inicia la coneccion
(0, database_1.startConnection)();
//Después inicia el servidor
app_1.default.listen(3000);
console.log('server en el puerto 3000');
