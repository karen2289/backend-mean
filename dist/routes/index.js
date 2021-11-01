"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Ruta de express
const express_1 = require("express");
//Importamos el modelo que nos permite interactuar con la BBDD
const tareas_1 = __importDefault(require("../models/tareas"));
const router = (0, express_1.Router)();
//RUTAS
//VEMOS LAS TAREAS
router.get("/tareas", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Importamos todas las tareas que existan en mongoDB
    //Consula a BBDD
    const tareas = yield tareas_1.default.find();
    //respuesta
    res.send(tareas);
}));
//CREAR TAREA
//Tenemos que ver lo que nos envia el cliente
router.post("/tareas", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    //Crea la tarea
    const tarea = new tareas_1.default({ title, description });
    //Guardar la tarea en la BBDD
    yield tarea.save();
    //respuesta
    //res.send("Creando una tareas!");
    res.json(tarea);
}));
//OBTENIENDO TAREA
router.get("/tareas/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tarea = yield tareas_1.default.findById(req.params.id);
        if (!tarea)
            return res.status(404).json({ message: "Tarea no encontrada" });
        res.send(tarea);
    }
    catch (error) {
        return res.status(500).send(error);
    }
}));
//ELIMINANDO UNA TAREA
router.delete("/tareas/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tarea = yield tareas_1.default.findByIdAndDelete(req.params.id);
        if (!tarea)
            return res.status(404).json({ message: "Tarea no encontrada" });
        return res.json(tarea);
    }
    catch (error) {
        return res.status(500).send(error);
    }
}));
//ACTUALIZANDO TAREA
router.put("/tareas/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const textoActualizado = yield tareas_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(textoActualizado);
}));
exports.default = router;
