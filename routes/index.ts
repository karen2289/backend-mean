//Ruta de express
import { Router } from "express";
//Importamos el modelo que nos permite interactuar con la BBDD
import Tareas from "../models/tareas";

const router = Router();

//RUTAS
//VEMOS LAS TAREAS
router.get("/tareas", async (req, res) => {
  //Importamos todas las tareas que existan en mongoDB
  //Consula a BBDD
  const tareas = await Tareas.find();
  //respuesta
  res.send(tareas);
});

//CREAR TAREA
//Tenemos que ver lo que nos envia el cliente
router.post("/tareas", async (req, res) => {
  const { title, description } = req.body;
  //Crea la tarea
  const tarea = new Tareas({ title, description });
  //Guardar la tarea en la BBDD
  await tarea.save();
  //respuesta
  //res.send("Creando una tareas!");
  res.json(tarea);
});

//OBTENIENDO TAREA
router.get("/tareas/:id", async (req, res) => {
  try {
    const tarea = await Tareas.findById(req.params.id);

    if (!tarea) return res.status(404).json({ message: "Tarea no encontrada" });

    res.send(tarea);
  } catch (error) {
    return res.status(500).send(error);
  }
});

//ELIMINANDO UNA TAREA
router.delete("/tareas/:id", async (req, res) => {
  try {
    const tarea = await Tareas.findByIdAndDelete(req.params.id);

    if (!tarea) return res.status(404).json({ message: "Tarea no encontrada" });

    return res.json(tarea);
  } catch (error) {
    return res.status(500).send(error);
  }
});

//ACTUALIZANDO TAREA
router.put("/tareas/:id", async (req, res) => {
  const textoActualizado = await Tareas.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
  });
  res.json(textoActualizado);
});

export default router;
