var lis = document.querySelectorAll("li")

for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
       // this.style.color = "green"
        this.classList.add("selected")
    })
    lis[i].addEventListener("mouseout", function(){
       // this.style.color = "black"
       this.classList.remove("selected")
    })
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done")
    })
}

