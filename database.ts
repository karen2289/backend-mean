import { connect } from "mongoose";

//Conectamos con la BBDD
export const startConnection = async () => {
  try {
    //"mevn-database" podemos poner el nombre que se quiera
    const db = await connect("mongodb://localhost/mevn-database");
    console.log(db.connection.name);
  } catch (error) {
    console.log(error);
  }
};
