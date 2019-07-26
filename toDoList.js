function loadScript(){
    const button = document.getElementsByTagName("button")[0]
    const input = document.getElementById("task")

    function newMessage(event){
      const ul = document.getElementsByClassName("list")[0]
      const li = document.createElement("li")
      ul.appendChild(li)
      li.textContent = input.value
      input.value = ""
    }

    button.addEventListener("click", newMessage)
    input.addEventListener("keyup", e => e.keyCode === 13 && newMessage())
}
document.addEventListener("DOMContentLoaded", loadScript)