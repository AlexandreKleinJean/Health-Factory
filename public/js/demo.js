const navigation = document.getElementById("move")

console.log(navigation)

window.addEventListener("scroll", () => { 
    if(window.scrollY>500){ 
        navigation.style.opacity = "1";
        }
    if(window.scrollY<500){ 
        navigation.style.opacity = "0";
        }
    })

document.getElementById("menu__toggle").addEventListener("click", () => {
    const menuItems = document.getElementById("menu");
    const bannerBtn = document.getElementById("banner__btn")
    if (window.getComputedStyle(menuItems).display === "none") {
        menuItems.style.display = "flex";
    } else {
        menuItems.style.display = "none";
    }
});