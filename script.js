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

    let username_clean = username.split(" ").join("");

    fetch("https://api.github.com/users/" + username_clean)
    .then((result) => result.json())
    .then((data) => {

        console.log(data);
        document.getElementById("user-img").src= data.avatar_url;

        document.getElementById("profile-name").innerHTML= data.name;

        document.getElementById("profile-tag").innerHTML= "@" + data.login;

        //         const regularDate = new Date(isoDate);
        // const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        // const formattedDate = regularDate.toLocaleDateString('en-US', options);


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
        


    })

});





// avatar_url
// : 
// "https://avatars.githubusercontent.com/u/88200419?v=4"
// bio
// : 
// null
// blog
// : 
// ""
// company
// : 
// "Student at University of Ibadan"
// created_at
// : 
// "2021-07-30T14:48:15Z"
// email
// : 
// null
// events_url
// : 
// "https://api.github.com/users/jesutobi-world/events{/privacy}"
// followers
// : 
// 11
// followers_url
// : 
// "https://api.github.com/users/jesutobi-world/followers"
// following
// : 
// 9
// following_url
// : 
// "https://api.github.com/users/jesutobi-world/following{/other_user}"
// gists_url
// : 
// "https://api.github.com/users/jesutobi-world/gists{/gist_id}"
// gravatar_id
// : 
// ""
// hireable
// : 
// null
// html_url
// : 
// "https://github.com/jesutobi-world"
// id
// : 
// 88200419
// location
// : 
// "Nigeria"
// login
// : 
// "jesutobi-world"
// name
// : 
// "Bada Jesutobi"
// node_id
// : 
// "MDQ6VXNlcjg4MjAwNDE5"
// organizations_url
// : 
// "https://api.github.com/users/jesutobi-world/orgs"
// public_gists
// : 
// 0
// public_repos
// : 
// 35
// received_events_url
// : 
// "https://api.github.com/users/jesutobi-world/received_events"
// repos_url
// : 
// "https://api.github.com/users/jesutobi-world/repos"
// site_admin
// : 
// false
// starred_url
// : 
// "https://api.github.com/users/jesutobi-world/starred{/owner}{/repo}"
// subscriptions_url
// : 
// "https://api.github.com/users/jesutobi-world/subscriptions"
// twitter_username
// : 
// null
// type
// : 
// "User"
// updated_at
// : 
// "2023-07-24T14:25:38Z"
// url
// : 
// "https://api.github.com/users/jesutobi-world"
// [[Prototype]]
// : 
