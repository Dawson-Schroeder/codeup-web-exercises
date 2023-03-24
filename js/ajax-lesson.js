
// // vanilla format
// let person = {
//     firstName: "Dawson",
//     lastName: "Schroeder",
//     email: "asdfghjkl@gmail.com",
// }
// // JSON format
// // let personJSON = {
// //     "firstName": "Dawson",
// //     "lastName": "Schroeder",
// //     "email": "asdfghjkl@gmail.com"
// // }
// // turn a string into JSON formatt
// let personJSON = JSON.stringify(person);

// fetch function layout
// fetch(endpoint, options)
//     .then(reponse)
//     .then(data);

// const getMovie = () => {
//     fetch('https://swapi.dev/api/films/1/')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         }).catch(error => {
//             console.log(error);
//     });
// }

// async function getMovieAsync(){
//     try {
//         let response = await fetch('https://swapi.dev/api/films/1/');
//         let data = await response.json();
//         console.log(data);
//     } catch(error) {
//         console.log(error);
//     }
// }

// traditional promise method
function getMovie(movie = 1) {
    return fetch(`https://swapi.dev/api/films/${movie}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            return data;
        }).catch(error => {
        console.log(error);
    });
}

getMovie().then(movie => {
    // continue on with movie data
    console.log(movie);
});


// async/await method
async function getMovieA(movie) {

}

const getMovieB = async (movie) => {
    try {
        let response = await fetch(`https://swapi.dev/api/films/${movie}`);
        let data = await response.json();
        return data;
    } catch(error) {
        console.log(error)
    }
}

// let newHope = getMovieB(1)
// using an IFFE to make sure that the API is fetched before the rest of the code runs.
(async()=>{
    // main line of code
    let newHope = await getMovieB(1);
})();





const getChar = async (people = 1) => {
    try {
        let response = await fetch(`https://swapi.dev/api/people/${people}/`);
        let data = await response.json();
        return data;
    } catch(error) {
        console.log(error)
    }
}

(async()=>{
    let getCha = await getChar(69);
    console.log(getCha)
})();





