const myPracticeObject = {
    name: 'Object',
    purpose: 'storing values and functions',
    sayHello: function() {
        return `I am ${myPracticeObject.name} and my purpose is ${myPracticeObject.purpose}`;
    }
};

myPracticeObject.name = 'William';
myPracticeObject.purpose = 'To make a difference in the world and pray for peace through my actions'
myPracticeObject.hobbies = ['playing guitar', 'writing poesia', 'aprendiendo cosas nuevas'];
myPracticeObject.listHobbiesAsString = function() {
    let sentence = 'My hobbies include ';
    const listOfHobbies = myPracticeObject.hobbies.join(', '); // .join() is an array method
    sentence += listOfHobbies;
    sentence += '.';
    return sentence;
};

myPracticeObject.address = {
    street: '222',
    city: 'Grace City',
    province: 'Alberta Baby',
    postalCode: 'T2P 7I9'
};




const recipes = [
    {
        name: 'Spaghetti Carbonara',
        ingredients: ['spaghetti', 'eggs', 'pancetta', 'parmesan cheese', 'black pepper'],
        instructions: 'Boil spaghetti in salted water, cook pancetta until crispy, whisk together eggs and cheese, combine everything in a pan and add black pepper.',
        servings: 4,
        difficulty: 'Intermediate'
    },
    {
        name: 'Chicken Tikka Masala',
        ingredients: ['chicken breasts', 'greek yogurt', 'garlic', 'ginger', 'cumin', 'coriander', 'paprika', 'tomato sauce', 'heavy cream'],
        instructions: 'Marinate chicken in yogurt and spices, grill or bake until cooked through, simmer tomato sauce and cream together and add chicken.',
        servings: 6,
        difficulty: 'Intermediate'
    },
    {
        name: 'Mushroom Risotto',
        ingredients: ['arborio rice', 'chicken or vegetable broth', 'butter', 'olive oil', 'mushrooms', 'onion', 'garlic', 'parmesan cheese'],
        instructions: 'Sauté mushrooms, onions, and garlic, add rice and cook until translucent, add broth gradually while stirring, finish with cheese and butter.',
        servings: 4,
        difficulty: 'Advanced'
    },
    {
        name: 'Chocolate Chip Cookies',
        ingredients: ['butter', 'white sugar', 'brown sugar', 'eggs', 'vanilla extract', 'flour', 'baking soda', 'salt', 'chocolate chips'],
        instructions: 'Cream butter and sugars together, add eggs and vanilla, combine dry ingredients and add to wet mixture, stir in chocolate chips, bake in oven.',
        servings: 24,
        difficulty: 'Easy'
    },
    {
        name: 'Guacamole',
        ingredients: ['avocado', 'onion', 'jalapeño', 'lime', 'cilantro', 'salt'],
        instructions: 'Mash avocados in a bowl, add chopped onion, jalapeño, and cilantro, squeeze lime juice and sprinkle salt, mix everything together.',
        servings: 4,
        difficulty: 'Easy'
    }
];

const easyRecipes = [];
for (let recipe of recipes) {
    if (recipe.difficulty === 'Easy') {
        easyRecipes.push(recipe);
    }
}
const eggRecipes = [];
for (const recipe of recipes) {
    if (recipe.ingredients.includes('eggs')) {
        eggRecipes.push(recipe);
    }
}

console.log(eggRecipes);