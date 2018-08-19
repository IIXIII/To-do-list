const { argv } = require('./config/yargs')
const { crear, obtnerListado, actualizar, borrar } = require('./por-hacer/por-hacer')
const colors = require('colors')

console.log(argv)
let command = argv._[0]
let act;

switch (command) {
    case "crear":
        let tarea = crear(argv.descripcion)
        console.log("Creando cosa", tarea)
        break;
    case "listar":
        console.log("Listando cosa");
        listado = obtnerListado()
        for (let tarea of listado) {
            console.log("======POR HACER=======".green);
            console.log(tarea.descripcion);
            console.log(`Estatus : ${tarea.completado}`);
            console.log("======POR HACER=======".green);
        }
        break;
    case "actualizar":
        act = actualizar(argv.descripcion, argv.completado)
        console.log("Actualizando cosa ", act);
        break;
    case 'borrar':
        act = borrar(argv.descripcion)
        console.log("Borrando cosa ", act);
        break;
    default:
        console.log("Nada que hacer");
        break;
}