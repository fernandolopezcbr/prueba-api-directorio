async function getNotes() {
    const response = await fetch('/api/notes');
    const data = await response.json();
    console.log(data);
    const showNotes = document.getElementById('show-notes');

    if (data.notes.length == 0) {

        $('#message').text('No existen notas que mostrar');

    } else {
        $('#message').text('');

        for (let i = 0; i < data.notes.length; i++) {

            const id = data.notes[i]._id;
            //
            const nombre = document.createElement('h5');
            const ubicacion = document.createElement('h5');
            const categoria = document.createElement('h5');
            const departamento = document.createElement('h5');
            const imagen = document.createElement('h5');
            const title = document.createElement('h5');
            const date = document.createElement('small');
            const description = document.createElement('p');
            const btnDelete = document.createElement('button');
            const btnShow = document.createElement('button');
            const btnEdit = document.createElement('button');
            const note = document.createElement('div');
            const btnDiv = document.createElement('div');
            const btnForm = document.createElement('form');

            note.className = 'card mb-3 px-2 py-2 card-note';
            btnDiv.className = 'd-flex flex-row mt-2';


            
            title.textContent = data.notes[i].title;

            date.textContent = data.notes[i].date.substring(8, 10) + data.notes[i].date.substring(4, 8) + data.notes[i].date.substring(0, 4);
            date.className = 'date';

            //Características de los botones del DOM:

            btnShow.className = 'btn btn-primary btn-sm';
            btnShow.id = "show" + i;
            btnShow.textContent = 'Mostrar';
            btnDelete.type = "button";

            btnEdit.className = 'btn btn-success btn-sm mx-3';
            btnEdit.id = "edit" + i;
            btnEdit.textContent = 'Editar';
            btnEdit.type = "button";

            btnDelete.className = 'btn btn-danger btn-sm';
            btnDelete.id = "delete" + i;
            btnDelete.textContent = 'Eliminar';
            btnDelete.type = "submit";

            //nombre.textContent = data.notes[i].nombre;

            description.textContent = data.notes[i].description;

            

            

            //Añadimos los elementos del DOM

            note.append(nombre);

            note.append(title);
            note.append(date);
            btnDiv.append(btnShow);
            btnForm.append(btnEdit);
            btnForm.append(btnDelete);
            btnDiv.append(btnForm);

            note.append(btnDiv);
            showNotes.append(note);

            //Botón mostrar modal
            btnShow.onclick = () => {

                $('#myModal').modal('show');
                //$('#modal-nombre').text(data.notes[i].nombre);
                $('#modal-title').text(data.notes[i].title);
                //$('#content-body').html(nombre);
                $('#content-body').html(description);
                


            }

            //Botón de eliminar:      
            btnDelete.onclick = () => {
                console.log(id);
                deleteNote(id);
            }

            //Botón de editar:      
            btnEdit.onclick = () => {

                const nombre = data.notes[i].nombre,
                 title = data.notes[i].title,
                 departamento = data.notes[i].departamento,
                 categoria = data.notes[i].categoria,
                 description = data.notes[i].description,
                 ubicacion = data.notes[i].ubicacion,
                 imagen = data.notes[i].imagen,
                 email = data.notes[i].email,
                 telefono = data.notes[i].telefono,
                 whatsapp = data.notes[i].whatsapp,
                 horario = data.notes[i].horario,
                 website = data.notes[i].website
                window.location.href =  `edit.html?id=${id} &nombre=${nombre} &departamento=${departamento} &ubicacion=${ubicacion} &categoria=${categoria} &imagen=${imagen} &email=${email} &telefono=${telefono} &whatsapp=${whatsapp} &website=${website} &horario=${horario} &title=${title} &description=${description}`;

            }
        }
    }

}


//Función para eliminar una nota

async function deleteNote(id) {
    await fetch('/api/delete/' + id, {
        method: 'DELETE'
    }).then(res => res.text()).then(res => console.log(res))
}

getNotes();