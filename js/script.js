
function TodoPost(e){ // La 'e' contiene toda la info del evento que se esta disparando
    
    e.preventDefault()
    let toDo = $("#todoText").val()
    $("#todoList").append(` <input type="checkbox" name="todo" /> <label> ${toDo} </label> <br> `)
}

// En estas funciones de abajo, no es necesario agregar el evento de e.preventDefault()
// porque los 3 botones de la derecha estan fuera del formulario.

// Remover la seleccion de checkbox de todos los elementos de la lista
function TodoClear(){
    let todos = $("[name='todo']") // De esta manera selecciono todas las checkboxes
    for(const element of todos){
     element.checked = false
    }
}

// Marca todos los checkboxes de la lista
function TodoMark(){
    let todos = $("[name='todo']") // De esta manera selecciono todas las checkboxes
    for(const element of todos){
     element.checked = true
    }
}

function TodoDelete(){
    console.log("aaaa")
}

$("#ButtonPost").click(TodoPost)

$("#ButtonClear").click(TodoClear)

$("#ButtonMark").click(TodoMark)

$("#ButtonDelete").click(TodoDelete)