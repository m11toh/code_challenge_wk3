// Your code here


document.addEventListener('DOMContentloaded',(event) => {
    getMovies()
})

function getMovies(){
   const movielist = document.getElementById('films')
   fetch("http://localhost:4001/films").then(response => response.json())
   .then((data) => {
        data.forEach(film =>{
            const list = document.createElement('li')
            list.innerText = film.title;

            list.addEventListener('click',()=>{
                displaymovieinfo(film)
            })

            movielist.appendChild(list);

            console.log(film.title)
        })
   }
   )
   
        
}

 getMovies();
 
function displaymovieinfo(film){
    const image = document.getElementById('poster')
        image.src = film.poster;

    const title = document.getElementById('title')
        title.innerText = `${film.title}`;

    const description = document.getElementById('film-info')
        filminfo.innerText = `${film.description}`

    const runtime = document.getElementById('runtime')
        runtime.innerText = ` Runtime ${film.runtime}`

    const showtime = document.getElementById('showtime')
        showtime.innerText = `${film.showtime}`

    const tickets = document.getElementById('tickets')
        tickets.innerText = `${film.tickets}`
    
    const availatbletickets = film.capacity - film.tickets_sold;
}

displaymovieinfo(film);

const placeholder = film.map((film) =>{
    return
    `
    

    `
})
