let recipeCards = [];

function RecipeCard(name, image){
    this.recipeName = name;
    this.recipeImage = image;
}

//When the 'add recipe' button is clicked, display the modal form named 'addRecipeDialog' on-screen
document.getElementById('add-recipe-btn').addEventListener('click', function(){
    let addRecipeDialog = document.querySelector("#add-recipe-dialog"); //stores and selects the modal form to 'add a recipe'
    addRecipeDialog.showModal() //displays the modal form named 'addRecipeDialog'
});

//When the 'add a recipe log' button is clicked, display the modal form named 'addRecipeDialog' on-screen
document.getElementById('add-recipe-log-btn').addEventListener('click', function(){
    let addRecipeLogDialog = document.querySelector("#add-recipe-log-dialog"); //stores and selects the modal form to 'add a recipe log'
    addRecipeLogDialog.showModal() //displays the modal form named 'addRecipeLogDialog'
});

//Code to build an SPA with vanilla JS
//Sourced from https://dev.to/dcodeyt/building-a-single-page-app-without-frameworks-hl9
//(Dom, 2020)

//

const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Viewing Dashboard") },
        { path: "/dessert-recipes-list", view: () => console.log("Viewing Dessert-Recipes-List") },
    ];
};



let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

/* Route not found - return first route OR a specific "not-found" route */
if (!match) {
    match = {
        route: routes[0],
        result: [location.pathname]
    };
}

console.log(match);

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    /* Document has loaded -  run the router! */
    router();
});

window.addEventListener("popstate", router);

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};
