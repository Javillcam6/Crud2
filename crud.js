<<<<<<< HEAD
const actividadUI = document.querySelector('#actividad')
const descripcionUI = document.querySelector('#descripcion')
const correoUI = document.querySelector('#correo')
const servicioUI = document.querySelector('#servicio')
const botonEnviarUI = document.querySelector('#enviar')
const sectionMostrar = document.querySelector('#mostrar')
const botonActualizarUI = document.querySelector('#actualizar')

 

let referencia = ''

 

 

botonEnviarUI.addEventListener('click', addToDo)
botonActualizarUI.addEventListener('click', editar2)
document.addEventListener('DOMContentLoaded', mantener)
 

function addToDo(event){
    event.preventDefault()
    let datos = JSON.parse(localStorage.getItem('elements'))
 
    if(datos == null){
        datos = []
    }

    const objetoTemporal={
        actividad: actividadUI.value,
        descripcion: descripcionUI.value,
        servicio: servicioUI.value,
        correo: correoUI.value
    }

    datos.push(objetoTemporal)
    localStorage.setItem('elements', JSON.stringify(datos))

    imprimir()

}

 

function imprimir(){
    let datos = JSON.parse(localStorage.getItem('elements'));
    const crudContainer = document.getElementById('crud-cont');

    crudContainer.innerHTML = datos.map((dato, index) => {
        return `

        <div class='card'>
            <h4 class="infoCrud">${dato.actividad}</h4>
            <h4 class="infoCrud1">${dato.descripcion}</h4>
            <h4 class="infoCrud2">${dato.servicio}</h4>
            <h4 class="infoCrud3">${dato.correo}</h4>
            <div>
            <button class="botonEditar" onClick="editar(${index})">Editar</button>
            <button class="botonEliminar" onClick="borrar(${index})">Eliminar</button>
            </div>
            </div>

        `

    }).join()
}

function editar(index){

    let datos = JSON.parse(localStorage.getItem('elements'))
    actividadUI.value = datos[index].actividad
    descripcionUI.value = datos[index].descripcion
    servicioUI.value = datos[index].servicio
    correoUI.value = datos[index].correo

    botonActualizarUI.style.display = "block"
    botonEnviarUI.style.display = "none"

    referencia = index
}

 

function editar2(event){
    event.preventDefault()
    let datos = JSON.parse(localStorage.getItem('elements'))

    const objetoTemporal={
        actividad: actividadUI.value,
        descripcion: descripcionUI.value,
        servicio: servicioUI.value,
        correo: correoUI.value
    }
    
    datos.splice(referencia, 1, objetoTemporal)
    localStorage.setItem('elements', JSON.stringify(datos))

    imprimir(datos)

    descripcionUI.value = ""
    actividadUI.value = ""
    servicioUI.value = ""
    correoUI.value = ""

    botonActualizarUI.style.display = "none"
    botonEnviarUI.style.display = "block"

}

function borrar(index){
    const array = localStorage.getItem('elements')

        const actividadArray = JSON.parse(array)
        actividadArray.splice(index,1)

    localStorage.setItem('elements', JSON.stringify(actividadArray))
    imprimir(actividadArray)
}

function mantener(){
    const datos = JSON.parse(localStorage.getItem('elements'))

    if (datos) {
        imprimir(datos)
    }
}

=======
const actividadUI = document.querySelector('#actividad')
const descripcionUI = document.querySelector('#descripcion')
const correoUI = document.querySelector('#correo')
const servicioUI = document.querySelector('#servicio')
const botonEnviarUI = document.querySelector('#enviar')
const sectionMostrar = document.querySelector('#mostrar')
const botonActualizarUI = document.querySelector('#actualizar')

 

let referencia = ''

 

 

botonEnviarUI.addEventListener('click', addToDo)
botonActualizarUI.addEventListener('click', editar2)
document.addEventListener('DOMContentLoaded', mantener)
 

function addToDo(event){
    event.preventDefault()
    let datos = JSON.parse(localStorage.getItem('elements'))
 
    if(datos == null){
        datos = []
    }

    const objetoTemporal={
        actividad: actividadUI.value,
        descripcion: descripcionUI.value,
        servicio: servicioUI.value,
        correo: correoUI.value
    }

    datos.push(objetoTemporal)
    localStorage.setItem('elements', JSON.stringify(datos))

    imprimir()

}

 

function imprimir(){
    let datos = JSON.parse(localStorage.getItem('elements'));
    const crudContainer = document.getElementById('crud-cont');

    crudContainer.innerHTML = datos.map((dato, index) => {
        return `

        <div class='card'>
            <h4 class="infoCrud">${dato.actividad}</h4>
            <h4 class="infoCrud1">${dato.descripcion}</h4>
            <h4 class="infoCrud2">${dato.servicio}</h4>
            <h4 class="infoCrud3">${dato.correo}</h4>
            <div>
            <button class="botonEditar" onClick="editar(${index})">Editar</button>
            <button class="botonEliminar" onClick="borrar(${index})">Eliminar</button>
            </div>
            </div>

        `

    }).join()
}

function editar(index){

    let datos = JSON.parse(localStorage.getItem('elements'))
    actividadUI.value = datos[index].actividad
    descripcionUI.value = datos[index].descripcion
    servicioUI.value = datos[index].servicio
    correoUI.value = datos[index].correo

    botonActualizarUI.style.display = "block"
    botonEnviarUI.style.display = "none"

    referencia = index
}

 

function editar2(event){
    event.preventDefault()
    let datos = JSON.parse(localStorage.getItem('elements'))

    const objetoTemporal={
        actividad: actividadUI.value,
        descripcion: descripcionUI.value,
        servicio: servicioUI.value,
        correo: correoUI.value
    }
    
    datos.splice(referencia, 1, objetoTemporal)
    localStorage.setItem('elements', JSON.stringify(datos))

    imprimir(datos)

    descripcionUI.value = ""
    actividadUI.value = ""
    servicioUI.value = ""
    correoUI.value = ""

    botonActualizarUI.style.display = "none"
    botonEnviarUI.style.display = "block"

}

function borrar(index){
    const array = localStorage.getItem('elements')

        const actividadArray = JSON.parse(array)
        actividadArray.splice(index,1)

    localStorage.setItem('elements', JSON.stringify(actividadArray))
    imprimir(actividadArray)
}

function mantener(){
    const datos = JSON.parse(localStorage.getItem('elements'))

    if (datos) {
        imprimir(datos)
    }
}

>>>>>>> 196dd7455f8fb68ac67b32230bf6686499b09ccd
