/* aca agregamos elementos y funciones a elementos */
const titulo = document.createElement('h1')
titulo.innerText ="Este es el titulo JS"
const boton = document.createElement('button')
boton.innerText ="Boton Creado por DOM"

boton.addEventListener('click', function () {    
    console.log('hizo clic');
    titulo.innerText ='Esto cambio';
    alert('mostrando mensaje');   
    
})

document.body.append(titulo);
document.body.append(boton);

/*aca manejamos un objeto */

const usuario = {
    nombre: 'Jose',
    edad:30
}

function printInfo(usuario){
    return '<h2>hola '  + usuario.nombre + '</h2>'

}

document.body.innerHTML = printInfo(usuario); 

/* aca funciones anominmas*/


function start(){
    alert('Entro a start')
    boton2.style ="background: green";
    console.log('Boton 1 ')
}

const boton1 = document.createElement('button')
boton1.innerText ="apretame 1"
boton1.addEventListener('click',start)
document.body.append(boton1);

const boton2 = document.createElement('button')
boton2.innerText ="apretame 2"
document.body.append(boton2);

boton2.addEventListener('click',() =>{
    boton2.style ="background: red";
    alert("apretaste")
})


boton2.addEventListener('click',() => alert("apretaste"))

const names =['mariano','juan','joaquin','jacinta','otro']
/* for (i = 0; i < names.length; i++){
    const elemento = names[i]
    console.log(elemento)
} */

/* names.forEach(function(name){
    console.log(name)
}); */

const nuevonombres = names.map(function (name){   
   return `hola ${name}`
})

console.log(nuevonombres)
