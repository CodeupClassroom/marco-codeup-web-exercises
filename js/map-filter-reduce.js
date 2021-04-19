const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let filteredUsers = users.filter(function(user){
        return user.languages.length > 2;
   })

console.log(filteredUsers);

//TODO: Use .map to create an array of strings where each element is a user's email address

let emails = users.map(function(user){
    return user.email;
})

console.log(emails);

//TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalYears = users.reduce(function(totalYears, user){
    return totalYears + user.yearsOfExperience;
}, 0)

let averageYears = totalYears / users.length;

console.log(averageYears);
console.log(totalYears);

//TODO: Use .reduce to get the longest email from the list of users.

let longestEmail = users.reduce(function(longestEmail, user){

    if(user.email.length > longestEmail.length){
        longestEmail = user.email
    }
    return longestEmail;

}, "")

console.log(longestEmail);

// //TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let usernameString = users.reduce(function(accumulator, user){
    return `${accumulator} ${user.name},`;
}, 'instructors are: ').slice(0, -1) + ".";

console.log(usernameString);

let mapJoinSolution = `instructors are: ${users.map(user=>user.name).join(', ')}.`;
console.log(mapJoinSolution);