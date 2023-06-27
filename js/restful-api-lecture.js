import {setFavorite, patchFavorite, deleteFavorite, getFavorites, getFavorite, searchFavorite} from "./movies-api.js";

(async()=>{

    document.querySelector('button').addEventListener('click', async function(){
        const title = document.querySelector('#title').value;
        const genre = document.querySelector('#genre').value;
        const rating = parseFloat(document.querySelector('#rating').value);
        let movieData = {
            title,
            genre,
            rating
        }
        let result  = await setFavorite(movieData);
        console.log(result);
    })

    // let body = {
    //     "rating": 2
    // }
    // let response = await patchFavorite(3, body);
    // let data = response.json();
    // console.log(data);

    // await  deleteFavorite(4);

    let favorites = await getFavorites();
    console.log(favorites);
    let favorite = await getFavorite(2);
    console.log(`ONE favorite => ${favorite}`)
    let searched = await searchFavorite({title:`Red Dawn`});
    console.log(searched);



})();