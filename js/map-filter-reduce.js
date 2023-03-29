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
// acc  = accumulator
// curr = current value

const moreThanThree = users.filter(user => user.languages.length >= 3 );
console.log(moreThanThree);

const userEmails = users.map(input => input.email);
console.log(userEmails);

const totalXP =  users.reduce((acc, curr) => {
    return acc + curr.yearsOfExperience;
}, 0);
console.log(totalXP);

const averageXP = totalXP / users.length;
console.log(averageXP);

const longestEmail = users.reduce((acc, curr) => {
    if(curr.email.length > acc.length){
        return curr.email;
    } else {
        return acc;
    }
}, '');
console.log(longestEmail);

const userNames = users.reduce((acc, curr, index, array)=> {
    if(index === array.length -1) {
        acc.push(curr.name);
        let names = "Your instructors are: " + acc.join(', ');
        return names
    } else{
        acc.push(curr.name);
        return acc;
    }
}, []);
console.log(userNames);
// instructors way:
let instructors = users.reduce((acc, user, index)=> {
    if (index+1 === users.length){
    return acc + `${user.name}. `;
    }
    return acc + `${user.name}, `;
},`Your instructors are: `);

// userNames as an arrow function called names
names = (arrayOfObjects) => {
    return arrayOfObjects.reduce((acc, curr, index, array)=>{
        if(index === array.length -1) {
            acc.push(curr.name);
            let names = acc.join(', ');
            return names
        } else{
            acc.push(curr.name);
            return acc;
        }
    }, []);
}
console.log(names(users))

let uniqueLanguages = users.reduce((acc, user)=>{
    user.languages.forEach(function(language){
        if(!acc.includes(language)){
            acc.push(language);
        }
    });
    return acc;
},[]);
console.log(uniqueLanguages);

// using map to reform objects in an array
let books = [
    {title:`The Salmon of Doubt`, published: '1234', genre: 'history', author: { firstName: `Douglas`, lastName: `Adams`}},
    {title:`Walkaway`, published: '4321', genre: 'history', author: { firstName: `Cory`, lastName: `Doctorow`}},
    {title:`A Brief History of Time`, published: '1122', genre: 'history', author: { firstName: `Stephen`, lastName: `Hawking`}},
    {title:`Grumpy Monkey`, published: '2211', genre: 'fiction', author: { firstName: `Suzanne`, lastName: `Long`}},
    {title:`Fairy Tale`, published: '1254', genre: 'fiction', author: { firstName: `Stephen`, lastName: `King`}},
];
let fictionBooks = books.map(book => {
   if (book.genre === "fiction"){
       return {
           title: book.title,
           published: book.published,
           genre: book.genre,
           author: `${book.author.lastName}, ${book.author.firstName}`
       }
   }
}).filter(book => book);
console.log(fictionBooks)
