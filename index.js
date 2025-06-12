import {argv} from "process";
import axios from "axios";
import { get } from "http";

import { getProducts } from './Productos/get.js'
import { postProducts } from './Productos/post.js'
import { deleteProducts } from './Productos/delete.js'

const [, , metodo, recurso, ...args] = argv;

async function main() {
  if (metodo === "GET" && recurso && recurso.startsWith("products/")) {
    console.log(getProducts(recurso));
  } else if (metodo === "GET") {
    console.log(getProducts());
  } else if (metodo === "POST") {
    console.log(postProducts(args[0], args[1], args[2]));  //en esta linea recibi ayuda externa ya que no podia completarla
  } else if (metodo === "DELETE") {
    console.log(deleteProducts(recurso));
  } else {
    console.error("Error, debe escribir una de las formas válidas: GET, POST, DELETE en mayúscula.");
  }
}

main();