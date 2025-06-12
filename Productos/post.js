import {argv} from "process";
import axios from "axios";
import { get } from "http";

//Esta funcion me costo demasiado. Muchas de las lineas fueron con ayuda externa debido a que no era capaz de completar
//sobre todo la linea 10

export async function postProducts(title, price, category) {
  console.log("Datos recibidos:", title, price, category);
  if (!title?.trim() || !price?.toString().trim()|| !category?.trim()) {
    console.error("Faltan datos. Debes ingresar título, precio y categoría.");
    return;
  }
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title,
        price: parseFloat(price),
        category
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log("Producto creado:", data);
  } catch (error) {
    console.error("Error al corroborar el producto a añadir:", error.message);
  }
}