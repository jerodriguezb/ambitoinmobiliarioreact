const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

let propiedadSchema = new Schema({
  CodigoPropiedad: {
    type: String,
    required: [true, "El codigo es necesario"],
  },
  Titulo: {
    type: String,
  },
  EstadoPropiedad: {
    type: String,
  },
  TipoPropiedad: {
    type: String,
  },
  DireccionFisica: {
    type: String,
  },
  Descripcion: {
    type: String,
  },
  Barrio: {
    type: String,
  },
  Lugar: {
    type: String,
  },
  Valor: {
    type: String,
  },
  SuperficieTotal: {
    type: String,
  },
  SuperficieComun: {
    type: String,
  },
  SuperficiePropia: {
    type: String,
  },
  SuperficieCubierta: {
    type: String,
  },
  SuperficieSemiCubierta: {
    type: String,
  },
  Ambientes: {
    type: String,
  },
  Dormitorio: {
    type: String,
  },
  Baño: {
    type: String,
  },
  Cocina: {
    type: Boolean,
    default: false,
  },
  Comedor: {
    type: Boolean,
    default: false,
  },
  CocinaComedor: {
    type: Boolean,
    default: false,
  },
  Placard: {
    type: Boolean,
    default: false,
  },
  ComedorDiario: {
    type: Boolean,
    default: false,
  },
  Dependencia: {
    type: Boolean,
    default: false,
  },
  BañoServicio: {
    type: Boolean,
    default: false,
  },
  Lavadero: {
    type: Boolean,
    default: false,
  },
  Living: {
    type: Boolean,
    default: false,
  },
  LivingComedor: {
    type: Boolean,
    default: false,
  },
  Escritorio: {
    type: Boolean,
    default: false,
  },
  Toillette: {
    type: Boolean,
    default: false,
  },
  Balcon: {
    type: Boolean,
    default: false,
  },
  Baulera: {
    type: Boolean,
    default: false,
  },
  Jardin: {
    type: Boolean,
    default: false,
  },
  SUM: {
    type: Boolean,
    default: false,
  },
  Solarium: {
    type: Boolean,
    default: false,
  },
  Patio: {
    type: Boolean,
    default: false,
  },
  Quincho: {
    type: Boolean,
    default: false,
  },
  Pileta: {
    type: Boolean,
    default: false,
  },
  Galeria: {
    type: Boolean,
    default: false,
  },
  Asador: {
    type: Boolean,
    default: false,
  },
  Cochera: {
    type: Boolean,
    default: false,
  },
  CocheraCubierta: {
    type: Boolean,
    default: false,
  },
  Suite: {
    type: Boolean,
    default: false,
  },
  SalaEstarPlayroom: {
    type: Boolean,
    default: false,
  },
  Internet: {
    type: Boolean,
    default: false,
  },
  Electricidad: {
    type: Boolean,
    default: false,
  },
  Gas: {
    type: Boolean,
    default: false,
  },
  Agua: {
    type: Boolean,
    default: false,
  },
  Cloacas: {
    type: Boolean,
    default: false,
  },
  Cable: {
    type: Boolean,
    default: false,
  },
  Seguridad: {
    type: Boolean,
    default: false,
  },
  Expensas: {
    type: Boolean,
    default: false,
  },
  InformacionAdicional: {
    type: String,
  },
  imag1: {
    type: String,
  },
  imag2: {
    type: String,
  },
  imag3: {
    type: String,
  },
  imag4: {
    type: String,
  },
  imag5: {
    type: String,
  },
  imag6: {
    type: String,
  },
  imag7: {
    type: String,
  },
  imag8: {
    type: String,
  },
  imag9: {
    type: String,
  },
  imag10: {
    type: String,
  },
  activo: {
    type: Boolean,
    default: true,
  },
  mostrar_portada: {
    type: Boolean,
    default: true,
  },
  Latitud: {
    type: Number,
    default: -26.8301,
  },
  Longitud: {
    type: Number,
    default: -65.20411,
  },
  //   usuario: {
  //     type: Schema.Types.ObjectId,
  //     ref: "Usuario",
  //   },
});

propiedadSchema.plugin(uniqueValidator, {
  message: "{PATH} debe ser único",
});

module.exports = mongoose.model("Propiedad", propiedadSchema);
