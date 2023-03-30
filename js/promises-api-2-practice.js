export const getCharacter = async (char = 1) => {
    try {
        let response = await fetch(`https://swapi.dev/api/people/${char}/`);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}

export const getPlanet = async (char = 1) => {
    try {
        let response = await fetch(`https://swapi.dev/api/planets/${char}/`);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}

export const getEyeColor = async (char = 1) => {
    let character = await getCharacter(char)
    return  `${character.name} has ${character.eye_color} eyes.`;
}

export const getMovie = async (char = 1) => {
    try {
        let response = await fetch(`https://swapi.dev/api/films/${char}/`);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}

