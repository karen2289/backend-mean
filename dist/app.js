"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//routes va asumir que dentro hay un archivo index
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
//middleware
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
//Si el frontend nos envia un json nuestro backend va a poder leerlo gracias a esta funcion
app.use(express_1.default.json());
app.use('/api', routes_1.default);
exports.default = app;
