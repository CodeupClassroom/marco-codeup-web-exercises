console.log("Promises exercise");

function getLastPushDate(githubUsername) {
    let url = `https://api.github.com/users/${githubUsername}/events`;
    let githubResponse = fetch(url, {headers: {'Authorization': `token ${GITHUB_PAT}`}});
    return githubResponse
        .then((response)=>{
            return response.json();
        })
        .then((githubEventData)=>{
            for (let githubEvent of githubEventData) {
                if(githubEvent.type === "PushEvent") {
                    console.log(githubEvent.created_at);
                    return new Date(githubEvent.created_at);
                }
            }
        });
}

getLastPushDate("douglas-codeup")
    .then((date)=>console.log(date));