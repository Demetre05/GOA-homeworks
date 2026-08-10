const movieList = document.getElementById("movies");
movieList.innerHTML = `
    <div class="movie">  Revenant  </div>
    <div class="movie">  Gladiator  </div>
    <div class="movie">  Terminator  </div>
    <div class="another-Movie">  Terminator 2  </div>
`;

movieList.querySelector(".movie").textContent = "Hello World";

console.log(document.getElementsByTagName("p").length);

const allMovies = document.getElementsByClassName("movie");
for(let i = 0; i < allMovies.length; i++) {
    allMovies[i].textContent = "Untouchables";
};

document.querySelector("h1").textContent = "ახალი სათაური";