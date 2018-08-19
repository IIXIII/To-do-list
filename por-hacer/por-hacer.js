let fs = require('fs')

let listadoPorHacer = [];
const name = './db/data.json'


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile(name, data, (err) => {});
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }
}

const obtnerListado = () => {
    cargarDB()
    return listadoPorHacer;
}

const crear = (descripcion) => {
    cargarDB()
    let porHacer = {
        descripcion,
        completado: false,
    }
    listadoPorHacer.push(porHacer)
    guardarDB()
    return porHacer
}

const actualizar = (descripcion, completado = true) => {
    cargarDB()
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB()
        return true
    }
    return false
}

const borrar = (descripcion) => {
    cargarDB()
    listadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)
    guardarDB()
    return true
}

module.exports = {
    crear,
    obtnerListado,
    actualizar,
    borrar
}