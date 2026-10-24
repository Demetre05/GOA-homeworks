const user = document.querySelector("div");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", e => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${input.value}`)
        .then(response => response.json())
        .then(data => {
            let mArr = ["jan", "feb", "mar", "apr", "may", "jun",
            "jul", "aug", "sep", "oct", "nov", "dec"];
            let d = data.created_at;
            let day = d[8] != 0 ? d[8]+d[9] : d[9];
            let m = d[5] != 0 ? mArr[d[5]+d[6]-1] : mArr[d[6]-1];
            let date = day+` ${m}, `+d[0]+d[1]+d[2]+d[3];
            user.innerHTML = `
            <img src="${data.avatar_url}" alt="">
            <h1>${data.name}</h1>
            <p>Joined ${date}</p>
            <p>description: ${data.bio}</p>
            <div>
                <p>repositories: ${data.public_repos}</p>
                <p>followers: ${data.followers}</p>
                <p>following: ${data.following}</p>
            </div>
            <div>
                <p>location: ${data.location}</p>
                <a href="${data.blog}">${data.blog}</a>
            </div>`
    })
});