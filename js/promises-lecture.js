import{getGithubUsers, renderGithubUser} from "./promises-lecture-API.js"

(async ()=>{
        // Get Users
    let users = await getGithubUsers();
    console.log(users)

        // Render Users
    const usersGrid = document.querySelector('#userGrid')
    users.forEach(function(user){
        renderGithubUser(user, usersGrid);
    });


})();