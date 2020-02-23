import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// // // If you want your app to work offline and load faster, you can change
// // // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();

//JAVASCRIPT VANILLA
// let elemento = document.createElement("p");
// elemento.innerHTML = "Soy Lautaro";
// let contenedor = document.getElementById("root");
// contenedor.appendChild(elemento);

//CREANDO CON REACT DOM
// let elemento = <p>Hola soy Lautaro desde JSX</p>;
// let container = document.getElementById("root");
// ReactDOM.render(elemento, container);

// let jsx = React.createElement(
//   "h1",{}, "Hola mundo soy lautaro desde Create Element"
// );

// let nombre = "Wacho loco";
// let apellido = " Gil";
// let edad = 20;
// let calculo = edad => {
//   return 5 + 5 + edad;
// };
// let jsxMultiple = (
//   <div>
//     <h1>
//       Soy una variable con muchos elementos y mi nombre es
//       {nombre + apellido} y tengo {calculo(edad)} años de edad
//     </h1>
//     <h3>Hola jsx</h3>
//     <p>Easy peasy</p>
//   </div>
// );
// let container = document.getElementById("root");
// ReactDOM.render(jsxMultiple, container);
