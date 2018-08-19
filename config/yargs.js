const descripcion = {
    demand: true,
    alias: 'd'
}

const optCrear = {
    descripcion,
}

const optActualizar = {
    descripcion,
    completada: {
        alias: 'c',
        default: true,
    }
}

const optBorrar = {
    descripcion
}

const argv = require('yargs')
    .command('crear', "Crea una nueva tarea", optCrear)
    .command('actualizar', "Actualiza una tarea", optActualizar)
    .command('borrar', "Borra una tarea", optBorrar)
    .help()
    .argv

module.exports = {
    argv
}