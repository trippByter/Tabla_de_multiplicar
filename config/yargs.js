const argv = require("yargs")
  .option("b",{
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Multiplicador"
  })
  .option("L",{
    alias: "limit",
    type: "number",
    default: 5,
    describe: "Multiplicando"
  })
  .option("l",{
    alias: "list",
    type: "boolean",
    default: false,
    describe: "Muestra las multiplicaciones en consola."
  })
  .check((argv, options) =>{
    if(isNaN(argv.b)){
      throw "La base debe ser un número";
    }
    return true;
  })
  .argv;

module.exports = argv;
