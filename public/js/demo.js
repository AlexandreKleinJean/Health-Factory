const navigation = document.getElementById("move")

console.log(navigation)

window.addEventListener("scroll", () => { 
    if(window.scrollY>500){ 
        navigation.classList.add("moveAppears")
        }
    if(window.scrollY<500){ 
        navigation.classList.remove("moveAppears")
        }
    })


