import { productoServices } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const nuevoProducto = (name, price, imageUrl, id, section) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="producto">
            <img src="${imageUrl}" alt="img">
            <div class="producto__cuerpo">
              <h1 class="product-name"> ${name} </h1>
              <p class="precio">${formatPrice(price)}</p>
              <a class="ver-producto" href="../screens/producto.html?id=${id}">Ver Producto</a>
            </div>
        </div>   
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};

const productos = document.querySelector("[data-seccion-1]");

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
    listaProductos.forEach((elemento) => {
      
      if(elemento.section==="Google Sheets"){
        console.log(elemento.section);
        productos.appendChild(
          nuevoProducto(
            elemento.name,
            elemento.price,
            elemento.imageUrl,
            elemento.id
          )
        );
      }
      
    });
  } catch (error) {
    console.log(error);
  }
};

render();


const productos2 = document.querySelector("[data-seccion-2]");

const render2 = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
    listaProductos.forEach((elemento) => {
      
      if(elemento.section==="Microsoft Excel"){
        console.log(elemento.section);
        productos2.appendChild(
          nuevoProducto(
            elemento.name,
            elemento.price,
            elemento.imageUrl,
            elemento.id
          )
        );
      }
      
    });
  } catch (error) {
    console.log(error);
  }
};

render2();

const productos3 = document.querySelector("[data-seccion-3]");

const render3 = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
    listaProductos.forEach((elemento) => {
      
      if(elemento.section==="Photoshop"){
        console.log(elemento.section);
        productos3.appendChild(
          nuevoProducto(
            elemento.name,
            elemento.price,
            elemento.imageUrl,
            elemento.id
          )
        );
      }
      
    });
  } catch (error) {
    console.log(error);
  }
};

render3();
