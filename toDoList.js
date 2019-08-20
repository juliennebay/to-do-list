function loadScript(){
    const button = document.getElementsByTagName("button")[0]
    const taskInput = document.getElementById("task")
//newMessage function creates the necessary HTML elements and binds event handlers to these elements.
    function newMessage(item){
        //line 5's parameter is either undefined (because line 63 calls it w/ nothing) 
        //or a string (from localStorage) (line 67 with forEach)
      const ul = document.getElementsByClassName("list")[0]
      const li = document.createElement("li")
      li.classList.add("list-group-item")
      ul.appendChild(li)

      const checkboxItem = document.createElement("input")
      li.appendChild(checkboxItem)
      checkboxItem.classList.add("checkbox")
      checkboxItem.setAttribute("type", "checkbox")
      checkboxItem.addEventListener("click", toggleStrikeThru)

      const newSpan = document.createElement("span")
      const spanContent = document.createTextNode((item && item.todo) || taskInput.value)
      newSpan.appendChild(spanContent)
      newSpan.classList.add("p-1")
      li.appendChild(newSpan)

      const deleteItem = document.createElement("img")
      li.appendChild(deleteItem)
      deleteItem.setAttribute("src", "icons/trashcan.svg")
      deleteItem.classList.add("p-1", "cursor-pointer")
      deleteItem.addEventListener("click", deleteMessage)
//the if statement below makes sure that items that already exist (in localstorage) aren't duplicated
      if (!item) {
        const todoItems = JSON.parse(localStorage.getItem("todos")) || []
        todoItems.push({todo: taskInput.value, checked: false})
        localStorage.setItem("todos", JSON.stringify(todoItems))
        taskInput.value = ""
      }
//this if statement makes sure that clicked items STAY clicked, even after refreshing page
//we moved it down here, because toggleStrikeThru makes changes on span, 
//which is the second child of li (the first child being the checkbox)
//therefore, we must make sure that the span exists before clicking the checkbox item,
//which is what calles toggleStrikeThru      
      if (item && item.checked === true){
        checkboxItem.click({target: { checked: true, parentElement: li}})
      }
    }
//deleteMessage function hides the selected list item & also removes it from localStorage
    function deleteMessage(event){
        event.target.parentElement.style.display = "none"
        const deletedTask = event.target.parentElement.getElementsByTagName("span")[0].textContent
        const todoItems = JSON.parse(localStorage.getItem("todos"))
        localStorage.setItem("todos", JSON.stringify(todoItems.filter(x => x.todo !== deletedTask)))
    }
//toggleStrikeThru function adds/deletes strikethrough over the selected text.
    function toggleStrikeThru(event){
        if (event.target.checked){
            event.target.parentElement.getElementsByTagName("span")[0].style["text-decoration"] = "line-through"
            const todoItems = JSON.parse(localStorage.getItem("todos"))
            const checkedTask = event.target.parentElement.getElementsByTagName("span")[0].textContent
            const updatedTodoItems = todoItems.map(x => x.todo === checkedTask ? {...x, checked: true} : x)
            localStorage.setItem("todos", JSON.stringify(updatedTodoItems))

        } else {
            event.target.parentElement.getElementsByTagName("span")[0].style["text-decoration"] = "inherit"
            const todoItems = JSON.parse(localStorage.getItem("todos"))
            const checkedTask = event.target.parentElement.getElementsByTagName("span")[0].textContent
            const updatedTodoItems = todoItems.map(x => x.todo === checkedTask ? {...x, checked: false} : x)
            localStorage.setItem("todos", JSON.stringify(updatedTodoItems))
        }
    }
//the function loadScript does three things: 1. binds event handlers to button and taskInput  
    button.addEventListener("click", () => newMessage())
    taskInput.addEventListener("keyup", e => e.keyCode === 13 && newMessage())
//2. it calls newMessage with each item in localStorage
    const todoItems = JSON.parse(localStorage.getItem("todos"))
    todoItems && todoItems.forEach(item => newMessage(item))
//by adding "todoItems &&", I ensure the forEach runs only when it's not undefined or null.
}
//3. it defines a bunch of functions (which, technically, it doesn't need to do)
document.addEventListener("DOMContentLoaded", loadScript)