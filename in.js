const getTasks = localStorage.getItem('tasks')
let tasks = [
    { name: 'Tarea 1', completed: true },
];
if (getTasks) {
    tasks = JSON.parse(getTasks)
}

const task_area_add = document.querySelector('.btn_area');
const task_text_input = document.getElementById('textTask');
const btn_link = document.querySelector('.linkBtn');
const btn_taskAdd = document.querySelector('.btn');
const listElement = document.querySelector('ul');
const date_day = document.querySelector('.data_day');
const date_week = document.querySelector('.data_week');
const date_mon = document.querySelector('.data_mon');
const date_y = document.querySelector('.data_y');

const today = new Date()
const weeks = ['Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date_day.innerHTML = today.getDate()
date_week.innerHTML = weeks[today.getDay()]
date_mon.innerHTML = months[today.getMonth()]
date_y.innerHTML = today.getFullYear()

btn_taskAdd.addEventListener('click', () => { // cuando alguien pulse el boton, se recoge el valor del input y se pinta en la lista
    tasks.push({   //añadimos una tarea al array de tareas
        name: task_text_input.value,
        completed: false
    })
    pintarLista()
    task_area_add.classList.toggle('btn_area_remove')

})


btn_link.addEventListener('click', () => { //boton de añadir tareas, se quita la clase de .btn_area_remove si la tiene y la añade si no no
    task_text_input.value = ""
    task_area_add.classList.toggle('btn_area_remove')
})

function hacerLista(task) { //pintamos la lista de tareas
    const ol = document.createElement('ol'); //creamos una lista de ol
    const check_input = document.createElement('input'); //creamos un checkbox
    check_input.type = 'checkbox';
    if (task.completed) {
        ol.classList.add('list_tarea');
        check_input.checked = true;
    }
    ol.innerHTML = task.name;// cuando alquien pulse el checkbox, hay que cambiar la propiedad completed de la tarea a true
    ol.appendChild(check_input);
    check_input.addEventListener('click', () => {//escuchar evento en checkbox, investigar que evento se usa en checkbox
        if (check_input.checked == true) {//le decimos si el estado es true, le añadimos la clase
            task.completed = true;
        } else {
            task.completed = false;
        }
        pintarLista()// y volver a pintar todas las tareas
    })
    listElement.appendChild(ol);
}
function pintarLista() {
    listElement.innerHTML = '';
    for (let tarea of tasks) {
        hacerLista(tarea)
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
pintarLista();




