
export const getGithubUser = async (user = "mojombo") => {
    try {
        let response = await fetch(`https://api.github.com/users/${user}`, {headers: {'Authorization': `token ${GITHUB_PA_TOKEN}`}})
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}

export const renderGithubUser = (user, parent) => {
    const element = document.createElement('div');
    element.classList.add('user-card');
    element.innerHTML = `
    <div class="img-wrapper">
                    <img src="${user.avatar_url}" alt="hidden" class="avatar">
                </div>
                <h2>${user.login}</h2>
                <a href="${user.html_url}" target="_blank">Go to Profile</a>
                <p>Last Commit:</p>
                <p id="last-event"></p>
    `;
    parent.appendChild(element);
}
export const getPublicEvents = async (user) => {
    const url = `https://api.github.com/users/${user}/received_events/public`;
    const token = GITHUB_PA_TOKEN;
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json'
    };

    const response = await fetch(url, { headers });
    const events = await response.json();

    const lastCommitDate = getLastCommitDateFromEvents(events);
    document.querySelector('#last-event').innerHTML = `${lastCommitDate}`;
    console.log(`Last commit date for ${user}: ${lastCommitDate}`);
};

function getLastCommitDateFromEvents(events) {
    const commitEvents = events.filter(event => event.type === 'PushEvent');
    console.log(commitEvents);
    if (commitEvents.length > 0) {
        const lastCommitEvent = commitEvents[0];
        const lastCommitDate = new Date(lastCommitEvent.created_at);
        return lastCommitDate.toDateString();
    } else {
        return 'No commits found';
    }
}
