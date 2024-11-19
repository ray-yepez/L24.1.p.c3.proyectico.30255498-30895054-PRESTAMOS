/*Se desea llevar un control de los préstamos que 
realiza una oficina. Se tiene por cada préstamo: cliente 
del cliente, código del préstamo, monto y cantidad de 
meses. Se requiere de un programa que permita el 
registro de esta información, conociendo al principio de 
la ejecución el monto disponible para préstamos y el 
porcentaje de comisión mensual que se cobrará. */

import Cl_oficina from "./Cl_oficina.js";
import Cl_prestamo from "./Cl_prestamo.js";
import Dt_oficina from "./Dt_oficina.js";
import Dt_prestamos from "./Dt_prestamos.js";

const oficina = new Cl_oficina(
  Number(Dt_oficina.prestamoCaja),
  Dt_oficina.porcComisionMensual
);

Dt_prestamos.forEach((prestamo) =>
  oficina.agregarPrestamo(
    new Cl_prestamo(
      prestamo.cliente,
      prestamo.codigo,
      prestamo.prestamo,
      prestamo.meses
    )
  )
);


let agregarPrestamo = (oficina) => {
  let cliente = prompt("Ingrese el nombre del cliente:");
  let codigo = prompt("Ingrese el codigo del prestamo:");
  let prestamo = Number(prompt("Ingrese el monto del prestamo:"));
  if (prestamo > oficina.prestamoCaja) {
    alert("No hay fondos disponibles");
  } else {
    let meses = Number(prompt("Ingrese la cantidad de meses del prestamo:"));
    oficina.agregarPrestamo(new Cl_prestamo(cliente, codigo, prestamo, meses));
    oficina.prestamoCaja -= prestamo;
    alert("Ha sido agregado con éxito.");
  }
};

let eliminarPrestamo = (oficina) => {
  let codigo = prompt("Ingrese el codigo del préstamo a eliminar:");
  if (oficina.eliminarPrestamo(codigo))
    alert(`Se eliminó el prestamo ${codigo}`);
  else alert(`No existe el prestamo ${codigo}`);
};

let listarPrestamo = (oficina, salida) => {
  salida.innerHTML = `<table>
    <tr>
    <th>Cliente</th>
    <th>Codigo</th>
    <th>Prestamo</th>
    <th>Meses</th>
    </tr>
    <tbody id="datos">
    </tbody>
    </table>`;
  oficina.prestamos.forEach((prestamo) => {
    document.getElementById("datos").innerHTML += `
    <tr>
    <td>${prestamo.cliente}</td>
    <td>${prestamo.codigo}</td>
    <td>${prestamo.prestamo}</td>
    <td>${prestamo.meses}</td>
    </tr>`
    ;
  });
};

let montoFinal = (oficina, salida) => {
  salida.innerHTML = `<p>El monto final es: ${oficina.prestamoCaja}`;
};

let clientes2Meses = (oficina, salida) => {
  salida.innerHTML = `Los clientes que solicitaron un prestamo de 2 meses son:
   ${oficina.clientesPrestamo2Meses()} `;
};

let prestamoMinimo = (oficina, salida) => {
  salida.innerHTML = `Los clientes que solicitaron un prestamo mínimo son:
   ${oficina.clientesPrestamoMinimo()} `;
};

let salida1 = document.getElementById("salida1"),
  salida2 = document.getElementById("salida2"),
  opciones = document.getElementById("opciones");
salida1.innerHTML = `<br>Seleccione una opción:
    <br>(1) Agregar artículo
    <br>(2) Listar artículos
    <br>(3) Eliminar artículo
    <br>(4) Mostrar monto final disponible
    <br>(5) Mostrar clientes con 2 meses de prestamo
    <br>(6) Mostrar clientes con el prestamo mínimo
    `;

opciones.onclick = () => {
  let opcion = +prompt("Seleccione su opción:");
  switch (opcion) {
    case 1:
      agregarPrestamo(oficina);
      break;
    case 2:
      listarPrestamo(oficina, salida2);
      break;
    case 3:
      eliminarPrestamo(oficina);
      break;
    case 4:
      montoFinal(oficina, salida2);
      break;
    case 5:
      clientes2Meses(oficina, salida2);
      break;
    case 6:
      prestamoMinimo(oficina, salida2);
      break;
    default:
      alert("Seleccione una de las opciones disponibles");
      break;
  }
};
