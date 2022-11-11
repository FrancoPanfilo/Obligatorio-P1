//Sebastian Garcia 281637 y Alfonso Lopez 293449
class Presentacion {
  constructor(empresa, titulo, descripcion, tema, dia, duracion) {
    this.empresa = empresa;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.tema = tema;
    this.dia = dia;
    this.duracion = duracion;
  }
}

class Empresa {
  constructor(nombre, direccion, telefono, origen) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.origen = origen;
  }
  toString() {}
}
class Sistema {
  constructor() {
    this.listaEmpresa = [];
    this.listaPresentaciones = [];
  }
  empresasMaxPresentacion() {
    let listaFinal = [];
    let maximo = 0;
    for (let empresa of this.listaEmpresa) {
      let nuevaCantidad = 0;
      for (let oferta of this.listaEmpresa) {
        if (Empresa.nombre == empresa) {
          //INCOMPLETO, CAMBIAR NOMBRES
          nuevaCantidad++;
          if (nuevaCantidad > maximo) {
            maximo = nuevaCantidad;
            listaFinal = [empresa];
          } else {
            if (sumaOfer == maximo) {
              listaFinal.push(empresa);
            }
          }
          console.log(maximo);
        }
      }
    }
    return listaFinal;
  }
  mostarENLista(empresa, sistema) {
    let noEstaEnLista = true;
    for (let i = 0; i < sistema.listaEmpresa.length; i++) {
      if (sistema.listaEmpresa[i].nombre == empresa.nombre) {
        noEstaEnLista = false;
      }
    }
    if (empresa.nombre == "" && noEstaEnLista) {
      sistema.listaEmpresa.push(empresa);
    }
  }
}
