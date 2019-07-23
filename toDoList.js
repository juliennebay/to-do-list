function loadScript(){
    const button = document.getElementsByTagName("button")[0]

    function newMessage(event){
      const ul = document.getElementsByClassName("list")[0]
      const li = document.createElement("li")
      const input = document.getElementById("task")
      ul.appendChild(li)
      li.textContent = input.value
      input.value = ""
    }

    button.addEventListener("click", newMessage)
}
document.addEventListener("DOMContentLoaded", loadScript)