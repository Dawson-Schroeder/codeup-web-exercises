import{getGithubUser, renderGithubUser, getPublicEvents} from "./promises-api.js"

(async()=>{

    let users = await getGithubUser("kevinclark");
    console.log(users)

    const usersGrid = document.querySelector('#userGrid')
    renderGithubUser(users, usersGrid);

    console.log(getPublicEvents("kevinclark"));

})();

