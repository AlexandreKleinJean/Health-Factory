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

document.getElementById("menu__toggle").addEventListener("click", () => {
    const menuItems = document.getElementById("menu");
    if (window.getComputedStyle(menuItems).display === "none") {
        menuItems.style.display = "flex";
    } else {
        menuItems.style.display = "none";
    }
});

