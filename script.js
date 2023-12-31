
let theme_switch = document.getElementById("theme-switch");
let theme_name = document.getElementById("theme-name");
let icon_img = document.getElementById("icon-img");

var form = document.getElementById("form");

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

form.addEventListener("submit", (event) => {
    event.preventDefault();

    var username = document.getElementById("search-box").value;

    if(username.length == 0) {
        document.getElementById("search-error").innerHTML = "Search empty";
        document.getElementById("search-error").style.visibility = "visible";
    }
    else{
        let username_clean = username.split(" ").join("");

        fetch("https://api.github.com/users/" + username_clean)
        .then((result) => result.json())
        .then((data) => {

            if(data.login == null){
                document.getElementById("search-error").innerHTML = "No results";
                document.getElementById("search-error").style.visibility = "visible";
            }
            else{
                document.getElementById("user-img").src= data.avatar_url;

            document.getElementById("profile-name").innerHTML= data.name;

            document.getElementById("profile-tag").innerHTML= "@" + data.login;

            if (data.bio == null){
                document.getElementById("bio").innerHTML = "This profile has no bio";
                document.getElementById("bio").style.opacity = 0.5;
            }
            else{
                document.getElementById("bio").innerHTML = data.bio;
            }

            document.getElementById("repo-num").innerHTML= data.public_repos;

            document.getElementById("following-num").innerHTML = data.following;

            document.getElementById("followers-num").innerHTML = data.followers;

            document.getElementById("location").innerHTML = data.location;

            date = new Date(data.created_at);
            year = date.getFullYear();
            month = date.getMonth();
            
            const monthName = (month) => {
                const months = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
                ];
            
                return months[month];
            };
            dt = date.getDate();
            document.getElementById("profile-date").innerHTML = "Joined" + " " + dt + " " + monthName(month) + " " + year;



            document.getElementById("github").href = data.html_url;
            document.getElementById("github").innerHTML = data.html_url;

            if(data.twitter_url == null){
                document.getElementById("twitter").innerHTML = "Not Available";
                document.querySelector(".twitter").style.opacity = 0.5;
            }
            else{
                document.getElementById("twitter").innerHTML = data.twitter_url;
                document.querySelector(".twitter").style.opacity = 1;
            }


            if(data.company == null){
                document.getElementById("organization").innerHTML = "Not Available";
                document.querySelector(".building").style.opacity = 0.5;
            }
            else{
                document.getElementById("organization").innerHTML = data.company;
                document.querySelector(".building").style.opacity = 1;
            }


            if(data.location == null){
                document.getElementById("location").innerHTML = "Not Available";
                document.querySelector(".location").style.opacity = 0.5;    
            }
            else{
                document.getElementById("location").innerHTML = data.location;
                document.querySelector(".location").style.opacity = 1; 
            }
            }
        })
    }

});

