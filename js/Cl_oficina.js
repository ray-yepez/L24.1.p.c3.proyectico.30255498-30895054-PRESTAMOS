export default class Cl_oficina {
  constructor(prestamoCaja, porcComisionMensual) {
    this.prestamoCaja = prestamoCaja;
    this.porcComisionMensual = porcComisionMensual;
    this.prestamos = [];
  }
  set prestamoCaja(pC) {
    this._prestamoCaja = pC;
  }
  set porcComisionMensual(pM) {
    this._porcComisionMensual = pM;
  }
  get prestamoCaja() {
    return this._prestamoCaja;
  }
  get porcComisionMensual() {
    return this._porcComisionMensual;
  }

  agregarPrestamo(prestamo) {
    this.prestamos.push(prestamo);
  }
  eliminarPrestamo(codigo) {
    let codigoPrestamo = -1;
    for (let i = 0; i < this.prestamos.length; i++)
      if (this.prestamos[i].codigo == codigo) codigoPrestamo = i;
    if (codigoPrestamo !== -1) this.prestamos.splice(codigoPrestamo, 1);
    return codigoPrestamo !== -1;
  }
  clientesPrestamo2Meses() {
    let clientes2Meses = [];
    for (let i = 0; i < this.prestamos.length; i++) {
      if (this.prestamos[i].meses == 2) {
        clientes2Meses.push(this.prestamos[i].cliente);
      }
    }
    return clientes2Meses;
  }
  clientesPrestamoMinimo() {
    let menorPrestamo = this.prestamos[0].prestamo;
    let clienteMinimo;
    for (let i = 0; i < this.prestamos.length; i++) {
      if (this.prestamos[i].prestamo < menorPrestamo) {
        menorPrestamo = this.prestamos[i].prestamo;
        clienteMinimo = this.prestamos[i].cliente;
      }
    }
    return clienteMinimo;
  }
}
