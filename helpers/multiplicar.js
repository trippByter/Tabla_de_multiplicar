const fs = require("fs");
const color = require("colors");

const crearArchivo = async (base, limit, list) => {
  try{

    let salida = "";
    let consola = "";

    for(let i = 0; i <= limit; i++){
      salida += `${base} x ${i} = ${base * i}.\n`;
      consola += `${base} ${'x'.yellow} ${i} ${'='.blue} ${base * i}.\n`;
    };

    if(list){
    console.log("=====================".yellow);
    console.log("   Tabla del:".blue, color.cyan(base));
    console.log("=====================".yellow);

    console.log(consola);
    }
    // Los .writeFileSync se trabajan en try / catch
    fs.writeFileSync(`Tabla_del_${base}.txt`, salida);

    return `Tabla_del_${base}.txt`.rainbow + " ha sido creada".yellow;
  } catch(err){
    throw err;
  }
};

// Exportamos solo la funcion
module.exports = {
  crearArchivo
}
