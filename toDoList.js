function loadScript(){
    const button = document.getElementsByTagName("button")[0]
    const input = document.getElementById("task")

    function newMessage(){
      const ul = document.getElementsByClassName("list")[0]
      const li = document.createElement("li")
      ul.appendChild(li)

      const checkboxItem = document.createElement("input")
      li.appendChild(checkboxItem)
      checkboxItem.classList.add("checkbox")
      checkboxItem.setAttribute("type", "checkbox")
      checkboxItem.addEventListener("click", strikeThru)

      const newSpan = document.createElement("span")
      const spanContent = document.createTextNode(input.value)
      newSpan.appendChild(spanContent)
      li.appendChild(newSpan)

      const deleteItem = document.createElement("a")
      const aContent = document.createTextNode(' delete')
      deleteItem.appendChild(aContent)
      li.appendChild(deleteItem)
      deleteItem.setAttribute("href", '#')
      deleteItem.addEventListener("click", deleteMessage)

      input.value = ""
    }

    function deleteMessage(event){
        event.target.parentElement.style.display = "none"
    }

    function strikeThru(event){
        //fix this
    }

    button.addEventListener("click", newMessage)
    input.addEventListener("keyup", e => e.keyCode === 13 && newMessage())
}
document.addEventListener("DOMContentLoaded", loadScript)