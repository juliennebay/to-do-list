function loadScript(){
    const button = document.getElementsByTagName("button")[0]
    const input = document.getElementById("task")

    function newMessage(){
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
      const spanContent = document.createTextNode(input.value)
      newSpan.appendChild(spanContent)
      newSpan.classList.add("p-1")
      li.appendChild(newSpan)

      const deleteItem = document.createElement("img")
      li.appendChild(deleteItem)
      deleteItem.setAttribute("src", "icons/trashcan.svg")
      deleteItem.classList.add("p-1", "cursor-pointer")
      deleteItem.addEventListener("click", deleteMessage)

      input.value = ""
    }

    function deleteMessage(event){
        event.target.parentElement.style.display = "none"
    }

    function toggleStrikeThru(event){
        if (event.target.checked){
            event.target.parentElement.getElementsByTagName("span")[0].style["text-decoration"] = "line-through"
        } else {
            event.target.parentElement.getElementsByTagName("span")[0].style["text-decoration"] = "inherit"
        }
    }

    button.addEventListener("click", newMessage)
    input.addEventListener("keyup", e => e.keyCode === 13 && newMessage())
}
document.addEventListener("DOMContentLoaded", loadScript)