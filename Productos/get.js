import {argv} from "process";
import axios from "axios";
import { get } from "http";

export async function getProducts(){
    try{
         const response = await fetch("https://fakestoreapi.com/" + argv[3]);
         const data = await response.json();
         console.log(data);
     } catch(error){
         console.error(error);
     }
 } if (argv[2] === "GET" && argv[3]=== null){
     try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data); 
    } catch (error){
    console.error(error);
}
 }
