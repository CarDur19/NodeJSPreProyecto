import {argv} from "process";
import axios from "axios";
import { get } from "http";

export async function deleteProducts(recurso) {
  if (!recurso || !recurso.startsWith("products/")) {
    console.error("Debes especificar qué producto eliminar. Ej: products/1");
    return;
  }
  try {
    const url = "https://fakestoreapi.com/" + recurso;
    const response = await axios.delete(url);
    console.log("Producto eliminado:", response.data);
    const all = await axios.get("https://fakestoreapi.com/products");
    const idEliminado = recurso.split("/")[1];
    const restantes = all.data.filter(
      (producto) => producto.id.toString() !== idEliminado
    );
    console.log("Productos restantes:");
    console.log(restantes);
  } catch (error) {
    console.error("Error al borrar el producto:", error.message);
  }
}
