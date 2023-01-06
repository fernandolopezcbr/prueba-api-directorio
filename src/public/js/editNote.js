const update = document.getElementById('update');

//Obtenemos los parámetros enviados por la url ****************************
const values = window.location.search;
//Creamos la instancia
const urlParams = new URLSearchParams(values);
//Accedemos a los valores
var id = urlParams.get('id');

var nombreParam= urlParams.get('nombre'),
ubicacionParam = urlParams.get('ubicacion'),
categoriaParam = urlParams.get('categoria'),
departamentoParam = urlParams.get('departamento'),
imagenParam = urlParams.get('imagen'),
emailParam = urlParams.get('email'),
telefonoParam = urlParams.get('telefono'),
whatsappParam = urlParams.get('whatsapp'),
horarioParam = urlParams.get('horario'),
websiteParam = urlParams.get('website');

var titleParam = urlParams.get('title');
var descriptionParam = urlParams.get('description');

//Elemento del DOM *********************************************************

const nombre = document.getElementById('nombre');
const departamento = document.getElementById('departamento');
const ubicacion = document.getElementById('ubicacion');
const categoria = document.getElementById('categoria');
const imagen = document.getElementById('imagen');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const whatsapp = document.getElementById('whatsapp');
const horario = document.getElementById('horario');
const website = document.getElementById('website');

const title = document.getElementById('title');
const description = document.getElementById('description');

//Asignamos los valores ****************************************************

nombre.value = nombreParam;
departamento.value = departamentoParam;
ubicacion.value = ubicacionParam;
categoria.value = categoriaParam;
imagen.value = imagenParam;
email.value = emailParam;
telefono.value = telefonoParam;
whatsapp.value = whatsappParam;
horario.value = horarioParam;
website.value = websiteParam;

title.value = titleParam;
description.textContent = descriptionParam;

$(document).ready(function() {
    $("#alert-edit").hide();
});

$("#btn-alert-edit").click(function() {
    $("#alert-edit").hide();
});

update.onclick = () => {

    const nombreValue = nombre.value,
    departamentoValue = departamento.value,
     ubicacionValue = ubicacion.value,
     categoriaValue = categoria.value,
     imagenValue = imagen.value,
     emailValue = email.value,
     telefonoValue = telefono.value,
     whatsappValue = whatsapp.value,
     horarioValue = horario.value,
     websiteValue = website.value;

    const titleValue = title.value;
    const descriptionValue = description.value;

    if (nombreValue == '' || departamentoValue == '' || ubicacionValue == '' || categoriaValue == '' || imagenValue == '' || emailValue == '' || telefonoValue == '' || whatsappValue == '' ||  websiteValue == '' ||horarioValue == '' || titleValue == '' || descriptionValue == '') {
        $("#alert-edit").show();
    } else {
        updateData(id, nombreValue, departamentoValue, ubicacionValue , categoriaValue, imagenValue, emailValue, telefonoValue, whatsappValue, websiteValue, horarioValue, titleValue, descriptionValue);
        window.location.href = '/';
    }

}

//Función para actualizar una nota

async function updateData(id, nombre, departamento, ubicacion, categoria, imagen, email, telefono , whatsapp ,horario ,website, title, description) {
    const response = await fetch('/api/update/' + id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'nombre': nombre,
            'departamento': departamento,
            'ubicacion': ubicacion,
            'categoria': categoria,
            'imagen': imagen,
            'email': email,
            'telefono': telefono,
            'whatsapp': whatsapp,
            'horario': horario,
            'website': website,
            'title': title,
            'description': description
        })

    });

    const data = await response.json();
    console.log(data);
}