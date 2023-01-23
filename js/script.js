
function TodoPost(e){ // La 'e' contiene toda la info del evento que se esta disparando
    
    e.preventDefault()
    let toDo = $("#todoText").val()
    $("#todoList").append(` <input type="checkbox" /> <label> ${toDo} </label> <br> `)
}

function TodoClear(){
    
}

function TodoMark(){
    
}

function TodoDelete(){
    
}

$("#ButtonPost").click(TodoPost)

$("#ButtonClear").click(TodoClear)

$("#ButtonMark").click(TodoMark)

$("#ButtonDelete").click(TodoDelete)