
const tasks = [
    { name: 'Tarea 1', completed: true },
    { name: 'Tarea 2', completed: true },
];

const btn_taskAdd = document.querySelector('.btn')
const listElement = document.querySelector('ul');
function hacerLista(task) {
    const li = document.createElement('li');
    const check = document.createElement('input');
    check.type = 'checkbox';
    if (task.completed) {
        li.classList.add('list_tarea');
        check.checked = true;
    }
    li.innerHTML = task.name;// cuando alquien pulse el checkbox, hay que cambiar la propiedad completed de la tarea a true
    li.appendChild(check);
    check.addEventListener('click', () => {//escuchar evento en checkbox, investigar que evento se usa en checkbox
        if (check.checked == true) {
            task.completed = true;
        } else {
            task.completed = false;
        }
        console.log(tasks)
        pintarLista()// y volver a pintar todas las tareas
        contarTareas()
    })
    listElement.appendChild(li);
}
function pintarLista() {
    listElement.innerHTML = '';
    for (let tarea of tasks) {
        hacerLista(tarea)
    }
}
pintarLista();




