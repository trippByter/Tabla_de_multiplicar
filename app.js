// Tablas de multiplicar
const {crearArchivo} = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

crearArchivo(argv.b, argv.L, argv.l)
  .then(msg => console.log(msg))
  .catch((err) => console.log(err));
