function loadScript(){
    const button = document.getElementsByTagName("button")[0]
    const input = document.getElementById("task")

    function newMessage(event){
      const ul = document.getElementsByClassName("list")[0]
      const li = document.createElement("li")
      ul.appendChild(li)
      li.innerHTML = `<span>${input.value}</span>` + " <a href='#' class='delete'>delete</a>"
      input.value = ""
      const deleteElements = document.getElementsByClassName("delete")
      deleteElements[deleteElements.length-1].addEventListener("click", deleteMessage)
    }

    function deleteMessage(event){
        event.target.parentElement.style.display = "none"
    }

    button.addEventListener("click", newMessage)
    input.addEventListener("keyup", e => e.keyCode === 13 && newMessage())
}
document.addEventListener("DOMContentLoaded", loadScript)