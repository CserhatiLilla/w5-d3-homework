console.log(movies)

const movieCardComponent = function (name, year, text){

    return `
        <div class="card">
            <div class="movieTietle">${name}</div>
            <div class="movieYear">${year}</div>
            <div class="moovietext">${text}</div>
        </div>
    
    `
}

const movieTitleComponent =`
<h1>Movies</h1>
`;

const loadEvent = function (){
    const rootElement = document.getElementById("root");
    
    console.log(rootElement);

    rootElement.insertAdjacentHTML("beforeend", movieTitleComponent)

    console.log(movies.cards);
    console.log(movies.logo);
    for (const movie of movies.cards) {
        
        console.log(movie)
        rootElement.insertAdjacentHTML("beforeend", movieCardComponent(movie.title,movie.sub,movie.text))

    }

}

window.addEventListener("load", loadEvent)