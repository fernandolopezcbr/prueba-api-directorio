const btn = document.getElementById('btn');

$(document).ready(function() {
    $("#alert").hide();
});

$("#btn-alert").click(function() {
    $("#alert").hide();
});

btn.onclick = () => {

    const nombre = document.getElementById('nombre').value,
    departamento = document.getElementById('departamento').value,
    ubicacion = document.getElementById('ubicacion').value,
    categoria = document.getElementById('categoria').value,
    imagen = document.getElementById('imagen').value,
    email = document.getElementById('email').value,
    telefono = document.getElementById('telefono').value,
    whatsapp = document.getElementById('whatsapp').value,
    horario = document.getElementById('horario').value,
    website = document.getElementById('website').value;


    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (nombre == '' || departamento == '' || ubicacion == '' || categoria == ''|| imagen == '' || email == ''|| telefono == '' || whatsapp == '' || horario == '' || website == '' || title == '' || description == '') {
        $("#alert").show();
    } else {
        postData(nombre, departamento,  ubicacion, categoria , imagen , email, telefono, whatsapp, horario, website, title, description);
    }

}

async function postData( nombre, departamento, ubicacion, categoria, imagen, email, telefono, whatsapp, horario, website, title, description) {
    const response = await fetch('/api/save', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'nombre': nombre,
            'departamento': departamento,
            'ubicacion': ubicacion,
            'categoria': categoria,
            'title': title,
            'description': description,
            'imagen': imagen,
            'email': email,
            'telefono': telefono,
            'whatsapp': whatsapp,
            'horario': horario,
            'website': website
        })

    });

    const data = await response.json();
    console.log(data);
}