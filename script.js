let theme_switch = document.getElementById("theme-switch");
let theme_name = document.getElementById("theme-name");
let icon_img = document.getElementById("icon-img");

theme_switch.addEventListener('click', ()=>{
    if (theme_name.innerHTML == "Dark"){
        theme_name.innerHTML = "Light";
        icon_img.src = "./images/sun.svg";
        document.body.classList.toggle("dark-theme");
    }
    else{
        theme_name.innerHTML = "Dark";
        icon_img.src = "./images/moon.svg";
        document.body.classList.toggle("dark-theme");
    }
  })