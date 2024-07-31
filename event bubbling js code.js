let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by right click please")
})

document.addEventListener("Keydown", (e)=>{
    console.log(e.key, e.keycode)
})