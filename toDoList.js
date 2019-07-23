function loadScript(){
    const button = document.getElementsByTagName("button")[0]

    function newMessage(event){
      const div = document.getElementsByClassName("text")[0]
      const newP = document.createElement("p")
      div.appendChild(newP)
      newP.textContent = "are sweet"
    }

    button.addEventListener("click", newMessage)
}
document.addEventListener("DOMContentLoaded", loadScript)