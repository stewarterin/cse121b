/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Erin Stewart',
    photo: 'w02-task/images/erin23.JPG',
    favoriteFoods: [
        'Sushi', 
        'Salmon', 
        'Beef roast', 
        'Muffins', 
        'Tomato soup', 
        'Carnitas tacos'
    ],
    hobbies: [
        'Reading',
        'Family History Research',
        'Board Games',
        'Puzzles'
    ],
    placesLived: [],
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push (
    {
        place: 'Bountiful, Utah',
        length: '23 years'
    }
);
myProfile.placesLived.push (
    {
        place: 'Logan, Utah',
        length: '3 years'
    }
);
myProfile.placesLived.push (
    {
        place: 'Avondale, Arizona',
        length: '3 years'
    }
);
myProfile.placesLived.push (
    {
        place: 'Caldwell, Idaho',
        length: '4 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
const imageElement = document.querySelector('#photo');

imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement('li');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */

